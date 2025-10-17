// src/components/AppLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow ">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AppLayout;
