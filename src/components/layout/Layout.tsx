import React from "react";
import Header from "../Header.components";
import Footer from "../Footer.components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
