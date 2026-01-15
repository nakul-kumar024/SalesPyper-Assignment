// "use client";

// import Navbar from "@/Components/Navbar";

// <Navbar tenantName={tenantName} role={role} />

// export default function Layout({ children, tenantName, role }) {
//   return (
//     <div style={{ padding: "20px" }}>
//       <header style={{ marginBottom: "20px" }}>
//         <h2>{tenantName}</h2>
//         <span
//           style={{
//             padding: "4px 8px",
//             background: "#eee",
//             borderRadius: "4px",
//             fontSize: "14px",
//           }}
//         >
//           Role: {role}
//         </span>
//       </header>

//       <main>{children}</main>
//     </div>
//   );
// }


"use client";

import Navbar from "@/Components/Navbar";

export default function Layout({ children, tenantName, role }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar tenantName={tenantName} role={role} />

      {/* Main content */}
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}
