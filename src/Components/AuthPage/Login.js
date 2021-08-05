import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth_action/auth";
import avatar from "../../style/StyleSignin/images/avatar.png";
import { Form, Col, Alert } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { banList } from "../../Banlist";
import { Footer } from "../Footer";
import NavbarComponent from "../Navbar";
import Navbar_Keen from "../KeenTheme/Navbar_Keen";

const schema = yup.object({
  email: yup.string().email("Invalid Email").required("Required"),
  password: yup.string().required(),
});

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
  };
  state = {
    email: undefined,
    password: undefined,
    validate: false,
    show: true,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (value) => {
    this.props.login(value.email, value.password);
    this.setState({ email: undefined, password: undefined });
    document.getElementById("loginform").reset();
  };
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

  render() {
    const { show } = this.state;
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.onSubmit}
        initialValues={{}}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Fragment>
            <Navbar_Keen logo={true} />
            <div className="margin-topten">
              <div className="col-12">
                {this.props.location.message !== undefined && show ? (
                  <Alert
                    variant="danger"
                    onClose={() => this.setState({ show: false })}
                    dismissible
                  >
                    {this.props.location.message} &nbsp;
                    <Alert.Link href={this.props.location.pathname}>
                      Login here
                    </Alert.Link>
                  </Alert>
                ) : (
                  ""
                )}
                <div className="limiter">
                  <Form
                    className="container-login100"
                    id="loginform"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="wrap-login100 p-b-20">
                      <span className="login100-form-title p-b-70">
                        Welcome
                      </span>
                      <span className="login100-form-avatar">
                        <img src={avatar} alt="AVATAR1234" />
                      </span>
                      <Form.Row>
                        <Form.Group as={Col} md="12">
                          <Form.Label className="wrap-input100 m-t-85">
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
                        </Form.Group>
                        <Form.Group as={Col} md="12">
                          <Form.Label className="wrap-input100 m-t-35 m-b-35">
                            Password
                          </Form.Label>
                          <Form.Control
                            className="input100"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.region}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                      <button type="submit" className="login100-form-btn mt-5">
                        Login
                      </button>
                      <Form.Row>
                        <Form.Group as={Col} md="12">
                          <Form.Text className="text-muted">
                            <a href="/Signup">Don't have an account ?</a>
                          </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md="12">
                          <Form.Text className="text-muted">
                            <a href="/Signup">Forget Password</a>
                          </Form.Text>
                        </Form.Group>
                      </Form.Row>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <Footer />
          </Fragment>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});
export default connect(mapStateToProps, {login})(Login)