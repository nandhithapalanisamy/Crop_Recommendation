import React from "react";
import { Outlet } from "react-router-dom";
import Navabar from "./Navabar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navabar />

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;