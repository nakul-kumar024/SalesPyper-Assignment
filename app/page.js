"use client";

import { useState } from "react";
import { mockData } from "@/data/mockData";

import Switcher from "@/Components/Switcher";
import Leads from "@/Components/Leads";
import CallLogs from "@/Components/CallLogs";
import Layout from "@/Components/Layout";

export default function HomePage() {
  
  const [tenant, setTenant] = useState("orgA");
  const [role, setRole] = useState("Admin");

  
  const tenantData = mockData[tenant];

  return (
    <Layout tenantName={tenantData.name} role={role}>
      
      <Switcher
        tenant={tenant}
        setTenant={setTenant}
        role={role}
        setRole={setRole}
      />

      
      <Leads
        leads={tenantData.leads}
        role={role}
      />

      
      <CallLogs
        callLogs={tenantData.callLogs}
      />
    </Layout>
  );
}
