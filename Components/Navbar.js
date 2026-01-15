import React from "react";
import Link from "next/link";

const Navbar = ({ tenantName, role }) => {
  return (
    <nav className="flex items-center justify-between w-full text-black py-4 px-5 md:px-8 bg-white shadow-sm">
      
      <div className="shrink-0">
        <Link href="/">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight cursor-pointer">
            SalesPypyer
          </div>
        </Link>
      </div>

      
      <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
        <div className="hidden sm:flex items-center gap-8 text-base md:text-lg font-medium">
          <div>
            <span className="text-gray-500">Organization:</span>{" "}
            <span className="font-semibold text-gray-900">{tenantName}</span>
          </div>
          <div>
            <span className="text-gray-500">Role:</span>{" "}
            <span className="font-semibold text-gray-900">{role}</span>
          </div>
        </div>

        
        <div className="sm:hidden flex flex-col items-end text-sm font-medium">
          <div className="text-gray-600">
            {tenantName?.length > 18
              ? tenantName.substring(0, 15) + "..."
              : tenantName}
          </div>
          <div className="text-gray-500 text-xs mt-0.5">
            {role}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;