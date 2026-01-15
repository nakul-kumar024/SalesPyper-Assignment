import React from "react";
import Link from "next/link";

const Navbar = ({ tenantName, role }) => {
  return (
    <nav className="flex justify-between items-center w-full text-black py-4 px-6">
      {/* Logo */}
      <div>
        <Link href="/">
          <div className="text-3xl cursor-pointer font-bold">
            SalesPypyer
          </div>
        </Link>
      </div>

      {/* Tenant & Role Info */}
      <ul className="flex gap-8 text-lg font-semibold">
        <li>
          <span className="opacity-70">Organization:</span>{" "}
          <span className="font-bold">{tenantName}</span>
        </li>
        <li>
          <span className="opacity-70">Role:</span>{" "}
          <span className="font-bold">{role}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
