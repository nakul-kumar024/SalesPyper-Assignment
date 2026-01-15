"use client";

import { useState } from "react";
import { mockData } from "@/data/mockData";

import Switcher from "@/Components/Switcher";
import Leads from "@/Components/Leads";
import CallLogs from "@/Components/CallLogs";
import Layout from "@/Components/Layout";

export default function HomePage() {
  // 🔑 Central state
  const [tenant, setTenant] = useState("orgA");
  const [role, setRole] = useState("Admin");

  // 🔄 Tenant-specific data
  const tenantData = mockData[tenant];

  return (
    <Layout tenantName={tenantData.name} role={role}>
      {/* Tenant & Role Switcher */}
      <Switcher
        tenant={tenant}
        setTenant={setTenant}
        role={role}
        setRole={setRole}
      />

      {/* Leads Module */}
      <Leads
        leads={tenantData.leads}
        role={role}
      />

      {/* Call Logs Module */}
      <CallLogs
        callLogs={tenantData.callLogs}
      />
    </Layout>
  );
}
