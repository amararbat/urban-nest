# UrbanNEST - Real Estate Management Application

## Overview

UrbanNEST is a full-stack real estate management application designed to simplify property management for users and administrators. It offers secure authentication, property listing management with CRUD operations, image uploads, and an advanced property search. Built using the MERN stack with JWT for authentication and Firebase for image storage, the application provides a seamless user experience across devices.

## Features

- **User Authentication**: Secure login and registration with JWT for session management.
- **Property Management**: Create, Read, Update, and Delete property listings.
- **Image Uploads**: Firebase integration for uploading property images.
- **Advanced Property Search**: Filter properties by location, price, type, etc.
- **Responsive Design**: Works across both desktop and mobile platforms.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Image Storage**: Firebase
- **Hosting**: (Mention your hosting service here, e.g., Vercel, Heroku)

## **Installation Instructions**

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/your-username/UrbanNEST.git
```

### **Step 2: Navigate to the Project Directory**

```bash
cd UrbanNEST
```

### **Step 3: Install Backend Dependencies**

```bash
npm install
```

### **Step 4: Install Frontend Dependencies**

```bash
cd client
npm install
```

### **Step 5: Configure Environment Variables**

Create a `.env` file in the root directory with the following environment variables:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

### **Step 6: Run the Application**

- To start the backend server:
  
  ```bash
  npm run dev
  ```

- To start the frontend development server, navigate to the `client` folder:

  ```bash
  cd client
  npm start
  ```

### **Step 7: Access the Application**

Open your browser and visit `http://localhost:3000` to use the application.

## Contributing

Feel free to fork the repository and submit pull requests if you'd like to contribute or report issues.

---


