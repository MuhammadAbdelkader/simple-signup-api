# Simple Signup API

This is a minimal Node.js + Express backend API for user signup and profile access using JWT authentication. It is **fully deployed** and ready to test with no setup needed — all environment variables and database connection are already handled.

---

## 🌐 Live API Endpoint

Deployed on **Vercel**  
🔗 [`https://simple-signup-api.vercel.app`](https://simple-signup-api.vercel.app)

Database is hosted on **MongoDB Atlas**:
- **Cluster**: Cluster0  
- **User**: MohamedAbdelkader  
- **Database Name**: mydb  
- **Collection**: users

---

## 📦 Tech Stack

- **Backend**: Node.js + Express  
- **Database**: MongoDB Atlas (via Mongoose)  
- **Authentication**: JWT (JSON Web Tokens)  
- **Hosting**: Vercel

---

## 🔐 Features

- User signup with hashed password using bcrypt
- JWT generation upon successful signup
- Protected route to access authenticated user profile
- MongoDB Atlas integration
- Token-based authentication via HTTP headers

---

## ✅ API Endpoints

### 1️⃣ `POST /signup` — Register a New User

- **URL:**  
  `https://simple-signup-api.vercel.app/signup`

- **Method:** `POST`

- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

- **Expected Response:**

```json
{
  "message": "Signup successful!",
  "token": "your-access-token"
}
```

---

### 2️⃣ `GET /profile` — Get Authenticated User Profile

- **URL:**  
  `https://simple-signup-api.vercel.app/profile`

- **Method:** `GET`

- **Required Headers:**

```http
Authorization: Bearer your-access-token
```

- **Expected Response:**

```json
{
  "message": "Your profile info:",
  "user": {
    "_id": "user-id",
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

---

## 🧪 How to Test with Postman

1. **Open Postman** (or any API client like Hoppscotch or Insomnia).

2. **Send a POST request to:**  
   `https://simple-signup-api.vercel.app/signup`

3. **Set the Body to → raw → JSON**, and paste:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

4. **Copy the `token`** from the response.

5. **Send a GET request to:**  
   `https://simple-signup-api.vercel.app/profile`

6. **Add this header:**

```http
Authorization: Bearer your-token-here
```

7. ✅ If the token is valid, you will receive the user's profile info.

---

## 📌 Notes

- No need to clone or install anything — the API is live and ready to test.
- Environment variables and MongoDB credentials are already configured in deployment.
- Works with any API testing tool: Postman, Hoppscotch, Insomnia, etc.
- Feel free to fork the repo and customize it for your own project.

---

## 👨‍💻 Author

**Mohamed Abdelkader**  
💻 GitHub: [@MuhammadAbdelkader](https://github.com/MuhammadAbdelkader)
