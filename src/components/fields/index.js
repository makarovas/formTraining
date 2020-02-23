import React from "react";

export const customInput = ({ label, input, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
    </div>
  );
};

// export const customSelect = ({ label, input, type, ...props }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <select {...input} {...props} type={type}>
//         <option value="tabs">Tabs</option>
//         <option value="spaces">Spaces</option>
//       </select>
//     </div>
//   );
// };

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  );
};
