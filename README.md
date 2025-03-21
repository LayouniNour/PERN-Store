# PostgreStore - PERN Stack E-commerce

A full-stack e-commerce application built with the PERN (PostgreSQL, Express, React, Node.js) stack.

## 🔴 Live Demo

[PostgreStore Live](https://pern-store-xowm.onrender.com)

## ✨ Features

- 🛍️ Product listing with dynamic grid layout
- 🌓 Dark/Light theme support
- ➕ Add new products with modal form
- 🖼️ Image URL support for products
- 💰 Price formatting and validation
- 🔄 Real-time updates
- 🎯 Rate limiting with Arcjet
- 🆔 UUID for secure product IDs
- 📱 Responsive design

## 🛠️ Tech Stack

- **Frontend:**
  - React
  - TailwindCSS
  - DaisyUI
  - Zustand (State Management)
  - React Router DOM
  - Lucide React (Icons)

- **Backend:**
  - Node.js
  - Express
  - PostgreSQL (Neon DB)
  - UUID
  - Arcjet (Rate Limiting)

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone [your-repo-link]
```

2. Install dependencies:
```bash
# Root directory
npm install

# Frontend directory
cd frontend
npm install
```

3. Set up environment variables:
```env
# .env
PORT=3000
PGHOST=your_neon_db_host
PGDATABASE=your_db_name
PGUSER=your_db_user
PGPASSWORD=your_db_password
ARCJET_KEY=your_arcjet_key
```

4. Run development servers:
```bash
# Backend (root directory)
npm run dev

# Frontend (frontend directory)
npm run dev
```

5. Seed the database:
```bash
npm run seed
```

## 📁 Project Structure
dekho ekhno blank

Let's try a different approach. Since the icons are not showing up, let's try adding opacity and a different text color:
Apply to AddProductMo...
<div className="absolute inset-y-0 left-0 pl-3 flex items-center opacity-70">
  <ImageIcon className="w-5 h-5 text-neutral-content"/>
</div>
Key changes:
Removed text-base-content
Added opacity-70
Added text-neutral-content directly to icons
If this still doesn't work, we could try:
Using different icons from lucide-react
Adding !important to the icon styles
Checking if there's any CSS that might be hiding the icons
Can you also check your browser console for any errors related to the icons?
ami relative ar absolute use korte chacchi na 
normal 

ekta box thakbe sekhane icon ar input box pasapasi thakbe 
then box er ekta border thakbe 

Ah, let's simplify it with a flex layout:
Apply to AddProductMo...
same
Key changes:
Removed relative/absolute positioning
Used flex with gap-2 for icon and input alignment
Added a border to the container div
Removed border from input and added border-none
Added padding to container with px-3
Added rounded-lg for rounded corners
Now you have:
Icons and inputs side by side
A single border around both
Clean, simple layout without positioning tricks
amake ektu bujhao to ei file e ki ki kra hoise ?

এই product.js ফাইলে ডাটাবেজে সিড ডাটা ইনসার্ট করা হয়েছে। চলুন স্টেপ বাই স্টেপ বুঝি:
প্রথমে স্যাম্পল প্রোডাক্ট এর একটা অ্যারে তৈরি করা হয়েছে:
Apply to readme.md
;
seedDatabase() ফাংশনে দুইটা কাজ করা হয়েছে:
Apply to readme.md
}
মূল পয়েন্টগুলো:
TRUNCATE TABLE দিয়ে টেবিল খালি করা হয়
RESTART IDENTITY দিয়ে ID আবার 1 থেকে শুরু করা হয়
লুপ চালিয়ে প্রতিটা প্রোডাক্ট ইনসার্ট করা হয়
সাকসেস হলে প্রোগ্রাম exit(0) দিয়ে বন্ধ হয়
এরর হলে exit(1) দিয়ে বন্ধ হয়
এই ফাইল রান করলে ডাটাবেজে 8টা টেস্ট প্রোডাক্ট অটোমেটিক্যালি ঢুকে যাবে। এটা ডেভেলপমেন্টের সময় টেস্টিং এর জন্য খুবই উপকারী।
file ta run korte chai

seeds/product.js ফাইল রান করার জন্য:
প্রথমে package.json এ একটা স্ক্রিপ্ট যোগ করুন:
Apply to readme.md
 "seed": "node backend/seeds/product.js"
তারপর টার্মিনালে রান করুন:
Apply to readme.md
Run
seed
অথবা, ডিরেক্ট Node দিয়েও রান করতে পারেন:
Apply to readme.md
Run
js
রান করলে:
আগের সব প্রোডাক্ট ডিলিট হয়ে যাবে
নতুন 8টা টেস্ট প্রোডাক্ট ঢুকে যাবে
কনসোলে "Database seeded successfully" মেসেজ দেখাবে
এরর আসলে চেক করুন:
ডাটাবেজ কানেকশন ঠিক আছে কিনা
.env ফাইলে সব ঠিক আছে কিনা
but in the tutorial i see now in localhost 3000 he see his front end

but i see errror

The error is happening because your frontend is running on port 5173 (Vite's default) and backend on 3000. To see frontend on port 3000 in production mode, you need to:
First build your frontend:
Apply to readme.md
Run
build
Make sure your server.js has the correct static file serving code (which you already have):
Apply to readme.md
}
Set NODE_ENV to production in your .env:
Apply to readme.md
production
Run your server:
Apply to readme.md
Run
start
For development, you should:
Keep frontend running on 5173 (npm run dev in frontend folder)
Keep backend running on 3000 (npm run dev in root folder)
Use the 5173 port for development
The tutorial might be showing production mode, while you're in development mode, which is why you're seeing different behaviors.
 https://pern-store-xowm.onrender.com

make a readme file for this in github 

Here's a README.md file for your project:
Apply to readme.md
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── productController.js
│ ├── lib/
│ │ └── arcjet.js
│ ├── routes/
│ │ └── productRoutes.js
│ ├── seeds/
│ │ └── product.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ └── App.jsx
│ └── index.html
│
└── package.json

## 🔒 Security Features

- Helmet for secure headers
- CORS enabled
- Rate limiting with Arcjet
- UUID for product IDs
- Environment variable protection

## 🛠️ Development

- **Frontend Development**: `npm run dev` in frontend directory
- **Backend Development**: `npm run dev` in root directory
- **Database Seeding**: `npm run seed`
- **Production Build**: `npm run build`

## 🚀 Deployment

The application is deployed on Render.com with the following configuration:

- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

[MD Asifuzzaman Suvo]

---

⭐️ Star this repo if you find it helpful!