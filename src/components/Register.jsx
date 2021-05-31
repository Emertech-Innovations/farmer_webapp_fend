import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./Register.css";
import CustomTextInput from "./CustomTextInput";
import Grid from "@material-ui/core/Grid";
import CustomSelectInput from "./CustomSelectInput";
const Register = () => {
  const history = useHistory();
  const emailRegExp = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const aadharRegExp = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
  return (
    <>
      <div className="reg-main">
        <div className="form-wrapper">
          <Formik
            initialValues={{
              name: "",
              // gender: "",
              // address: "",
              aadhar: "",
              // dob: "",
              // age: "",
              // state: "",
              // district: "",
              // tahshil: "",
              // village: "",
              // pin_code: "",
              email: "",
              phone: "",
              // alternate_phone: "",
              // area: "",
              // soil: "",
              // crops: "",
            }}
            validationSchema={yup.object({
              name: yup.string().required("Please enter name"),
              email: yup
                .string()
                .matches(emailRegExp, "Email  is invalid")
                .required("Please enter email"),
              aadhar: yup
                .string()
                .matches(aadharRegExp, "Aadhar no is invalid")
                .required("Please enter aadhar no"),
              phone: yup
                .string()
                .matches(phoneRegExp, "Phone number is invalid")
                .required("please enter phone no"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const payload = {
                name: values.name,
                // gender: values.gender,
                // address: values.address,
                aadhar: values.aadhar,
                // dob: values.dob,
                // age: values.age,
                // state: values.state,
                // district: values.district,
                // tahshil: values.tahshil,
                // village: values.village,
                // pin_code: values.pin_code,
                email: values.email,
                phone: values.phone,
                // alternate_phone: values.alternate_phone,
                // area: values.area,
                // soil: values.soil,
                // crops: values.crops,
              };
              // console.log(JSON.stringify(payload, null, 2));
              axios
                .post(
                  `https://farmer-registration-portal.herokuapp.com/register`,
                  payload
                )
                .then(() => history.push("/user"))
                .catch((err) => console.log(err));
              resetForm();
              setSubmitting(false);
            }}
            enableReinitialize
          >
            {(props) => (
              <Form className="form">
                <div className="first_input">
                  <Grid item xs={8}>
                    <Field
                      label="Full Name:"
                      name="name"
                      type="text"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      label="Gender:"
                      name="gender"
                      type="text"
                      component={CustomSelectInput}
                    />
                  </Grid>
                </div>
                <div className="first_input">
                  <Grid item xs={7}>
                    <Field
                      label="Address:"
                      name="address"
                      type="text"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Field
                      className="field"
                      label="Aadhar No:"
                      type="text"
                      name="aadhar"
                      component={CustomTextInput}
                    />
                  </Grid>
                </div>
                <div className="first_input">
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="DOB:"
                      type="text"
                      name="dob"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Field
                      className="field"
                      label="Age:"
                      type="text"
                      name="age"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="State:"
                      type="text"
                      name="state"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="District:"
                      type="text"
                      name="district"
                      component={CustomTextInput}
                    />
                  </Grid>
                </div>
                <div className="first_input">
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="Tahshil:"
                      type="text"
                      name="tahshil"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="Village:"
                      type="text"
                      name="village"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="Pin Code:"
                      type="text"
                      name="pin_code"
                      component={CustomTextInput}
                    />
                  </Grid>
                </div>
                <div className="first_input">
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="Email:"
                      type="email"
                      name="email"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      label="Phone no:"
                      className="field"
                      type="text"
                      name="phone"
                      component={CustomTextInput}
                    />
                  </Grid>
                  {/* <Grid item xs={4}>
                    <Field
                      label="Alternate Phone no:"
                      className="field"
                      type="text"
                      name="alternate_phone"
                      component={CustomTextInput}
                    />
                  </Grid> */}
                </div>

                {/* <div className="first_input">
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="Total area:"
                      type="text"
                      name="area"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="Soil Type:"
                      type="text"
                      name="soil"
                      component={CustomTextInput}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      className="field"
                      label="List of Crops:"
                      type="text"
                      name="crops"
                      component={CustomTextInput}
                    />
                  </Grid>
                </div> */}

                <div className="btn-wrapper">
                  <button className="btn" type="submit">
                    <span>{props.isSubmitting ? "loading" : "Submit"}</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
