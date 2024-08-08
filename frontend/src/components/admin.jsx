import React from 'react';
import AccessDenied from './AccessDenied'


const Admin = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Admin Panel</div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4">
              <a href="/admin/dashboard" className="hover:text-gray-400">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="/admin/products" className="hover:text-gray-400">Products</a>
            </li>
            <li className="mb-4">
              <a href="/admin/orders" className="hover:text-gray-400">Orders</a>
            </li>
            <li className="mb-4">
              <a href="/admin/users" className="hover:text-gray-400">Users</a>
            </li>
            <li>
              <a href="/admin/settings" className="hover:text-gray-400">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button  className="bg-blue-600 text-white px-4 py-2 rounded-lg">Logout</button>
        </header>
        
        {/* Dashboard Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Total Products</h2>
            <p className="text-2xl">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Total Orders</h2>
            <p className="text-2xl">80</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Total Users</h2>
            <p className="text-2xl">200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Total Sales</h2>
            <p className="text-2xl">$5,000</p>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left">Order ID</th>
                <th className="border-b px-4 py-2 text-left">Customer</th>
                <th className="border-b px-4 py-2 text-left">Total</th>
                <th className="border-b px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b px-4 py-2">1</td>
                <td className="border-b px-4 py-2">John Doe</td>
                <td className="border-b px-4 py-2">$100</td>
                <td className="border-b px-4 py-2">Pending</td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2">2</td>
                <td className="border-b px-4 py-2">Jane Smith</td>
                <td className="border-b px-4 py-2">$200</td>
                <td className="border-b px-4 py-2">Shipped</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Admin;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AccessDenied from './AccessDenied';
// import LoadingSpinner from './loader'; // Import the spinner component
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {
//   const [isAdmin, setIsAdmin] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAdminStatus = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/admin/dashboard', {
//           // withCredentials: true, // Ensure cookies are sent with the request
//         });

//         console.log(response)
//         setIsAdmin(response.data.isAdmin);
//       } catch (err) {
//         console.error('Error fetching admin status:', err);
//         setIsAdmin(false);
//       }
//     };

//     fetchAdminStatus();
//   }, []);

//   if (isAdmin === null) {
//     return <LoadingSpinner />; // Display spinner while loading
//   }

//   if (!isAdmin) {
//     return <AccessDenied />;
//   }

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white flex flex-col">
//         <div className="p-4 text-2xl font-bold">Admin Panel</div>
//         <nav className="flex-1 p-4">
//           <ul>
//             <li className="mb-4">
//               <a href="/admin/dashboard" className="hover:text-gray-400">Dashboard</a>
//             </li>
//             <li className="mb-4">
//               <a href="/admin/products" className="hover:text-gray-400">Products</a>
//             </li>
//             <li className="mb-4">
//               <a href="/admin/orders" className="hover:text-gray-400">Orders</a>
//             </li>
//             <li className="mb-4">
//               <a href="/admin/users" className="hover:text-gray-400">Users</a>
//             </li>
//             <li>
//               <a href="/admin/settings" className="hover:text-gray-400">Settings</a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-gray-100">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <button 
//             onClick={() => navigate('/login')} 
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//           >
//             Logout
//           </button>
//         </header>
        
//         {/* Dashboard Content */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-4">Total Products</h2>
//             <p className="text-2xl">150</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-4">Total Orders</h2>
//             <p className="text-2xl">80</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-4">Total Users</h2>
//             <p className="text-2xl">200</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-4">Total Sales</h2>
//             <p className="text-2xl">$5,000</p>
//           </div>
//         </section>

//         {/* Recent Orders */}
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
//           <table className="min-w-full">
//             <thead>
//               <tr>
//                 <th className="border-b px-4 py-2 text-left">Order ID</th>
//                 <th className="border-b px-4 py-2 text-left">Customer</th>
//                 <th className="border-b px-4 py-2 text-left">Total</th>
//                 <th className="border-b px-4 py-2 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border-b px-4 py-2">1</td>
//                 <td className="border-b px-4 py-2">John Doe</td>
//                 <td className="border-b px-4 py-2">$100</td>
//                 <td className="border-b px-4 py-2">Pending</td>
//               </tr>
//               <tr>
//                 <td className="border-b px-4 py-2">2</td>
//                 <td className="border-b px-4 py-2">Jane Smith</td>
//                 <td className="border-b px-4 py-2">$200</td>
//                 <td className="border-b px-4 py-2">Shipped</td>
//               </tr>
//               {/* Add more rows as needed */}
//             </tbody>
//           </table>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Admin;
