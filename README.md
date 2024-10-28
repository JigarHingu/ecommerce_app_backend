# King's Collection - E-commerce Web Application

King's Collection is a clothing e-commerce platform built with React, providing a full-featured shopping experience with integrated payment processing, cart and order management, and backend connectivity.

## 1. Project Overview

### 1.1 Purpose
King's Collection aims to provide a seamless shopping experience for customers, enabling users to browse, add items to their cart, and securely complete purchases. The application includes user authentication, cart persistence, and an admin panel for managing orders.

### 1.2 Key Features
- **Product Browsing:** View products with images, ratings, and size options.
- **Cart Management:** Add, update, and remove items from the cart.
- **User Authentication:** Google login for easy access and cart data storage.
- **Payment Integration:** Supports payments via Stripe and Razorpay, along with a COD option.
- **Order Management:** View and manage orders, with order history available to users.
- **Admin Panel:** Full access to order details, including status updates.
- **Responsive Design:** Optimized for both desktop and mobile viewing.

### 1.3 Technology Stack
- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Image Storage:** Cloudinary
- **Payment Gateways:** Stripe, Razorpay

## 2. Setup and Installation

### 2.1 Prerequisites
- **Node.js** (v14 or later)
- **MongoDB** (URI for remote or local database)
- **Stripe & Razorpay** (API keys for payment processing)
- **Cloudinary** (API credentials for image storage)

### 2.2 Environment Variables

Create a `.env` file in the root directory and add the following variables:

MONGODB_URI=<your_mongoDB_URI>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_SECRET_KEY=<your_cloudinary_secret_key>

### 2.3 Installation Steps

1. Clone the Repository:

```bash
git clone https://github.com/JigarHingu/ecommerce_app_backend.git
cd ecommerce_app_backend
```

2. Install Dependencies:

- Backend:
```bash
cd backend
npm install
```

- Frontend: 
```bash
cd frontend/
npm install
```

3. Start the Application:

- Run Backend:
```bash
cd backend/
npm run start
```

- Run Frontend:
```bash
cd ../frontend
npm run dev
```

4. Access the Application: Visit http://localhost:3000 to view the frontend and http://localhost:5000 for backend API endpoints.

## Code Structure and Key Functionalities

This section outlines the primary backend functionalities for "King's Collection," including order processing, payment integration, cart management, and database connectivity.

### 3.1 Overview of Key Modules and Functionality

Each module is designed to manage core e-commerce operations, enabling secure payment processing, efficient order handling, and responsive cart management.

####  Order Management (orderController.js)

- Payment Methods:

- Cash on Delivery (COD): Places an order in the database with "COD" as the payment method.
- Stripe Integration: Processes payments through Stripe by creating a session URL for secure checkout.
- Razorpay Integration: Uses Razorpay’s API to generate orders and verify successful transactions.

- Order Verification:

- Stripe and Razorpay Verification: Ensures the payment was successful. If unsuccessful, the order is removed.

- Admin Operations:

- Fetch All Orders: Retrieves a list of all orders for admin use.
- Update Order Status: Allows the admin to update the order status (e.g., to "shipped" or "delivered").

- User-Specific Orders:

Retrieve User Orders: Fetches a user’s order history for display on their account page.

#### 3.1.2 Cart Management (cartController.js)

- Add to Cart: Adds an item to a user's cart, handling multiple sizes.
- Update Cart: Modifies the quantity or size of items in the cart.
- Retrieve Cart: Fetches the current cart contents for a specific user.

#### 3.1.3 Database and Cloudinary Connectivity

- MongoDB Connection (db.js): Uses Mongoose to connect to MongoDB and manages connection events.
- Cloudinary Setup (cloudinary.js): Configures Cloudinary to manage product images, using environment variables for secure access.

## 3.2 API Endpoints

Below are the key API endpoints for order and cart management:

- Order Processing APIs:

- POST /api/order/cod - Places an order using the Cash on Delivery method.
- POST /api/order/stripe - Places an order with Stripe, initiating a payment session.
- POST /api/order/razorpay - Places an order using Razorpay.
- POST /api/order/verifyStripe - Verifies a Stripe payment.
- POST /api/order/verifyRazorpay - Verifies a Razorpay payment.
- GET /api/order/allOrders - Retrieves all orders for the admin panel.
- POST /api/order/userOrders - Fetches orders for a specific user.

- Cart Management APIs:

- POST /api/cart/addToCart - Adds an item to a user's cart.
- POST /api/cart/updateCart - Updates the quantity of an item in the cart.
- GET /api/cart/getUserCart - Retrieves cart contents for the user.

## 3.3 Environment Variables

The application uses environment variables stored in a .env file for secure management of sensitive data. Key variables include:

- MongoDB URI - Connection string for MongoDB.
- Stripe API Key - For Stripe payment processing.
- Razorpay API Key - For Razorpay payment gateway integration.
- Cloudinary Credentials - For Cloudinary image storage and management.

```bash
# MongoDB URI for MongoDB database connection
MONGODB_URI=<Your MongoDB URI>

# Stripe Secret Key for Stripe payment processing
STRIPE_SECRET_KEY=<Your Stripe Secret Key>

# Razorpay Key ID & Key Secret for Razorpay API integration
RAZORPAY_KEY_ID=<Your Razorpay Key ID>
RAZORPAY_KEY_SECRET=<Your Razorpay Key Secret>

# Cloudinary Credentials (Name, API Key, Secret) for image storage and access via Cloudinary
CLOUDINARY_NAME=<Your Cloudinary Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_SECRET_KEY=<Your Cloudinary Secret Key>
```

## 3.4 Key Features Summary

- Order Management: Flexible options for order placement, verification, and status updates.
- Payment Gateways: Supports multiple payment methods (COD, Stripe, Razorpay).
- Cart Management: Efficient cart operations with size and quantity updates.
- Secure Configuration: Sensitive data stored in .env for enhanced security.

## 4. Future Enhancements

Several features are planned to enhance user experience and backend functionality:

- Wishlist Feature: Allow users to save items for future purchases.
- Reviews and Ratings: Enable product reviews and ratings by authenticated users.
- Enhanced Admin Panel: Include more analytics and order filtering options for better management.
- User Profiles: Allow users to manage their profile data, including order history and account information.
- Improved Notifications: Implement email or SMS notifications for order updates and promotional offers.

## 5. Contribution Guidelines

### 5.1 How to Contribute
We welcome contributions to improve King's Collection. If you'd like to contribute, please follow these steps:

1. Fork the Repository on GitHub.
2. Create a New Branch for your feature:
```bash
git checkout -b feature/YourFeature
```
3. Make Your Changes and commit them.
4. Push to Your Forked Repository:
```bash
git push origin feature/YourFeature
```
5. Open a Pull Request with a detailed description of your changes.