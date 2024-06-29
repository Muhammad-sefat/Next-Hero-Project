import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-lime-400 p-4 rounded">
      <ul className="flex gap-5">
        <li>Admin</li>
        <li>Host</li>
        <li>Guest</li>
      </ul>
      {children}
      <footer className="bg-blue-500 p-4 rounded text-center">
        Dashboard Footer
      </footer>
    </div>
  );
};

export default layout;
