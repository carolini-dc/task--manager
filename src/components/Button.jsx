import React from "react";

function Button(props) {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
      {/* //passa pra dentro do componente - valor */}
      {props.children}
    </button>
  );
}

export default Button;
