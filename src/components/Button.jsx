import React from "react";

function Button({
  children,
  handleclick,
  icon,
  className = "",
}) {
  return (
    <button
      onClick={handleclick}
      className={`bg-[#005F87] px-4 py-2 flex items-center justify-center gap-2 rounded-[12px] hover:bg-[#004064] transition cursor-pointer lato-semibold ${className}`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}

export default Button;
