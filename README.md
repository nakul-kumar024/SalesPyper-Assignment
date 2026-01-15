# Multi-Tenant Sales Dashboard (Frontend)

This project is a frontend-only implementation of a Multi-tenant sales dashboard, built as part of a frontend developer assignment.  
The focus of this project is on **application structure, role-based access, tenant separation, and frontend fundamentals**, rather than backend or feature completeness.

A live demo and source code are provided below.

---

## Live Demo
 Link: https://sales-pyper-assignment.vercel.app/

##  GitHub Repository
 Link: https://github.com/nakul-kumar024/SalesPyper-Assignment

---

##  Tech Stack

- **Next.js (App Router)**
- **React**
- **JavaScript**
- **Tailwind CSS / basic CSS**
- **Mocked data (no backend)**

---

##  Multi-Tenant Handling

The application simulates a SaaS product used by multiple organizations (tenants).

- Two tenants are supported: **Organization A** and **Organization B**
- Each tenant has its own isolated data for:
  - Leads
  - Call Logs
- Switching the tenant updates all visible data across the application

Tenant data is handled using centralized mock data to simulate how a backend API would normally work.

---

##  Role-Based Access Control (RBAC)

Two user roles are supported:

### Admin
- Can view all data
- Can perform write actions (mocked) such as deleting leads

### Agent
- View-only access
- Cannot modify or delete data

Role switching is mocked via a dropdown and affects UI behavior immediately.

---

##  Core Features

### Leads Module
- Displays a list of leads (name, phone, status)
- Filter leads by status
- Tenant-specific data
- Admin-only delete action (mock write operation)
- Agent has read-only access

### Call Logs Module
- Displays call history (lead name, time, duration, outcome)
- Tenant-specific data
- Optional filtering for better usability
- Handles empty states clearly

---

##  UI & UX Decisions

- A **dynamic navbar** displays the active organization and role to provide clear global context
- Tenant and role switching controls are kept separate for clarity
- Minimal and functional UI as per assignment scope
- Gradient navbar and footer added for basic visual polish without overengineering

---

##  Frontend Optimization (Approach)

Although full optimization is out of scope, the project follows good frontend practices:

- Modular and reusable components
- Clear separation of concerns
- Centralized state handling at the page level
- Ready for future enhancements such as:
  - Lazy loading
  - Memoization
  - API-based data fetching

---

## ℹ️ Notes & Limitations

- Authentication is mocked as per assignment instructions
- No backend or database is implemented
- All write operations are handled locally in the UI
- Data resets when switching tenants, simulating a fresh backend fetch

---

##  Conclusion

This project demonstrates a clear understanding of:
- Frontend architecture
- Multi-tenant handling
- Role-based access control
- Scalable component structure

The goal was to build a **clean, understandable, and extensible frontend**, rather than a fully production-ready system.

This project was developed as part of a frontend assignment to demonstrate practical frontend engineering skills.