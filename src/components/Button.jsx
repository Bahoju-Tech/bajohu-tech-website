import React from 'react';

function Button({text, handleclick, icon, className = ""}) {

    return( 
        <button onClick={handleclick} className={`bg-[#005F87] text-white px-4 py-2 flex items-center justify-center gap-2 rounded-[12px] hover:bg-[#004064] transition ${className}`}>
            {text}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default Button;