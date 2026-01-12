# **Add to Cart React App**

A simple **Add to Cart** application built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.
It fetches products from the **Fake Store API** and allows users to **add/remove items from the cart**, update **quantity**, and view the **total price with a 10% discount**.

## **Features**

* Fetch products from [Fake Store API](https://fakestoreapi.com/)
* Display **product image, title, price, and description**
* **Responsive layout** for mobile, tablet, and desktop
* **Add/Remove products** from cart
* **Increase/Decrease product quantity** in cart
* **Show total price per item** and **total cart price**
* Apply **10% discount** on final price
* **Routing** between Products and Cart pages
* **Global cart state** using React Context API
* Styled with **Tailwind CSS** for modern UI

## **Tech Stack**

* **Frontend:** React.js + Vite
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Styling:** Tailwind CSS
* **API:** Fake Store API

## **Installation**

1. **Clone the repository**

git clone <your-github-repo-url>
cd add-to-cart-vite

2. **Install dependencies**

npm install

3. **Start the development server**

npm run dev

4. Open the URL shown in terminal (usually `http://localhost:5173/`)

## **Project Structure**

src/
 ├─ components/
 │   ├─ ProductCard.jsx
 │   └─ CartItem.jsx    # optional
 ├─ pages/
 │   ├─ Home.jsx
 │   └─ Cart.jsx
 ├─ context/
 │   └─ CartContext.jsx
 ├─ App.jsx
 └─ main.jsx

## **Usage**

* Navigate to the **Products page** (`/`) to view all products
* Click **Add to Cart** to add an item
* Click **Remove from Cart** to remove an item
* Navigate to **Cart page** (`/cart`) to manage items
* Use **+ / - buttons** to increase or decrease quantity
* View **total price and final price** with 10% discount

## **Deployment**

1. Build the project:

npm run build

2. Deploy on **Netlify**:

   * Go to [Netlify](https://www.netlify.com/) → New Site → Import from GitHub
   * Select your repository and branch
   * Set **Build Command**: `npm run build`
   * Set **Publish Directory**: `dist`
   * Click **Deploy Site**

3. Your live site URL will be available after deployment

## **Live Demo**

https://kaleidoscopic-chaja-7500d6.netlify.app/

## **License**

This project is **free to use** and **open source**.
