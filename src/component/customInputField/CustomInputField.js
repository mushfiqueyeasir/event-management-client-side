import React from "react";
import { inputContainerCX, inputCX, legendCx } from "./styledClass";

const CustomInputField = ({
  label,
  type,
  name,
  required,
  spanFull,
  widthHalf,
  textArea,
  defaultValue,
}) => {
  const dateObject =
    type === "date" && defaultValue ? new Date(defaultValue) : null;
  let formattedDate;
  if (dateObject) {
    formattedDate = dateObject.toISOString().substr(0, 10);
  }

  return (
    <fieldset className={inputContainerCX(spanFull, widthHalf)}>
      <legend className={legendCx}>
        <div className="flex  gap-2">
          <div>{label}</div>
        </div>
      </legend>

      {textArea ? (
        <textarea
          defaultValue={defaultValue}
          rows="4"
          type={type}
          name={name}
          className={inputCX}
          required={required}
        />
      ) : (
        <input
          defaultValue={type === "date" ? formattedDate : defaultValue}
          type={type}
          name={name}
          className={inputCX}
          required={required}
        />
      )}
    </fieldset>
  );
};

export default CustomInputField;
