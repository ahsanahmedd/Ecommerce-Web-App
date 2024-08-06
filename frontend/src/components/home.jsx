import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home bg-gray-100 text-gray-800 overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-900">Apna@Mart</div>
        <nav className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-gray-600 transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-gray-600 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact Us</Link>
        </nav>
        <div className="space-x-4 flex items-center">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300">Sign In</Link>
          <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300">Sign Up</Link>
          <i className="fas fa-search cursor-pointer text-lg hover:text-gray-600"></i>
          <i className="fas fa-user cursor-pointer text-lg hover:text-gray-600"></i>
          <i className="fas fa-shopping-cart cursor-pointer text-lg hover:text-gray-600"></i>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative">
        <img src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Banner" className="w-full h-[60vh] " /> 
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
          <h1 className="text-5xl font-bold">Welcome to Our Premium Store</h1>
          <p className="text-xl mt-4">Discover top-quality products at unbeatable prices</p>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Shop by Category</h2>
        <div className="flex justify-center space-x-8">
          <div className="category-item transition-transform transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category 1" className="w-40 h-40 object-cover rounded-full shadow-lg" />
            <p className="mt-4 text-lg font-semibold">Clothing</p>
          </div>
          <div className="category-item transition-transform transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category 2" className="w-40 h-40 object-cover rounded-full shadow-lg" />
            <p className="mt-4 text-lg font-semibold">Shoes</p>
          </div>
          <div className="category-item transition-transform transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1507955987999-df4864ee80d4?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Category 3" className="w-40 h-40 object-cover rounded-full shadow-lg" />
            <p className="mt-4 text-lg font-semibold">Mobiles</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}


      {/* <section className="py-16 text-center bg-gray-100 overflow-x-auto overflow-y-hidden  ">
        <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
        <div className="flex overflow-x-auto space-x-8 px-8 py-4">
          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://plus.unsplash.com/premium_photo-1691367279293-f82232361dae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 1" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">Polo T-Shirts</p>
            <p className="text-gray-700">$10.00</p>
          </div>
          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 2" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">Nike Shoes</p>
            <p className="text-gray-700">$20.00</p>
          </div>
          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>


          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>


          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>



          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>


          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>



          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>



          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>



          <div className="product-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">iPhone 15</p>
            <p className="text-gray-700">$30.00</p>
          </div>

        </div>
      </section> */}




<section className="py-16 text-center bg-gray-100">
  <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
  <div className="relative">
    <div className="flex space-x-8 px-8 py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <div className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src="https://plus.unsplash.com/premium_photo-1691367279293-f82232361dae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 1" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <p className="text-lg font-semibold">Polo T-Shirts</p>
        <p className="text-gray-700">$10.00</p>
      </div>
      <div className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src="https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 2" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <p className="text-lg font-semibold">Nike Shoes</p>
        <p className="text-gray-700">$20.00</p>
      </div>
      <div className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <p className="text-lg font-semibold">iPhone 15</p>
        <p className="text-gray-700">$30.00</p>
      </div>
      <div className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src="https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 4" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <p className="text-lg font-semibold">Sport Watch</p>
        <p className="text-gray-700">$50.00</p>
      </div>
      <div className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src="https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 5" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <p className="text-lg font-semibold">Leather Jacket</p>
        <p className="text-gray-700">$120.00</p>
      </div>
    </div>
  </div>
</section>



      {/* Newsletter Subscription */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Subscribe to Our Newsletter</h2>
        <form className="flex justify-center space-x-4">
          <input type="email" placeholder="Enter your email" className="p-3 border border-gray-300 rounded-lg w-64" />
          <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="footer-links mb-4">
          <Link to="/privacy" className="mx-2 hover:text-gray-400">Privacy Policy</Link>
          <Link to="/terms" className="mx-2 hover:text-gray-400">Terms of Service</Link>
        </div>
        <div className="footer-social mb-4">
          <i className="fab fa-facebook-f mx-2 cursor-pointer hover:text-gray-400"></i>
          <i className="fab fa-twitter mx-2 cursor-pointer hover:text-gray-400"></i>
          <i className="fab fa-instagram mx-2 cursor-pointer hover:text-gray-400"></i>
        </div>
        <div className="footer-contact">
          <p>Contact us: info@ecommerce.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
