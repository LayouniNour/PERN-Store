import { sql } from "../config/db.js";

export const createProduct = async (req, res) => {
  const { name, image, price } = req.body;

  if (!name || !image || !price) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct = await sql`
    INSERT INTO products (name, image, price)
    VALUES (${name}, ${image}, ${price})
    RETURNING *
    `;

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct[0],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC
    `;

    console.log("fetched products", products);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const singleProduct = await sql`SELECT * FROM products  WHERE id = ${id}::uuid`;
    if (!singleProduct[0]) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: singleProduct[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  try {
    const updatedProduct = await sql`UPDATE products
    SET name = ${name}, image = ${image}, price = ${price}
    WHERE id = ${id}::uuid
    RETURNING *
    `;
    if (updatedProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct[0],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql
    `DELETE FROM products
    WHERE id = ${id}::uuid
    RETURNING *
    `;

    if (deletedProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct[0],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
