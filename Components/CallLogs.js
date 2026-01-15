"use client";

import { useState } from "react";

export default function CallLogs({ callLogs }) {
  const [filter, setFilter] = useState("All");

  const filteredCalls =
    filter === "All"
      ? callLogs
      : callLogs.filter((call) => call.outcome === filter);

  return (
    <div className="mb-8 p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Call Logs</h3>

      
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="All">All</option>
        <option value="Interested">Interested</option>
        <option value="Not interested">Not interested</option>
        <option value="Follow-up needed">Follow-up needed</option>
      </select>

      {filteredCalls.length === 0 ? (
        <p className="text-gray-500 italic">No call logs available.</p>
      ) : (
        <ul className="space-y-2">
          {filteredCalls.map((call) => (
            <li
              key={call.id}
              className="p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition"
            >
              <strong className="text-gray-900">{call.leadName}</strong> —{" "}
              <span className="text-gray-700">{call.dateTime}</span> —{" "}
              <span className="text-gray-600">{call.duration}</span> —{" "}
              <em className="text-sm text-gray-500">{call.outcome}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
