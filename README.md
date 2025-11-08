# Mock E-Commerce Cart - Vibe Commerce Screening

A full-stack shopping cart application built for Vibe Commerce screening.  
It demonstrates product listing, cart management, and a mock checkout flow — covering both frontend and backend integration. 


##  Overview

This project is a basic e-commerce cart app where users can browse products, add or remove items, view totals, and perform a mock checkout (no real payments).
It tests UI, API, and database integration in a simple but complete e-commerce workflow.

##  Tech Stack

Frontend: React (Vite, Axios, TailwindCSS)
Backend: Node.js, Express
Database: MongoDB (Mongoose)
API Type: REST APIs
Deployment:backend-> on render and frontend on netlify
---

## Project Structure

cart/
│
├── backend/
│   ├── routes/
│   │   ├── products.js
│   │   └── cart.js
│   ├── models/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── api/
│   ├── .env
│   ├── vite.config.js
│   └── package.json
│
└── README.md  # This file



##  Backend APIs
Method	Endpoint	          Description
GET	    /api/products	      Fetch 5-10 mock products (id, name, price, image)
GET	    /api/cart	          Get all items in the cart with total
POST  	/api/cart     	    Add item to cart { productId, qty }
DELETE 	/api/cart/:id	      Remove item from cart
POST   	/api/cart/checkout	Checkout cart → returns mock receipt 

## Frontend Features

 Product grid with “Add to Cart”
 Cart view: items, quantity, remove/update
 Checkout form: name & email
 Mock receipt modal 
 Responsive UI for desktop and mobile

 ##  Setup Instructions
## Backend Setup
# got to backend directory
  cd backend
# Install dependencies:
 npm install


# Create a .env file:
 MONGO_URI=<your MongoDB connection string>
 PORT=5000


# Start the backend:
node server.js


# The backend will run on
➜ http://localhost:5000

##  Frontend Setup

# Navigate to the frontend directory:
 cd frontend

# Install dependencies:

 npm install


# Create a .env file:

VITE_API_BASE_URL= http://localhost:5000

# Start the frontend:
npm run dev

## The app will run on
➜ http://localhost:5173

##  Available Commands
# Command     	  Description
node server.js   	Run backend
npm run dev 	    Run frontend
npm install	      Install dependencies
