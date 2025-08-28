// AdminHeader.js

import React from 'react';
import "./DashBoardNavbar.css";


// export default function DashBoardNavbar() {
//   return (
//     // <h2>Helooo</h2>
//     <div className="sidebar bg-dark text-light">
//       <div className="sidebar-header">
//         <h3>Dashboard</h3>
//       </div>
//       <span className='ms-4'>Main</span>
//       <ul className="list-unstyled components">
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-chart-line"></i> <a href="#">Dashboard</a>
//         </li>
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-building"></i> <a href="#">Branches</a>
//         </li>
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-star"></i> <a href="#">Reviews</a>
//         </li>
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-file-invoice-dollar"></i> <a href="#">Sales</a>
//         </li>
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-calendar-alt"></i> <a href="#">Upcoming Products</a>
//         </li>
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-image"></i> <a href="#">Gallery</a>
//         </li>
//         <li className='ms-4'>
//           <i className=" me-2 fa fa-tags"></i> <a href="#">Pricing</a>
//         </li>
//       </ul>
//     </div>

//   );
// }

export default function DashBoardNavbar({ onItemClick }) {
  return (
    <div className="sidebar bg-dark text-light">
      <div className="sidebar-header">
        <h3>Dashboard</h3>
      </div>
      <ul className="list-unstyled components">
        <li className='ms-4' onClick={() => onItemClick('dashboard')}>
          <i className=" me-2 fa fa-chart-line"></i> <a href="#">Dashboard</a>
        </li>
        <li className='ms-4'>
          <i className=" me-2 fa fa-building"></i> <a href="#">Branches</a>
        </li>
        <li className='ms-4' onClick={() => onItemClick('reviews')}>
          <i className=" me-2 fa fa-star"></i> <a href="#">Reviews</a>
        </li>
        <li className='ms-4' onClick={() => onItemClick('sales')}>
          <i className=" me-2 fa fa-file-invoice-dollar"></i> <a href="#">Sales</a>
        </li>
        <li className='ms-4'>
          <i className=" me-2 fa fa-calendar-alt"></i> <a href="#">Upcoming Products</a>
        </li>
        <li className='ms-4' onClick={() => onItemClick('gallery')}>
          <i className=" me-2 fa fa-image"></i> <a href="#">Gallery</a>
        </li>
        <li className='ms-4'>
          <i className=" me-2 fa fa-tags"></i> <a href="#">Pricing</a>
        </li>
      </ul>
    </div>
  );
}