import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import data from "../DummyData/ClassesData.json";

export default class ClassesData extends Component {
  state = {
    show: false,
  };

  render() {
    const { show } = this.state;
    return (
      <>
        <div className="card card-custom">
          <div className="card-header flex-wrap border-0 pt-6 pb-0">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Class
              </span>
              <span className="text-muted mt-1 font-weight-bold font-size-sm">
                Manage over 1600 students
              </span>
            </h3>
            <div className="card-toolbar">
              <div
                className="dropdown dropdown-inline"
                data-toggle="tooltip"
                title
                data-placement="left"
                data-original-title="Quick actions"
              >
                {/*begin::Trigger Modal*/}
                <Button
                  onClick={() => this.setState({ show: true })}
                  className="btn btn-success font-weight-bolder font-size-sm"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="modal"
                  data-target="#exampleModalCustomScrollable"
                >
                  New class
                </Button>
                {/*end::Trigger Modal*/}
                {/*begin::Modal Content*/}
                <Modal
                  show={show}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  onHide={() => this.setState({ show: false })}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add New Class
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i aria-hidden="true" className="ki ki-close" />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div data-scroll="true" data-height={600}>
                        <form className="form pt-9">
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Name
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <input
                                className="form-control form-control-lg form-control-solid"
                                type="text"
                                defaultValue="class Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              School Name
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <input
                                className="form-control form-control-lg form-control-solid"
                                type="text"
                                defaultValue="School Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Organization
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <input
                                className="form-control form-control-lg form-control-solid"
                                type="text"
                                defaultValue="Loop Inc."
                              />
                              <span className="form-text text-muted">
                                If you want your invoices addressed to a
                                company. Leave blank to use your full name.
                              </span>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-10" />
                          {/*begin::Heading*/}
                          <div className="row">
                            <div className="col-lg-9 col-xl-6 offset-xl-3">
                              <h3 className="font-size-h6 mb-5">
                                Contact Info:
                              </h3>
                            </div>
                          </div>
                          {/*end::Heading*/}
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Phone
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <div className="input-group input-group-lg input-group-solid">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="la la-phone" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control form-control-lg form-control-solid"
                                  defaultValue={+35278953712}
                                  placeholder="Phone"
                                />
                              </div>
                              <span className="form-text text-muted">
                                We'll never share your email with anyone else.
                              </span>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Email Address
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <div className="input-group input-group-lg input-group-solid">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="la la-at" />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control form-control-lg form-control-solid"
                                  defaultValue="nick.bold@loop.com"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Site
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <div className="input-group input-group-lg input-group-solid">
                                <input
                                  type="text"
                                  className="form-control form-control-lg form-control-solid"
                                  placeholder="Username"
                                  defaultValue="loop"
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text">.com</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-10" />
                          {/*begin::Heading*/}
                          <div className="row">
                            <div className="col-lg-9 col-xl-6 offset-xl-3">
                              <h3 className="font-size-h6 mb-5">
                                Contact Info:
                              </h3>
                            </div>
                          </div>
                          {/*end::Heading*/}
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Email Notification
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <span className="switch">
                                <label>
                                  <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                    name="email_notification_1"
                                  />
                                  <span />
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 text-right col-form-label">
                              Send Copy
                            </label>
                            <div className="col-lg-9 col-xl-6">
                              <span className="switch">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="email_notification_2"
                                  />
                                  <span />
                                </label>
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        onClick={() => this.setState({ show: false })}
                        type="button"
                        className="btn btn-light-primary font-weight-bold"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => this.setState({ show: false })}
                        type="button"
                        className="btn btn-primary font-weight-bold"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Modal>
                {/*end::Modal Content*/}
              </div>
            </div>
          </div>

          <div className="card-body py-0">
            {/*begin::Table*/}
            <div className="table-responsive">
              <table
                className="table table-head-custom table-vertical-center"
                id="kt_advance_table_widget_4"
              >
                <thead>
                  <tr className="text-left">
                    <th className="pl-0" style={{ width: "30px" }}>
                      <label className="checkbox checkbox-lg checkbox-inline mr-2">
                        <input type="checkbox" defaultValue={1} />
                        <span />
                      </label>
                    </th>
                    <th className="pl-0" style={{ minWidth: "120px" }}>
                      id
                    </th>
                    <th style={{ minWidth: "120px" }}>School</th>
                    <th style={{ minWidth: "120px" }}>Subjects</th>
                    <th style={{ minWidth: "120px" }}>Year Grade</th>
                    <th style={{ minWidth: "120px" }}>Teachers</th>
                    <th style={{ minWidth: "120px" }}>Students</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((arr, key) => (
                    <tr key={key}>
                      <td className="pl-0 py-6">
                        <label className="checkbox checkbox-lg checkbox-inline">
                          <input type="checkbox" defaultValue={1} />
                          <span />
                        </label>
                      </td>
                      <td className="pl-0">
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                        >
                          {arr.id}
                        </a>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {arr.School}
                        </span>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {arr.Subjects}
                        </span>
                      </td>
                      <td>{arr.YearGrade}</td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {arr.Teachers}
                        </span>
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {arr.Students}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*end::Table*/}
          </div>
          {/*end::Body*/}
        </div>
      </>
    );
  }
}
