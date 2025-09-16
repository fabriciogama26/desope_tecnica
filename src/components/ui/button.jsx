import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-white-600 text-white rounded-lg hover:bg-blue-100 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}