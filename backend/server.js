import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(helmet());
app.use(morgan("dev"));

app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 100 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ error: "Too Many Requests" });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ error: "Bot access denied" });
      } else {
        return res.status(403).json({ message: "Forbidden" });
      }
    }
    if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
        res.status(403).json({ error: "Spoofed bot access denied" });
        return;
    }
    next();
  } catch (error) {
    console.error("arcjet error", error);
    next(error);
  }
});

app.use("/api/products", productRoutes);

async function initDB() {
  try {
    await sql`
   CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )
    `;
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
