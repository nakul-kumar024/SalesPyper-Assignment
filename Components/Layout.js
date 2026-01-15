
"use client";

import Navbar from "@/Components/Navbar";

export default function Layout({ children, tenantName, role }) {
  return (
    <div>
      
      <Navbar tenantName={tenantName} role={role} />

      
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}
