export const mockData = {
    orgA: {
      name: "Organization A",
      leads: [
        {
          id: 1,
          name: "Rahul Sharma",
          phone: "9799456700",
          status: "New",
        },
        {
          id: 2,
          name: "Amit Verma",
          phone: "8121234927",
          status: "Contacted",
        },
        {
          id: 3,
          name: "Neha Singh",
          phone: "98900212376",
          status: "Closed",
        },
      ],
      callLogs: [
        {
          id: 1,
          leadName: "Rahul Sharma",
          dateTime: "2026-01-14 10:30 AM",
          duration: "2 min",
          outcome: "Interested",
        },
        {
          id: 2,
          leadName: "Amit Verma",
          dateTime: "2026-01-14 12:00 PM",
          duration: "5 min",
          outcome: "Follow-up needed",
        },
      ],
    },
  
    orgB: {
      name: "Organization B",
      leads: [
        {
          id: 1,
          name: "Abhishek Kumar",
          phone: "65658790",
          status: "New",
        },
        {
          id: 2,
          name: "Kritika Sharma",
          phone: "9876543210",
          status: "Contacted",
        },
      ],
      callLogs: [
        {
          id: 1,
          leadName: "Abhishek Kumar",
          dateTime: "2026-01-13 04:15 PM",
          duration: "3 min",
          outcome: "Not interested",
        },
      ],
    },
  };
  