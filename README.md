# 🌐 ProMan - (product-manager)

A modern product management web application built with Next.js, featuring user authentication, product catalog, and dashboard functionality.

---

##🔑 Key Features

- User Authentication: Secure login and registration system, Session management with NextAuth, Protected routes for authenticated users
- Product Catalog: Detailed product pages with individual listings ([id] pages), Product highlights section with featured products, Responsive product cards and display components
- Dashboard Interface: User-specific dashboard for managing content, Clean and intuitive user interface
- Responsive Design: Mobile-friendly navigation with SmallDevice component, Responsive layout across all screen sizes, Modern Hero section and footer components
- Backend Integration: API routes for authentication and products, Database connection with dbConnect.js, Server actions for auth operations

---

## 🚀 Tech Stack

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![NextAuth](https://img.shields.io/badge/-NextAuth.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)


---

## 🛠️ NPM Packages

This project uses the following major NPM packages:
- Frontend: Next.js 15.5, React 19, React DOM
- Authentication: NextAuth 4.24, bcrypt
- Database: MongoDB 6.18
- HTTP Client: Axios 1.11
- UI Components: React Icons 5.5, Lottie React 2.4
- Notifications: SweetAlert2 11.22

---

## 🔗 Live Link
[👉 Visit Live Site](https://product-manager-xi-orcin.vercel.app/)

---

## 🧪 Installation Steps


1. Clone the repository:

```bash
git clone <https://github.com/MizanRbf/product-manager.git>
cd product-manager
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
Create a .env.local file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server

```bash
npm run dev
```

5. Open your browser: 
Navigate to http://localhost:3000

---

Copyright © 2025 - All rights reserved by ProMan.
