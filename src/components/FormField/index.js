import React from "react";

export default function FormField({ label, type, name, onChange, value }) {
  return (
    <div>
      <label>
        {label}:
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}
