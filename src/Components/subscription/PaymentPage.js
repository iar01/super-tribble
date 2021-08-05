import React, { Component, Fragment } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import "../../style/theme.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBundle } from "../../actions/Bundle/BundleAction";
import { getSchool } from "../../actions/School/school_actions";
import { getSubject } from "../../actions/Subjects/Subjects_actions";
import ListPage from "./ListPage";
import "../../index.css";
import Paypal from "./Paypal/Paypal";
import Base from "./Stripe/Base";
import Imagex from "../../assets/media/bg/bg-6.jpg";
import paypalimg from "../../assets/Paypal/img2.jpg";
import stripelogo from "../../assets/Stripe/250px-Stripe_Logo,_revised_2016.svg.png";
import Logo from "../../media/Logo/logo.svg";

class PaymentPage extends Component {
  static propTypes = {
    getBundle: PropTypes.func.isRequired,
    bundles: PropTypes.array.isRequired,
    getSubject: PropTypes.func.isRequired,
    subjectsList: PropTypes.array.isRequired,
    getSchool: PropTypes.func.isRequired,
    school_list: PropTypes.array.isRequired,
  };
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    Country: "",
    Country_state: null,
    City: null,
    selectOption: "",
    country_ISO: "",
    state_data: "",
    stateName: "",
    stateISO: "",
    city_data: "",
    city_name: "",
    city_ISO: "",
    TotalPrice: "",
    Citi_data: "",
    Inform: "block",
    Payment: "none",
    Checkout: "none",
    Paypal: "none",
    Stripe: "none",
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    validate: false,
    bundle_array: [],
    subscription_id: null,
    switch_State: false,
    value: "",
    subjectsOption: "",
    schoolOption: "",
    checkout: "",
    PackagePrice: "",
    PackageName: "",
    PackageID: "",
    Subject: "",
    school: "",
    active1: "active",
    active2: "",
  };
  handleChange = (e) => {
    this.setState(
      {
        Country_state: e.label,
        country_ISO: e.value,
      },
      () => this.getOption_state(this.state.country_ISO)
    );
  };
  getOption_state = (data) => {
    const options = State.getStatesOfCountry(data).map((arr) => ({
      value: arr.isoCode,
      label: arr.name,
    }));
    if (options.length === 0) {
      this.getCity_data(data);
    }
    this.setState({ state_data: options });
  };
  getCity_data = (data) => {
    const options = City.getCitiesOfCountry(data).map((arr) => ({
      value: arr.isoCode,
      label: arr.name,
    }));
    this.setState({ city_data: options });
  };
  handleChange_state = (e) => {
    this.setState({ stateName: e.label, stateISO: e.value }, () =>
      this.getOption_country(this.state.stateISO)
    );
  };
  getOption_country = (data) => {
    const options = City.getCitiesOfState(this.state.country_ISO, data).map(
      (arr) => ({
        value: arr.isoCode,
        label: arr.name,
      })
    );

    this.setState({ city_data: options });
  };
  handleChangeCity = (e) => {
    this.setState({ Citi_data: e.label });
  };
  Subject = (e) => {
    this.setState({ Subject: e.value });
  };
  School = (e) => {
    this.setState({ school: e.value });
  };
  getOption = () => {
    const options = Country.getAllCountries().map((arr) => ({
      value: arr.isoCode,
      label: arr.name,
    }));
    this.setState({ selectOption: options });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addclass = (data) => {
    data.classList.add("border-primary");
    data.classList.add("text-white");
    data.classList.add("bg-primary");
  };
  removeclass = (data1, data2, data3) => {
    if (data1.classList.contains("border-primary")) {
      data1.classList.remove("border-primary");
      data1.classList.remove("text-white");
      data1.classList.remove("bg-primary");
    }
    if (data2.classList.contains("border-primary")) {
      data2.classList.remove("border-primary");
      data2.classList.remove("text-white");
      data2.classList.remove("bg-primary");
    }
    if (data3.classList.contains("border-primary")) {
      data3.classList.remove("border-primary");
      data3.classList.remove("text-white");
      data3.classList.remove("bg-primary");
    }
  };
  Step1 = () => {
    const element1 = document.getElementById("step1");
    const element2 = document.getElementById("step2");
    const element3 = document.getElementById("step3");
    const element4 = document.getElementById("step4");
    this.addclass(element1);
    this.removeclass(element2, element3, element4);
    this.setState({
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    });
  };
  step2setter = () => {
    console.log("code changer");
    const element1 = document.getElementById("step1");
    const element2 = document.getElementById("step2");
    const element3 = document.getElementById("step3");
    const element4 = document.getElementById("step4");
    console.log(element2, "E2");
    this.addclass(element2);
    this.removeclass(element1, element3, element4);
    this.setState({
      step1: false,
      step2: true,
      step3: false,
      step4: false,
    });
  };
  Step2 = (e) => {
    console.log("clicked");
    if (e) {
      console.log(" if clicked");

      e.preventDefault();
      const form = e.currentTarget.form;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        this.step2setter();
      } else {
        this.step2setter();
      }
      this.setState({ validate: true });
    } else {
      console.log(" else clicked");

      this.step2setter();
    }
  };
  Step3 = () => {
    const element1 = document.getElementById("step1");
    const element2 = document.getElementById("step2");
    const element3 = document.getElementById("step3");
    const element4 = document.getElementById("step4");
    this.addclass(element3);
    this.removeclass(element1, element2, element4);
    this.setState({
      step1: false,
      step2: false,
      step3: true,
      step4: false,
    });
  };
  Step4 = () => {
    const element1 = document.getElementById("step1");
    const element2 = document.getElementById("step2");
    const element3 = document.getElementById("step3");
    const element4 = document.getElementById("step4");
    this.addclass(element4);
    this.removeclass(element1, element2, element3);
    this.setState({
      step1: false,
      step2: false,
      step3: false,
      step4: true,
    });
  };
  onClick = () => {
    this.setState({ switch_State: !this.state.switch_State });
  };
  PackageSelector = (key, arr, len) => {
    for (let x = 0; x <= len; x++) {
      if (x === key) {
        const element = document.getElementById("PriceBorder-" + x);
        element.classList.add("style_border");
      } else {
        const ele = document.getElementById("PriceBorder-" + x);
        if (ele) {
          if (ele.classList.contains("style_border")) {
            ele.classList.remove("style_border");
          }
        }
      }
    }
    if (this.state.switch_State) {
      this.setState({
        PackagePrice: arr.Annual_Price,
        PackageName: arr.Name,
        PackageID: arr.id,
      });
    } else {
      this.setState({
        PackagePrice: arr.Price,
        PackageName: arr.Name,
        PackageID: arr.id,
      });
    }

    this.setState({ subscription_id: arr });
  };
  MultiSelect = (value, { action, removedValue }) => {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
    }
    this.setState({ school: value });
  };
  getSubjects = async () => {
    const options = await this.props.subjectsList.map((arr) => ({
      value: arr.id,
      label: arr.name,
    }));
    this.setState({ subjectsOption: options });
  };
  getSchool = async () => {
    const options = await this.props.school_list.map((arr) => ({
      value: arr.id,
      label: arr.name,
    }));
    this.setState({ schoolOption: options });
  };

  LoadSubjects = (input) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getSubject(input));
      }, 1000);
    });
  };

  async componentDidMount() {
    this.getOption();
    await this.props.getBundle();
    await this.props.getSubject();
    await this.props.getSchool();
    setTimeout(this.getSubjects, 1000);
    setTimeout(this.getSchool, 1000);
  }

  render() {
    console.log(this.props.bundles, "Bundle");
    const {
      validate,
      step1,
      step3,
      step4,
      step2,
      firstName,
      lastName,
      email,
      phone,
      switch_State,
      subjectsOption,
      schoolOption,
      checkout,
      PackagePrice,
      PackageName,
      PackageID,
      Citi_data,
      Country_state,
      stateName,
      school,
      Subject,
      active1,
      active2,
    } = this.state;

    const listItem = (
      <>
        <div className="py-3 px-4 px-xl-12 border-bottom">
          <ul className="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
            <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
              <div
                id="step1"
                className="flex-content-center mb-3 width-40 height-40 border border-width-2 mx-auto rounded-circle border-primary text-white bg-primary "
              >
                1
              </div>
              <div className="text-primary">Customer information</div>
            </li>
            <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
              <div
                id="step2"
                className="flex-content-center mb-3 width-40 height-40 border border-width-2 mx-auto border-gray rounded-circle"
              >
                2
              </div>
              <div className="text-gray-1">Select Package</div>
            </li>
            <li className="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
              <div
                id="step3"
                className="flex-content-center mb-3 width-40 height-40 border border-width-2 border-gray mx-auto rounded-circle"
              >
                3
              </div>
              <div className="text-gray-1">Payment information</div>
            </li>
            <li className="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
              <div
                id="step4"
                className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle"
              >
                4
              </div>
              <div className="text-gray-1">subscribed !</div>
            </li>
          </ul>
        </div>
      </>
    );
    const element1 = (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="mb-5 shadow-soft bg-white rounded-sm">
                {listItem}
                <div className="pt-4 pb-5 px-5">
                  <h5
                    id="scroll-description "
                    className="font-size-21 font-weight-bold text-dark mb-4"
                  >
                    Let us know who you are
                  </h5>
                  {/* Contacts Form */}
                  <Form noValidate validated={validate}>
                    <div className="row">
                      {/* Input */}
                      <div className="col-sm-12 mb-4">
                        <div className="js-form-message">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="First Name"
                            aria-label="Ali"
                            value={firstName}
                            onChange={(e) => this.onChange(e)}
                            // required
                          />
                          <Form.Control.Feedback type="invalid">
                            Enter First Name
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      {/* End Input */}
                      {/* Input */}
                      <div className="col-sm-12 mb-4">
                        <div className="js-form-message">
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Last Name"
                            aria-label="TUFAN"
                            // required
                            value={lastName}
                            onChange={(e) => this.onChange(e)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Enter last Name
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      {/* End Input */}
                      {/* Input */}
                      <div className="col-sm-12 mb-4">
                        <div className="js-form-message">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email@test.com"
                            // required
                            value={email}
                            onChange={(e) => this.onChange(e)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Email me
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      {/* End Input */}
                      {/* Input */}
                      <div className="col-sm-12 mb-4">
                        <div className="js-form-message">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="+90 (254) 458 96 32"
                            // required
                            value={phone}
                            onChange={(e) => this.onChange(e)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Phone number
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      {/* End Input */}
                      <div className="w-100" />
                      {/* Input */}
                      <div className="col-sm-4 mb-4">
                        <div className="js-form-message">
                          <Form.Label>Country</Form.Label>
                          <Select
                            onChange={(e) => this.handleChange(e)}
                            options={this.state.selectOption}
                            required
                          />
                        </div>
                      </div>
                      {/* End Input */}
                      <div className="col-sm-4 mb-4">
                        <div className="js-form-message">
                          <label className="form-label">State</label>
                          <Select
                            onChange={(e) => this.handleChange_state(e)}
                            options={this.state.state_data}
                          />
                        </div>
                      </div>
                      {/* Input */}
                      <div className="col-sm-4 mb-4">
                        <div className="js-form-message">
                          <label className="form-label">City</label>
                        </div>
                        <Select
                          onChange={(e) => this.handleChangeCity(e)}
                          options={this.state.city_data}
                        />
                      </div>
                      <div className="col-sm-12 mb-6">
                        <div className="js-form-message">
                          <label className="form-label">Subject</label>
                        </div>
                        <Select
                          onChange={(e) => this.Subject(e)}
                          options={subjectsOption}
                        />
                      </div>

                      <div className="col-sm-12 mb-6">
                        <div className="js-form-message">
                          <label className="form-label">School</label>
                        </div>
                        <Select
                          onChange={(e) => this.School(e)}
                          options={schoolOption}
                        />
                      </div>
                      {/* End Input */}
                      <div className="w-100" />
                      <div className="col-sm-6 align-self-end">
                        <div className="text-left">
                          <button
                            disabled
                            className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                          >
                            BACK PAGE
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-6 align-self-end">
                        <div className="text-right">
                          <button
                            onClick={(e) => this.Step2(e)}
                            className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                          >
                            NEXT PAGE
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                  {/* End Contacts Form */}
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </Fragment>
    );
    const element2 = (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5 shadow-soft bg-white rounded-sm">
                {listItem}
                <div>
                  <>
                    <div className="d-flex flex-column-fluid">
                      {/*begin::Container*/}
                      <div className="container">
                        {/*begin::Card*/}
                        <div className="card">
                          {/* begin: custom background*/}
                          <div
                            className="position-absolute w-100 h-50 rounded-card-top"
                            style={{ backgroundColor: "#22B9FF" }}
                          />
                          {/* end: custom background*/}
                          <div className="card-body position-relative">
                            <h3 className="7 text-white text-center my-10 my-lg-15">
                              Transparent &amp; Simple Pricing
                            </h3>
                            {/* begin: Tabs*/}
                            <div className="d-flex justify-content-center">
                              <ul
                                className="nav nav-pills nav-primary mb-10 mb-lg-20 bg-white rounded"
                                id="pills-tab"
                                role="tablist"
                              >
                                <li className="nav-item p-0 m-0">
                                  <button
                                    onClick={() =>
                                      this.setState({
                                        switch_State: !switch_State,
                                        active1: "active",
                                        active2: "",
                                      })
                                    }
                                    className={`nav-link font-weight-bolder rounded-right-0 px-8 py-5 ${active1}`}
                                  >
                                    Annual Plans
                                  </button>
                                </li>
                                <li className="nav-item p-0 m-0">
                                  <button
                                    onClick={() =>
                                      this.setState({
                                        switch_State: !switch_State,
                                        active2: "active",
                                        active1: "",
                                      })
                                    }
                                    className={`nav-link font-weight-bolder rounded-right-0 px-8 py-5 ${active2}`}
                                  >
                                    Monthly Plans
                                  </button>
                                </li>
                              </ul>
                            </div>
                            {/* end: Tabs*/}
                            <div className="tab-content">
                              {/* begin: Tab pane*/}
                              <div
                                className="tab-pane show active row text-center"
                                id="kt-pricing-2_content1"
                                role="tabpanel"
                                aria-labelledby="pills-tab-1"
                              >
                                <div className="card-body bg-white col-11 col-lg-12 col-xxl-10 mx-auto">
                                  <div className="row">
                                    {this.props.bundles.map((arr, key) => (
                                      <div key={key} className="col-md-4">
                                        <div className="pt-30 pt-md-25 pb-15 px-5 text-center">
                                          {/*begin::Icon*/}
                                          <div className="d-flex flex-center position-relative mb-25">
                                            <span className="svg svg-fill-primary opacity-4 position-absolute">
                                              <svg width={175} height={200}>
                                                <polyline points="87,0 174,50 174,150 87,200 0,150 0,50 87,0" />
                                              </svg>
                                            </span>
                                            <span className="svg-icon svg-icon-5x svg-icon-primary">
                                              {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Flower3.svg*/}
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                              >
                                                <g
                                                  stroke="none"
                                                  strokeWidth={1}
                                                  fill="none"
                                                  fillRule="evenodd"
                                                >
                                                  <polygon points="0 0 24 0 24 24 0 24" />
                                                  <path
                                                    d="M1.4152146,4.84010415 C11.1782334,10.3362599 14.7076452,16.4493804 12.0034499,23.1794656 C5.02500006,22.0396582 1.4955883,15.9265377 1.4152146,4.84010415 Z"
                                                    fill="#000000"
                                                    opacity="0.3"
                                                  />
                                                  <path
                                                    d="M22.5950046,4.84010415 C12.8319858,10.3362599 9.30257403,16.4493804 12.0067693,23.1794656 C18.9852192,22.0396582 22.5146309,15.9265377 22.5950046,4.84010415 Z"
                                                    fill="#000000"
                                                    opacity="0.3"
                                                  />
                                                  <path
                                                    d="M12.0002081,2 C6.29326368,11.6413199 6.29326368,18.7001435 12.0002081,23.1764706 C17.4738192,18.7001435 17.4738192,11.6413199 12.0002081,2 Z"
                                                    fill="#000000"
                                                    opacity="0.3"
                                                  />
                                                </g>
                                              </svg>
                                              {/*end::Svg Icon*/}
                                            </span>
                                          </div>
                                          {/*end::Icon*/}
                                          {/*begin::Content*/}
                                          <h4 className="font-size-h3 mb-10">
                                            {arr.Name}
                                          </h4>
                                          <div className="d-flex flex-column line-height-xl pb-10">
                                            <ListPage data={arr.Point} />
                                          </div>
                                          <span className="font-size-h1 d-block font-weight-boldest text-dark">
                                            {switch_State === false
                                              ? arr.Price
                                              : arr.Annual_Price}
                                            <sup className="font-size-h3 font-weight-normal pl-1">
                                              £
                                            </sup>
                                          </span>
                                          <div className="mt-7">
                                            <button
                                              onClick={() =>
                                                this.PackageSelector(
                                                  key,
                                                  arr,
                                                  this.props.bundles.length
                                                )
                                              }
                                              type="button"
                                              className="btn btn-primary text-uppercase font-weight-bolder px-15 py-3"
                                            >
                                              Purchase
                                            </button>
                                          </div>
                                          {/*end::Content*/}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {/* end: Tab pane*/}
                            </div>
                          </div>
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::Container*/}
                    </div>
                  </>

                  <div className="row container">
                    <div className="w-100" />
                    <div
                      className="col-sm-6 align-self-end"
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    >
                      <div className="text-left">
                        <button
                          onClick={() => this.Step1()}
                          className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                        >
                          BACK PAGE
                        </button>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 align-self-end"
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    >
                      <div className="text-right">
                        <button
                          onClick={() => this.Step3()}
                          className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                        >
                          NEXT PAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
    const element3 = (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="mb-5 shadow-soft bg-white rounded-sm">
                {listItem}
                <div className="pt-4 pb-5 px-5">
                  <h5
                    id="scroll-description"
                    className="font-size-21 font-weight-bold text-dark mb-4"
                  >
                    Your Card Information
                  </h5>
                  {/* Nav Classic */}
                  <ul
                    className="nav nav-classic nav-choose border-0 nav-justified border mx-n3"
                    role="tablist"
                  >
                    <li className="nav-item mx-3">
                      <a id="pills-two-example2-tab" data-toggle="pill">
                        <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                          <i className="flaticon-tick text-white font-size-15" />
                        </div>
                        <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                          <div className="row mt-5">
                            <div className="col-12 text-center">
                              <h4>Please Select Payment Method</h4>
                            </div>
                            <div className="col-6 text-center">
                              {checkout === "Paypal" ? (
                                <Paypal
                                  Price={PackagePrice}
                                  Name={PackageName}
                                  firstName={firstName}
                                  lastName={lastName}
                                  email={email}
                                  phone={phone}
                                  PackageID={PackageID}
                                  checkout={checkout}
                                  Citi_data={Citi_data}
                                  Country_state={Country_state}
                                  stateName={stateName}
                                  School={school}
                                  Subject={Subject}
                                  user={localStorage.getItem("id")}
                                />
                              ) : (
                                <button
                                  onClick={() =>
                                    this.setState({ checkout: "Paypal" })
                                  }
                                >
                                  <img src={paypalimg} alt="paypal img" />
                                </button>
                              )}
                            </div>
                            <div className="col-6 text-center">
                              {checkout === "Stripe" ? (
                                <Base
                                  Price={PackagePrice}
                                  Name={PackageName}
                                  firstName={firstName}
                                  lastName={lastName}
                                  email={email}
                                  phone={phone}
                                  PackageID={PackageID}
                                  checkout={checkout}
                                  Citi_data={Citi_data}
                                  Country_state={Country_state}
                                  stateName={stateName}
                                  School={school}
                                  Subject={Subject}
                                  user={localStorage.getItem("id")}
                                />
                              ) : (
                                <button
                                  onClick={() =>
                                    this.setState({ checkout: "Stripe" })
                                  }
                                >
                                  <img
                                    style={{ height: "40px" }}
                                    src={stripelogo}
                                    alt="stripe img"
                                  />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="row mt-5">
                    <div className="w-100" />
                    <div className="col-sm-6 align-self-end">
                      <div className="text-left">
                        <button
                          onClick={() => this.Step2()}
                          className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                        >
                          BACK PAGE
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-6 align-self-end">
                      <div className="text-right">
                        <button
                          onClick={() => this.Step4()}
                          className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                        >
                          NEXT PAGE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* End Nav Classic */}
                  {/* Tab Content */}
                  {/*<StripeBase/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );

    const element4 = (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5 shadow-soft bg-white rounded-sm">
                {listItem}

                <div className="d-flex flex-column-fluid">
                  {/*begin::Container*/}
                  <div className="container">
                    {/* begin::Card*/}
                    <div className="card card-custom overflow-hidden">
                      <div className="card-body p-0">
                        {/* begin: Invoice*/}
                        {/* begin: Invoice header*/}
                        <div
                          className="row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 py-md-27 px-md-0"
                          style={{ backgroundImage: `url(${Imagex})` }}
                        >
                          <div className="col-md-9">
                            <div className="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                              <h1 className="display-4 text-white font-weight-boldest mb-10">
                                INVOICE
                              </h1>
                              <div className="d-flex flex-column align-items-md-end px-0">
                                {/*begin::Logo*/}
                                <a href="#" className="mb-5">
                                  <img src={Logo} alt="..." height="50px" />
                                </a>
                                {/*end::Logo*/}
                                <span className="text-white d-flex flex-column align-items-md-end opacity-70">
                                  <span>
                                    Cecilia Chapman, 711-2880 Nulla St, Mankato
                                  </span>
                                  <span>Mississippi 96522</span>
                                </span>
                              </div>
                            </div>
                            <div className="border-bottom w-100 opacity-20" />
                            <div className="d-flex justify-content-between text-white pt-6">
                              <div className="d-flex flex-column flex-root">
                                <span className="font-weight-bolde mb-2r">
                                  DATE
                                </span>
                                <span className="opacity-70">Aug 05, 2021</span>
                              </div>
                              <div className="d-flex flex-column flex-root">
                                <span className="font-weight-bolder mb-2">
                                  INVOICE NO.
                                </span>
                                <span className="opacity-70">GS 000014</span>
                              </div>
                              <div className="d-flex flex-column flex-root">
                                <span className="font-weight-bolder mb-2">
                                  INVOICE TO.
                                </span>
                                <span className="opacity-70">
                                  Iris Watson, P.O. Box 283 8562 Fusce RD.
                                  <br />
                                  Fredrick Nebraska 20620
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end: Invoice header*/}
                        {/* begin: Invoice body*/}
                        <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                          <div className="col-md-9">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th className="pl-0 font-weight-bold text-muted text-uppercase">
                                      Description
                                    </th>
                                    <th className="text-right font-weight-bold text-muted text-uppercase">
                                      Month(s)
                                    </th>
                                    <th className="text-right font-weight-bold text-muted text-uppercase">
                                      Rate
                                    </th>
                                    <th className="text-right pr-0 font-weight-bold text-muted text-uppercase">
                                      Amount
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="font-weight-boldest font-size-lg">
                                    <td className="pl-0 pt-7">
                                      Basic Packge
                                    </td>
                                    <td className="text-right pt-7">12</td>
                                    <td className="text-right pt-7">£40.00</td>
                                    <td className="text-danger pr-0 pt-7 text-right">
                                      £480.00
                                    </td>
                                  </tr>
                                  <tr className="font-weight-boldest border-bottom-0 font-size-lg">
                                    <td className="border-top-0 pl-0 py-4">
                                      Front-End Development
                                    </td>
                                    <td className="border-top-0 text-right py-4">
                                      120
                                    </td>
                                    <td className="border-top-0 text-right py-4">
                                      £40.00
                                    </td>
                                    <td className="text-danger border-top-0 pr-0 py-4 text-right">
                                      £4800.00
                                    </td>
                                  </tr>
                                  <tr className="font-weight-boldest border-bottom-0 font-size-lg">
                                    <td className="border-top-0 pl-0 py-4">
                                      Back-End Development
                                    </td>
                                    <td className="border-top-0 text-right py-4">
                                      210
                                    </td>
                                    <td className="border-top-0 text-right py-4">
                                      £60.00
                                    </td>
                                    <td className="text-danger border-top-0 pr-0 py-4 text-right">
                                      £12600.00
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* end: Invoice body*/}
                        {/* begin: Invoice footer*/}
                        <div className="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0">
                          <div className="col-md-9">
                            <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                              <div className="d-flex flex-column mb-10 mb-md-0">
                                <div className="font-weight-bolder font-size-lg mb-3">
                                  BANK TRANSFER
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                  <span className="mr-15 font-weight-bold">
                                    Account Name:
                                  </span>
                                  <span className="text-right">
                                    Barclays UK
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                  <span className="mr-15 font-weight-bold">
                                    Account Number:
                                  </span>
                                  <span className="text-right">
                                    1234567890934
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <span className="mr-15 font-weight-bold">
                                    Code:
                                  </span>
                                  <span className="text-right">BARC0032UK</span>
                                </div>
                              </div>
                              <div className="d-flex flex-column text-md-right">
                                <span className="font-size-lg font-weight-bolder mb-1">
                                  TOTAL AMOUNT
                                </span>
                                <span className="font-size-h2 font-weight-boldest text-danger mb-1">
                                  £20.600.00
                                </span>
                                <span>Taxes Included</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end: Invoice footer*/}
                        {/* begin: Invoice action*/}
                        <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                          <div className="col-md-9">
                            <div className="d-flex justify-content-between">
                              <button
                                type="button"
                                className="btn btn-light-primary font-weight-bold"
                                onClick={() => window.print()}
                              >
                                Download Invoice
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary font-weight-bold"
                                onClick={() => window.print()}
                              >
                                Print Invoice
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* end: Invoice action*/}
                        {/* end: Invoice*/}
                      </div>
                    </div>
                    {/* end::Card*/}
                  </div>
                  {/*end::Container*/}
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="w-100" />
              <div className="col-sm-6 align-self-end">
                <div className="text-left">
                  <button
                    disabled
                    onClick={() => this.Step3()}
                    className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                  >
                    BACK PAGE
                  </button>
                </div>
              </div>
              <div className="col-sm-6 align-self-end">
                <div className="text-right">
                  <button
                    disabled
                    className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                  >
                    NEXT PAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
    if (step1 === true) {
      return element1;
    } else if (step2 === true) {
      return element2;
    } else if (step3 === true) {
      return element3;
    } else if (step4) {
      return element4;
    }
  }
}

const mapStateToProps = (state) => ({
  bundles: state.bundles.bundles,
  subjectsList: state.subjectsList.subjectsList,
  school_list: state.school_list.school_list,
});
export default connect(mapStateToProps, { getBundle, getSubject, getSchool })(
  PaymentPage
);
