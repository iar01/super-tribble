import React, { Component, Fragment } from "react";
import avatar from "../../style/StyleSignin/images/avatar.png";
import "../../style/StyleSignin/css/main.css";
import "../../style/StyleSignin/css/util.css";
import "../../style/StyleSignin/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../style/StyleSignin/fonts/iconic/css/material-design-iconic-font.min.css";
import "../../style/StyleSignin/vendor/animate/animate.css";
import "../../style/StyleSignin/vendor/css-hamburgers/hamburgers.min.css";
import "../../style/StyleSignin/vendor/animsition/css/animsition.min.css";
import "../../style/StyleSignin/vendor/select2/select2.min.css";
import "../../style/StyleSignin/vendor/daterangepicker/daterangepicker.css";
import { register } from "../../actions/auth_action/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Form, Modal, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { banList } from "../../Banlist";
import { Footer } from "../Footer";
import NavbarComponent from "../Navbar";
import Select from "react-select";
import { getCountry } from "../../actions/Country/country_action";
import { getSchool, addSchool } from "../../actions/School/school_actions";
import Navbar_Keen from "../KeenTheme/Navbar_Keen";

const schema = yup.object({
  email: yup.string().email("Invalid Email").required("Required"),
  firstname: yup.string().required("Enter First Name"),
  lastname: yup.string().required("Enter Last Name"),
  Country: yup.string().required("Enter Country"),
  School: yup.string().required("Enter School"),
  password: yup.string().required("Enter Password"),
  //TODO:REMOVE COMMENT for password
  //     .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
  // date_of_birth: yup.date().nullable(false).required('Enter date of birth'),
  cpassword: yup
    .string()
    .required("Please Confirm Password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf(
          [yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      name: yup.string().required("Enter School Name"),
      urn: yup.string().required("Enter URN/ Registration Number"),
      url: yup.string().required("Enter URL"),
    }),
});

