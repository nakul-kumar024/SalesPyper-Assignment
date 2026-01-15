// "use client";

// import { useState } from "react";

// export default function Leads({ leads, role }) {
//   const [filter, setFilter] = useState("All");

//   const filteredLeads =
//     filter === "All"
//       ? leads
//       : leads.filter((lead) => lead.status === filter);

//   return (
//     <div style={{ marginBottom: "30px" }}>
//       <h3>Leads</h3>

//       {/* Filter */}
//       <select
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         style={{ marginBottom: "10px" }}
//       >
//         <option value="All">All</option>
//         <option value="New">New</option>
//         <option value="Contacted">Contacted</option>
//         <option value="Closed">Closed</option>
//       </select>

//       {/* Leads List */}
//       {filteredLeads.length === 0 ? (
//         <p>No leads found.</p>
//       ) : (
//         <ul>
//           {filteredLeads.map((lead) => (
//             <li key={lead.id} style={{ marginBottom: "8px" }}>
//               <strong>{lead.name}</strong> — {lead.phone} —{" "}
//               <em>{lead.status}</em>

//               {role === "Admin" && (
//                 <span style={{ marginLeft: "10px", color: "green" }}>
//                   (Editable)
//                 </span>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export default function Leads({ leads, role }) {
  const [filter, setFilter] = useState("All");

  const filteredLeads =
    filter === "All"
      ? leads
      : leads.filter((lead) => lead.status === filter);

  return (
    <div className="mb-8 p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Leads</h3>

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="All">All</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Closed">Closed</option>
      </select>

      {/* Leads List */}
      {filteredLeads.length === 0 ? (
        <p className="text-gray-500 italic">No leads found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredLeads.map((lead) => (
            <li
              key={lead.id}
              className="p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition"
            >
              <strong className="text-gray-900">{lead.name}</strong> —{" "}
              <span className="text-gray-700">{lead.phone}</span> —{" "}
              <em className="text-sm text-gray-500">{lead.status}</em>

              {role === "Admin" && (
                <span className="ml-3 text-green-600 font-medium">
                  (Editable)
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
