import React from "react";
import ReactJson from "react-json-view";
import cx from "classnames";

const getValidityClassName = meta => {
  if (meta.asyncValidate) {
    return "async-validating";
  }

  if (meta.active) {
    return;
  }

  if (meta.touched && meta.invalid) {
    return "invalid";
  }
  if (meta.touched && meta.valid) {
    return "valid";
  }
};

export const customInput = props => {
  const { label, input, type, meta } = props;
  console.log(meta);
  return (
    <div
      className={cx(
        "custom-input-container",
        { "flex-row-reverse": type === "checkbox" },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text" style={{ color: "red" }}>
          {meta.error}
        </div>
      )}
      {/* <ReactJson src={props} /> */}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input} type={props.type}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
      {/* <ReactJson src={props} /> */}
    </div>
  );
};