class Signup extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    getCountry: PropTypes.func.isRequired,
    addSchool: PropTypes.func.isRequired,
    getSchool: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired,
    school_list: PropTypes.array.isRequired,
  };
  state = {
    email: undefined,
    password: undefined,
    firstname: undefined,
    lastname: undefined,
    date_of_birth: undefined,
    cpassword: undefined,
    countryOption: undefined,
    NOT_listed: false,
    schoolOption: undefined,
    validate: false,
    name: undefined,
    urn: undefined,
    url: undefined,
    country: undefined,
  };
  onsubmit = (value) => {
    this.props.register(
      value.email,
      value.firstname,
      value.lastname,
      // value.date_of_birth,
      value.password,
      value.School,
      value.Country
    );
    this.setState({
      email: undefined,
      password: undefined,
      firstname: undefined,
      lastname: undefined,
      // date_of_birth: undefined,
    });
    document.getElementById("loginform").reset();
  };
  schoolGetter = async () => {
    await this.props.getSchool();
  };
  onsubmit_ADD = (e) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const { name, urn, url, country } = this.state;
      const data = {
        name,
        urn,
        url,
        country,
      };
      this.props.addSchool(data);
      this.schoolGetter();
      this.setState({
        name: undefined,
        urn: undefined,
        url: undefined,
        Country: undefined,
        NOT_listed: false,
      });
    }
    this.setState({ validate: true });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  validateEmail = (value) => {
    let error;
    for (const x in banList) {
      if (value.toLowerCase().includes(banList[x])) {
        error = "Domain not allowed";
      }
    }
    if (!value) {
      error = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };
  getOption_Country = async () => {
    const options = await this.props.countries.map((arr) => ({
      value: arr.id,
      label: arr.name,
    }));
    this.setState({ countryOption: options });
  };
  getOption_School = async (data) => {
    const options = await this.props.school_list
      .filter((arr) => arr.country.name === data)
      .map((arr) => ({
        value: arr.id,
        label: arr.name,
      }));
    this.setState({ schoolOption: options });
  };
  schoolFinder = async (data) => {
    await this.getOption_School(data);
  };

  async componentDidMount() {
    await this.props.getCountry();
    this.schoolGetter();
    setTimeout(this.getOption_Country, 1000);
  }

  render() {
    const {
      countryOption,
      schoolOption,
      NOT_listed,
      validate,
      name,
      urn,
      url,
    } = this.state;
    return (
      <Fragment>
        <>
          <Formik
            validationSchema={schema}
            onSubmit={this.onsubmit}
            initialValues={{
              firstname: "",
              lastname: "",
              cpassword: "",
              email: "",
              // date_of_birth: "",
              password: "",
              Country: "",
              School: "",
              NOT_listed: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              setFieldValue,
            }) => (
              <Fragment>
                <Navbar_Keen logo={true} />
                <div className="margin-topten">
                  <div className="col-12">
                    <div className="limiter">
                      <div className="container-login100SU">
                        <div className="wrap-login100SU p-t-85 p-b-20">
                          <Form
                            className="login100-form"
                            id="loginform"
                            noValidate
                            onSubmit={handleSubmit}
                          >
                            <span className="login100-form-title p-b-70">
                              Signup
                            </span>
                            <span className="login100-form-avatar">
                              <img src={avatar} alt="AVATAR" />
                            </span>
                            <div className="row">
                              <div className="col-12">
                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  Email
                                </Form.Label>
                                <Field
                                  id="emailform"
                                  className="input100 form-control"
                                  name="email"
                                  validate={this.validateEmail}
                                />
                                {errors.email && touched.email && (
                                  <div style={{ color: "#dc3545" }}>
                                    {errors.email}
                                  </div>
                                )}
                              </div>
                              <div className="col-6">
                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  First Name
                                </Form.Label>
                                <Form.Control
                                  className="input100"
                                  type="text"
                                  name="firstname"
                                  placeholder="First Name"
                                  value={values.firstname}
                                  onChange={handleChange}
                                  isInvalid={!!errors.firstname}
                                />
                                {/*<div className="focus-input100"/>*/}

                                <Form.Control.Feedback type="invalid">
                                  {errors.firstname}
                                </Form.Control.Feedback>

                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  Password
                                </Form.Label>
                                <Form.Control
                                  className="input100"
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  value={values.password}
                                  isInvalid={!!errors.password}
                                  onChange={handleChange}
                                />
                                {/*<div className="focus-input100"/>*/}

                                <Form.Control.Feedback type="invalid">
                                  {errors.password}
                                </Form.Control.Feedback>

                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  Select Country
                                </Form.Label>
                                <Select
                                  name="Country"
                                  value={values.value}
                                  options={countryOption}
                                  isInvalid={!!errors.Country}
                                  onChange={(e) => {
                                    this.schoolFinder(e.label);
                                    setFieldValue("Country", e.value);
                                    handleSubmit();
                                  }}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.Country}
                                </Form.Control.Feedback>
                              </div>
                              <div className="col-6">
                                {/*<Form.Label className="wrap-input100 m-t-35 m-b-35">Date*/}
                                {/*    of*/}
                                {/*    Birth</Form.Label>*/}
                                {/*<Form.Control className="input100" type="Date"*/}
                                {/*              name="date_of_birth"*/}
                                {/*              placeholder="date of birth"*/}
                                {/*              value={values.date_of_birth}*/}
                                {/*              isInvalid={!!errors.date_of_birth}*/}
                                {/*              onChange={handleChange}/>*/}
                                {/*/!*<div className="focus-input100"/>*!/*/}

                                {/*<Form.Control.Feedback type="invalid">*/}
                                {/*    {errors.date_of_birth}*/}
                                {/*</Form.Control.Feedback>*/}

                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  Last Name
                                </Form.Label>
                                <Form.Control
                                  className="input100"
                                  type="text"
                                  name="lastname"
                                  placeholder="Last Name"
                                  value={values.lastname}
                                  onChange={handleChange}
                                  isInvalid={!!errors.lastname}
                                />
                                {/*<div className="focus-input100"/>*/}

                                <Form.Control.Feedback type="invalid">
                                  {errors.lastname}
                                </Form.Control.Feedback>

                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  Confirm Password
                                </Form.Label>
                                <Form.Control
                                  className="input100"
                                  type="Password"
                                  name="cpassword"
                                  placeholder="Confirm Password"
                                  value={values.cpassword}
                                  onChange={handleChange}
                                  isInvalid={!!errors.cpassword}
                                />
                                {/*<div className="focus-input100"/>*/}

                                <Form.Control.Feedback type="invalid">
                                  {errors.cpassword}
                                </Form.Control.Feedback>

                                <Form.Label className="wrap-input100  m-t-35 m-b-35">
                                  Select School
                                </Form.Label>
                                <Select
                                  name="School"
                                  value={values.value}
                                  options={schoolOption}
                                  isInvalid={!!errors.School}
                                  onChange={(e) => {
                                    setFieldValue("School", e.value);
                                    handleSubmit();
                                  }}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.School}
                                </Form.Control.Feedback>
                              </div>
                              <div className="col-12"></div>
                              <div className="col-6">
                                <Form.Group
                                  className="mb-3 mb-3"
                                  controlId="formBasicCheckbox"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    onChange={() =>
                                      this.setState({ NOT_listed: !NOT_listed })
                                    }
                                    label="School not listed?"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                            <div className="container-login100-form-btn mt-5">
                              <button
                                type="submit"
                                className="login100-form-btn"
                              >
                                Register
                              </button>
                            </div>
                            <Form.Row>
                              <Form.Group as={Col} md="12">
                                <Form.Text className="text-muted">
                                  <a href="/login">Already have an account ?</a>
                                </Form.Text>
                              </Form.Group>
                            </Form.Row>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </Fragment>
            )}
          </Formik>
        </>
        <>
          <Modal
            show={NOT_listed}
            onHide={() => this.setState({ NOT_listed: !NOT_listed })}
            aria-labelledby="contained-modal-title-vcenter"
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Add School First</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                className="login100-form"
                id="loginform"
                noValidate
                validated={validate}
              >
                <div className="row">
                  <div className="col-6">
                    <Form.Label className="wrap-input100  m-t-35 m-b-35">
                      School Name
                    </Form.Label>
                    <Form.Control
                      className="input100"
                      type="text"
                      name="name"
                      placeholder="School Name"
                      value={name}
                      required
                      onChange={(e) => this.onChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter School Name
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-6">
                    <Form.Label className="wrap-input100  m-t-35 m-b-35">
                      URN / Registration Number
                    </Form.Label>
                    <Form.Control
                      className="input100"
                      type="text"
                      name="urn"
                      placeholder="URN / Registration Number"
                      value={urn}
                      required
                      onChange={(e) => this.onChange(e)}
                    />

                    <Form.Control.Feedback type="invalid">
                      Enter URN / Registration Number
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-6">
                    <Form.Label className="wrap-input100  m-t-35 m-b-35">
                      URL / Website Number
                    </Form.Label>
                    <Form.Control
                      className="input100"
                      type="text"
                      name="url"
                      placeholder="URL / Website"
                      value={url}
                      required
                      onChange={(e) => this.onChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      URL / Website Number
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-6">
                    <Form.Label className="wrap-input100  m-t-35 m-b-35">
                      Select Country
                    </Form.Label>
                    <Select
                      name="country"
                      options={countryOption}
                      onChange={(e) => this.setState({ country: e.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Select Country
                    </Form.Control.Feedback>
                  </div>
                </div>
                <Form.Row className="mt-2 text-center">
                  <Form.Group as={Col} md="12">
                    <Button
                      variant="btn btn-danger"
                      onClick={() => this.setState({ NOT_listed: !NOT_listed })}
                    >
                      Close
                    </Button>
                    <Button
                      style={{ marginLeft: "10px" }}
                      variant="btn btn-success"
                      onClick={(e) => this.onsubmit_ADD(e)}
                    >
                      Add
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/**/}
            {/*</Modal.Footer>*/}
          </Modal>
        </>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  countries: state.countries.countries,
  school_list: state.school_list.school_list,
});

export default connect(mapStateToProps, {
  register,
  getCountry,
  getSchool,
  addSchool,
})(Signup);
