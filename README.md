# King's Collection

## 1. Project Overview

### 1.1 Introduction
- King's Collection is an e-commerce platform for purchasing clothing and accessories, providing a seamless shopping experience.
- Features include product listings, cart management, multiple payment gateways, and an admin panel for managing orders and inventory.

### 1.2 Technologies Used
- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **APIs and Libraries**: Stripe, Razorpay, Cloudinary, Multer
- **Additional**: React Context API, Axios, dotenv

---

## 2. Getting Started

### 2.1 Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** instance or **MongoDB Atlas** account
- **Cloudinary** account for image hosting
- **Stripe** and **Razorpay** accounts for payment processing

### 2.2 Environment Variables
- Create a `.env` file in both the backend and frontend directories.
- Add the following variables:

```bash
# MongoDB
MONGODB_URI=<Your MongoDB URI>

# Cloudinary
CLOUDINARY_NAME=<Your Cloudinary Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_SECRET_KEY=<Your Cloudinary Secret Key>

# Stripe
STRIPE_SECRET_KEY=<Your Stripe Secret Key>

# Razorpay
RAZORPAY_KEY_ID=<Your Razorpay Key ID>
RAZORPAY_KEY_SECRET=<Your Razorpay Key Secret>
2.3 Installation Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/kings-collection.git
cd kings-collection
Install Dependencies:

Backend:
bash
Copy code
cd backend
npm install
Frontend:
bash
Copy code
cd ../frontend
npm install
Set Up Environment Variables:

Add variables from Section 2.2 into .env files in backend and frontend.
Start the Application:

Backend Server:
bash
Copy code
cd backend
npm start
Frontend Development Server:
bash
Copy code
cd frontend
npm start
Access the Application:

Frontend: http://localhost:3000
Backend: http://localhost:5000
3. Code Structure and Key Functionalities
3.1 Overview of Key Modules and Functionalities
3.1.1 Order Management (orderController.js)
Placing Orders: Supports Cash on Delivery, Stripe, and Razorpay options.
Payment Verification: Verifies payments and updates order status.
Admin Order Management: Admins can view and update order statuses.
User Order History: Users can access order history on their profile page.
3.1.2 Payment Gateways Integration
Stripe: For a secure, integrated checkout.
Razorpay: For localized payment options.
Cash on Delivery: Allows orders without immediate payment.
3.1.3 Cart Management (cartController.js)
Add to Cart: Adds items to the cart with support for size selection.
Update Cart: Allows quantity adjustments and size updates.
Retrieve Cart: Loads cart data from MongoDB across sessions.
3.1.4 Database and Image Storage
MongoDB Connection (db.js): Connects to MongoDB.
Cloudinary (cloudinary.js): Manages image storage and retrieval.
3.2 API Endpoints
Order-Related Endpoints:
bash
Copy code
POST /api/order/cod             # Cash on Delivery order
POST /api/order/stripe          # Stripe payment order
POST /api/order/razorpay        # Razorpay payment order
POST /api/order/verifyStripe    # Stripe payment verification
POST /api/order/verifyRazorpay  # Razorpay payment verification
GET /api/order/allOrders        # Fetch all admin orders
POST /api/order/userOrders      # Retrieve user's order history
Cart-Related Endpoints:
bash
Copy code
POST /api/cart/addToCart        # Add item to cart
POST /api/cart/updateCart       # Update cart item quantity/size
GET /api/cart/getUserCart       # Fetch current cart
3.3 Environment Variables
bash
Copy code
# MongoDB URI
MONGODB_URI=<Your MongoDB URI>

# Stripe Secret Key
STRIPE_SECRET_KEY=<Your Stripe Secret Key>

# Razorpay Key ID & Secret
RAZORPAY_KEY_ID=<Your Razorpay Key ID>
RAZORPAY_KEY_SECRET=<Your Razorpay Key Secret>

# Cloudinary Credentials
CLOUDINARY_NAME=<Your Cloudinary Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_SECRET_KEY=<Your Cloudinary Secret Key>
3.4 Key Features Summary
Order Management: Complete order handling with updates.
Flexible Payments: Supports various payment options.
Persistent Cart: Maintains cart data across sessions.
Admin Functionality: Allows order management by admins.
Environment Security: Protects API keys with environment variables.
4. Future Enhancements
Planned features to improve functionality and user experience:

Wishlist: Allows users to save items for later.
Reviews and Ratings: Adds product reviews by authenticated users.
Enhanced Admin Panel: Provides additional analytics and filtering.
User Profiles: Enables profile management and order history.
Notifications: Adds email or SMS updates for order tracking.
5. Contribution Guidelines
5.1 How to Contribute
Fork the Repository on GitHub.
Clone your forked repository.
bash
Copy code
git clone https://github.com/your-username/kings-collection.git
cd kings-collection
Create a Branch for your feature:
bash
Copy code
git checkout -b feature/YourFeature
Commit Changes:
bash
Copy code
git add .
git commit -m "Description of your changes"
Push to Your Forked Repository:
bash
Copy code
git push origin feature/YourFeature
Open a Pull Request with a detailed description of your changes.
