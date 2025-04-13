import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center py-6 text-gray-500">
      <p>© {new Date().getFullYear()} Shyam Raj. All rights reserved.</p>
    </footer>
  );
};

export default Footer;