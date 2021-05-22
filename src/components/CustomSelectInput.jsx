import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
const CustomSelectInput = ({ label }) => {
  return (
    <>
      <FormControl variant="outlined" className="field">
        <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
        <Select
          native
          label="Gender"
          inputProps={{
            name: "gender",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label={label} value="" />
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>
    </>
  );
};

export default CustomSelectInput;
