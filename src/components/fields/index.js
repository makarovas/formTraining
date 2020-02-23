import React from "react";
import ReactJson from "react-json-view";

export const customInput = ({ label, input, type, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      <ReactJson src={props} />
    </div>
  );
};

export const customSelect = ({ label, input, type, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...input} {...props} type={type}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  );
};
