"use client";

export default function Switcher({ tenant, setTenant, role, setRole }) {
  return (
    <div className="mb-5 p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Tenant & Role Switcher
      </h3>

      {/* Tenant Selector */}
      <div className="mb-4 flex items-center">
        <label className="mr-3 font-medium text-gray-700">Tenant:</label>
        <select
          value={tenant}
          onChange={(e) => setTenant(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="orgA">Organization A</option>
          <option value="orgB">Organization B</option>
        </select>
      </div>

      {/* Role Selector */}
      <div className="flex items-center">
        <label className="mr-3 font-medium text-gray-700">Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>
      </div>
    </div>
  );
}
