# Portfolio CMS Backend  
Node.js + Express + MongoDB backend API built for a dynamic Portfolio CMS.  
Supports admin authentication, CRUD operations, Cloudinary image upload, and content management for:

- About Section  
- Projects  
- Blogs  
- Experience  
- Testimonials  
- Services  
- Contact Messages  

This backend is designed to be used with a React Admin Panel and a Next.js Portfolio Frontend.

---

## 🚀 Features  
- JWT Authentication (Admin Login)  
- MongoDB (Mongoose)  
- Cloudinary Uploads (Images)  
- Portfolio API Routes  
- Contact Form API  
- Fully Deployable to **Render**  
- Secure `.env` configuration  

---

## 📦 Installation  

### 1️⃣ Clone Repository  
```
git clone https://github.com/YOUR_USERNAME/portfolio-cms-backend.git
```

### 2️⃣ Install Dependencies  
```
npm install
```

### 3️⃣ Setup `.env` File  
Create a file named `.env` in root:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:3000
```

---

## 👤 Seed Admin User  

Create default admin:

```
node seedAdmin.js
```

Default login:

- **Email:** admin@portfolio.com  
- **Password:** Admin@1234  

(Change later!)

---

## ▶️ Start Development Server  
```
npm run dev
```

Open:  
👉 http://localhost:5000

---

## 📚 API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/login` | POST | Login |
| `/api/about` | GET | Fetch About |
| `/api/about` | PUT | Update About (Admin) |
| `/api/projects` | GET | Get Projects |
| `/api/projects` | POST | Create Project |
| `/api/projects/:id` | PUT | Update Project |
| `/api/projects/:id` | DELETE | Delete Project |
| `/api/blogs` | GET | Blog List |
| `/api/blogs/:slug` | GET | Blog Details |
| `/api/blogs` | POST | Create Blog |
| `/api/experience` | GET | Experience List |
| `/api/testimonials` | GET | Testimonials |
| `/api/services` | GET | Services |
| `/api/contact` | POST | Save Contact Message |
| `/api/upload/image` | POST | Upload Image |

---

## 🌐 Deployment (Render)

### 1️⃣ Push project to GitHub  
### 2️⃣ Go to Render → New Web Service  
### 3️⃣ Connect Repository  
### 4️⃣ Set Build Command: _empty_  
### 5️⃣ Set Start Command:
```
npm start
```
### 6️⃣ Add Environment Variables  
### 7️⃣ Deploy 🚀  

---

## 📌 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Cloudinary**
- **JSON Web Token (JWT)**

---

## 🤝 License  
Free to use and customize.
