import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomTextInput = ({
  label,
  field,

  form: { touched, errors },
}) => {
  return (
    <>
      <TextField
        className="field"
        error={touched[field.name] && errors[field.name]}
        id="outlined-error-helper-text"
        label={label}
        defaultValue=""
        helperText={errors[field.name] ? `${errors[field.name]}` : ""}
        variant="outlined"
      />
    </>
  );
};

export default CustomTextInput;
