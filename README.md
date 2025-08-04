# MERN E-commerce Application

## Overview

This project is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features such as user authentication, product browsing, shopping cart functionality, order placement, and admin panel for managing users, products, and orders.

## Features

-   **User Authentication:**
    -   Sign-up and sign-in functionality.
    -   Password reset using "Forgot Password".
    -   User roles (Admin, Customer).
    -   Secure authentication using JWT (JSON Web Tokens).
-   **Product Management:**
    -   Browse products by category.
    -   View product details.
    -   Search products.
    -   Filter products.
    -   Admin panel to upload, update, and manage products.
-   **Shopping Cart:**
    -   Add products to the cart.
    -   View and update cart items.
    -   Delete products from the cart.
-   **Order Management:**
    -   Place orders.
    -   View order history.
    -   Admin panel to view all orders.
-   **Payment Integration:**
    -   Payment processing using Stripe.
    -   Webhooks for handling payment events.
-   **Admin Panel:**
    -   Manage users (view and update).
    -   Manage products (upload, view, and update).
    -   Manage orders (view all orders).

## Technologies Used

-   **Frontend:**
    -   React.js
    -   Redux for state management
    -   React Router for navigation
    -   Tailwind CSS for styling
    -   Axios for API requests
-   **Backend:**
    -   Node.js
    -   Express.js
    -   Mongoose for MongoDB object modeling
    -   JSON Web Tokens (JWT) for authentication
    -   Stripe for payment processing
-   **Database:**
    -   MongoDB

## Setup Instructions

### Prerequisites

-   Node.js and npm installed
-   MongoDB installed and running
-   Stripe account for payment processing

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Configure backend environment variables:**

    -   Create a `.env` file in the `backend` directory.
    -   Add the following environment variables:

        ```
        PORT=8080
        MONGODB_URI=<your-mongodb-connection-string>
        TOKEN_SECRET_KEY=<your-secret-key>
        STRIPE_SECRET_KEY=<your-stripe-secret-key>
        STRIPE_PUBLIC_KEY=<your-stripe-public-key>
        FRONTEND_URL=<your-frontend-url>  // e.g., http://localhost:3000
        ```

4.  **Run the backend server:**

    ```bash
    npm start
    ```

5.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

6.  **Configure frontend environment variables:**

    -   Create a `.env` file in the `frontend` directory.
    -   Add the following environment variable:

        ```
        REACT_APP_BACKEND_URL=<your-backend-url>  // e.g., http://localhost:8080
        ```

7.  **Run the frontend application:**

    ```bash
    npm start
    ```

## API Endpoints

The backend provides the following API endpoints:

-   `POST /api/signup`: User sign-up
-   `POST /api/signin`: User sign-in
-   `GET /api/user-details`: Get current user details (requires authentication)
-   `GET /api/userLogout`: User logout
-   `GET /api/all-user`: Get all users (requires admin authentication)
-   `POST /api/update-user`: Update user details (requires admin authentication)
-   `POST /api/upload-product`: Upload a product (requires admin authentication)
-   `GET /api/get-product`: Get all products
-   `POST /api/update-product`: Update a product (requires admin authentication)
-   `GET /api/get-categoryProduct`: Get all product categories
-   `POST /api/category-product`: Get products by category
-   `POST /api/product-details`: Get product details
-   `POST /api/addtocart`: Add product to cart (requires authentication)
-   `GET /api/countAddToCartProduct`: Get cart product count (requires authentication)
-   `GET /api/view-card-product`: View cart products (requires authentication)
-   `POST /api/update-cart-product`: Update cart product (requires authentication)
-   `POST /api/delete-cart-product`: Delete cart product (requires authentication)
-   `GET /api/search`: Search products
-   `POST /api/filter-product`: Filter products
-   `POST /api/checkout`: Create a checkout session (requires authentication)
-   `POST /api/webhook`: Stripe webhook endpoint
-   `GET /api/order-list`: Get user order list (requires authentication)
-   `GET /api/all-order`: Get all orders (requires admin authentication)

## Models

-   **User Model:**
    -   `name`: String
    -   `email`: String (unique, required)
    -   `password`: String
    -   `profilePic`: String
    -   `role`: String (default: "CUSTOMER")
-   **Order Model:**
    -   `productDetails`: Array (details of products in the order)
    -   `email`: String
    -   `userId`: String
    -   `paymentDetails`: Object (payment information)
        -   `paymentId`: String
        -   `payment_method_type`: Array
        -   `payment_status`: String
    -   `shipping_options`: Array
    -   `totalAmount`: Number

## Contributing

Feel free to contribute to the project by
