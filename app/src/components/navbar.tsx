import logo from "../assets/UOL_logo1.png"; // Adjust the path accordingly
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-2 bg-red-500 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div ><img src={logo} className="h-15 " /></div>
        {/* <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
            Applicant
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Student & Staff
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">
                
            </a>
          </li>
        </ul> */}
      </div>
      
    </nav>
    
  );
};

export default Navbar;
