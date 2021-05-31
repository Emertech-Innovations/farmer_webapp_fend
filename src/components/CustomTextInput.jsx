import React from "react";

import TextField from "@material-ui/core/TextField";
// const handleInputChange = ({touched[field.name],errors[field.name]}) => {
//   errors[field.name]
// }
const CustomTextInput = ({
  label,
  field,
  values,

  form: { touched, errors },
}) => {
  return (
    <>
      <TextField
        className="field"
        error={touched[field.name] && Boolean(errors[field.name])}
        // onchange={handleInputChange(touched[field.name], errors[field.name])}
        id="outlined-error-helper-text"
        label={label}
        defaultValue={values[field.name]}
        // helperText={errors[field.name] ? `${errors[field.name]}` : ""}
        helperText={touched[field.name] && errors[field.name]}
        variant="outlined"
      />
    </>
  );
};

export default CustomTextInput;
