"use client";

import { useState, useEffect } from "react";

export default function Leads({ leads, role }) {
  const [filter, setFilter] = useState("All");
  const [localLeads, setLocalLeads] = useState([]);

  // Sync when tenant changes
  useEffect(() => {
    setLocalLeads(leads);
  }, [leads]);

  const filteredLeads =
    filter === "All"
      ? localLeads
      : localLeads.filter((lead) => lead.status === filter);

  const handleDelete = (id) => {
    setLocalLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

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

      {filteredLeads.length === 0 ? (
        <p className="text-gray-500 italic">No leads found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredLeads.map((lead) => (
            <li
              key={lead.id}
              className="p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition flex items-center justify-between"
            >
              <div>
                <strong className="text-gray-900">{lead.name}</strong> —{" "}
                <span className="text-gray-700">{lead.phone}</span> —{" "}
                <em className="text-sm text-gray-500">{lead.status}</em>
              </div>

              {role === "Admin" && (
                <button
                  onClick={() => handleDelete(lead.id)}
                  className="ml-3 px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
