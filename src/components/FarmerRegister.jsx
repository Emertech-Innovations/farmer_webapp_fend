import React from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useFormik } from "formik";
import * as yup from "yup";
import "./Register.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

const FarmerRegister = () => {
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  const crops = ["Wheat", "Rice", "SugarCane", "Bajara", "Jwari"];
  const classes = useStyles();
  const theme = useTheme();
  const [cropName, setCropName] = React.useState([]);
  const handleChange = (event) => {
    setCropName(event.target.value);
  };
  const handleClose = () => {
    setOpenError(false);
    setOpenSuccess(false);
  };
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setCropName(value);
  };
  const reset = () => {
    formik.resetForm();
  };
  const addAcres = () => {
    let acre = formik.values.area;
    acre = acre + " acres";

    formik.values.area = acre;
  };
  function getStyles(name, cropName, theme) {
    return {
      fontWeight:
        cropName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  // const history = useHistory();
  const emailRegExp = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
  const phoneRegExp = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
  // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const aadharRegExp = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
  const pinRegExp = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;

  const validationSchema = yup.object({
    name: yup.string().required("Please enter name"),
    address: yup.string().required("Please enter address"),
    gender: yup.string().required("Please enter gender"),
    aadhar: yup
      .string()
      .matches(aadharRegExp, "Aadhar no is invalid")
      .required("Please enter aadhar no"),
    dob: yup.string().required("Please enter dob"),
    age: yup.number().required("Please enter age"),
    state: yup.string().required("Please enter state"),
    district: yup.string().required("Please enter district"),
    tahshil: yup.string().required("Please enter tahshil"),
    village: yup.string().required("Please enter village"),
    pin_code: yup
      .string()
      .matches(pinRegExp, "Pin Code is invalid")
      .required("Please enter Pin Code"),
    email: yup
      .string()
      .matches(emailRegExp, "Email  is invalid")
      .required("Please enter email"),

    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is invalid")
      .required("please enter phone no"),
    alternate_phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is invalid"),
    area: yup.string().required("Please enter area"),
    soil: yup.string().required("Please enter soil"),
    crops: yup.array().required("Please enter crops"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      address: "",
      aadhar: "",
      dob: "",
      age: "",
      state: "",
      district: "",
      tahshil: "",
      village: "",
      pin_code: "",
      email: "",
      phone: "",
      alternate_phone: "",
      area: "",
      soil: "",
      crops: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const payload = {
        name: values.name,
        gender: values.gender,
        address: values.address,
        aadhar: values.aadhar,
        dob: values.dob,
        age: values.age,
        state: values.state,
        district: values.district,
        tahshil: values.tahshil,
        village: values.village,
        pin_code: values.pin_code,
        email: values.email,
        phone: values.phone,
        alternate_phone: values.alternate_phone,
        area: values.area,
        soil: values.soil,
        crops: cropName,
      };
      try {
        const res = await axios.post(
          `https://farmer-registration-portal.herokuapp.com/register`,
          payload
        );
        setOpenSuccess(true);
      } catch (err) {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
        setOpenError(true);
      }

      resetForm();

      setSubmitting(false);
    },
  });

  return (
    <>
      <div className="reg-main">
        <div className="form-wrapper">
          <div className="reg_heading">Register</div>

          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="first_input">
              <Grid item xs={8}>
                <TextField
                  className="field"
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <>
                  <FormControl variant="outlined" className="field">
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Gender
                    </InputLabel>
                    <Select
                      native
                      label="Gender"
                      inputProps={{
                        name: "gender",
                        id: "outlined-age-native-simple",
                      }}
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                      helperText={formik.touched.gender && formik.errors.gender}
                      variant="outlined"
                    >
                      <option aria-label="Gender" value="" />
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                </>
              </Grid>
            </div>
            <div className="first_input">
              <Grid item xs={7}>
                <TextField
                  className="field"
                  id="address"
                  name="address"
                  label="Address:"
                  type="text"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  className="field"
                  id="aadhar"
                  name="aadhar"
                  label="Aadhar No"
                  type="text"
                  value={formik.values.aadhar}
                  onChange={formik.handleChange}
                  error={formik.touched.aadhar && Boolean(formik.errors.aadhar)}
                  helperText={formik.touched.aadhar && formik.errors.aadhar}
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className="first_input">
              <Grid item xs={4}>
                <TextField
                  className="field"
                  name="dob"
                  id="dob"
                  label="DOB"
                  type="date"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  className="field"
                  id="age"
                  name="age"
                  label="Age:"
                  type="text"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="state"
                  name="state"
                  label="State:"
                  type="text"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="district"
                  name="district"
                  label="District:"
                  type="text"
                  value={formik.values.district}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.district && Boolean(formik.errors.district)
                  }
                  helperText={formik.touched.district && formik.errors.district}
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className="first_input">
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="tahshil"
                  name="tahshil"
                  label="Tahshil:"
                  type="text"
                  value={formik.values.tahshil}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.tahshil && Boolean(formik.errors.tahshil)
                  }
                  helperText={formik.touched.tahshil && formik.errors.tahshil}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="village"
                  name="village"
                  label="Village:"
                  type="text"
                  value={formik.values.village}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.village && Boolean(formik.errors.village)
                  }
                  helperText={formik.touched.village && formik.errors.village}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="pin_code"
                  name="pin_code"
                  label="Pin Code:"
                  type="text"
                  value={formik.values.pin_code}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pin_code && Boolean(formik.errors.pin_code)
                  }
                  helperText={formik.touched.pin_code && formik.errors.pin_code}
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className="first_input">
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="phone"
                  name="phone"
                  label="Phone:"
                  type="text"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="alternate_phone"
                  name="alternate_phone"
                  label="Alternate Phone:"
                  type="text"
                  value={formik.values.alternate_phone}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.alternate_phone &&
                    Boolean(formik.errors.alternate_phone)
                  }
                  helperText={
                    formik.touched.alternate_phone &&
                    formik.errors.alternate_phone
                  }
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className="first_input">
              <Grid item xs={4}>
                <TextField
                  className="field"
                  id="area"
                  name="area"
                  label="Total Area(in acres):"
                  type="text"
                  value={formik.values.area}
                  onChange={formik.handleChange}
                  error={formik.touched.area && Boolean(formik.errors.area)}
                  helperText={formik.touched.area && formik.errors.area}
                  variant="outlined"
                  onKeyUp={addAcres}
                />
              </Grid>
              <Grid item xs={4}>
                <>
                  <FormControl variant="outlined" className="field">
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Type of Soil
                    </InputLabel>
                    <Select
                      native
                      label="Type of Soil"
                      inputProps={{
                        name: "soil",
                        id: "outlined-age-native-simple",
                      }}
                      value={formik.values.soil}
                      onChange={formik.handleChange}
                      error={formik.touched.soil && Boolean(formik.errors.soil)}
                      helperText={formik.touched.soil && formik.errors.soil}
                      variant="outlined"
                    >
                      <option aria-label="Soil" value="" />
                      <option value="red">Red</option>
                      <option value="black">Black</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                </>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="field">
                  <InputLabel id="demo-mutiple-chip-label">
                    Total Crops
                  </InputLabel>
                  <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={cropName}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    )}
                    variant="outlined"
                  >
                    {crops.map((crop) => (
                      <MenuItem
                        key={crop}
                        value={crop}
                        style={getStyles(crop, cropName, theme)}
                        onChange={handleChangeMultiple}
                      >
                        {crop}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </div>
            <div className="btn-wrapper">
              <button
                className={formik.isSubmitting ? "btn_loading" : "btn_submit"}
                type="submit"
              >
                <span>{formik.isSubmitting ? "loading" : "Submit"}</span>
              </button>
            </div>
            <div className="reset">
              <Button onClick={reset} variant="contained" color="primary">
                Reset
              </Button>
            </div>
          </form>
          <Snackbar
            // anchorOrigin={("bottom", "center")}
            open={openError}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert severity="error">Something went wrong !</Alert>
          </Snackbar>
          <Snackbar
            // anchorOrigin={("bottom", "center")}
            open={openSuccess}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert severity="success">Registration successful !</Alert>
          </Snackbar>
          <Backdrop className={classes.backdrop} open={formik.isSubmitting}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    </>
  );
};

export default FarmerRegister;
