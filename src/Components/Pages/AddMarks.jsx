import React, { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";
import MobileHeader from "../KeenTheme/MobileHeader";
import Sidebar from "../KeenTheme/Sidebar";
import Navbar_Keen from "../KeenTheme/Navbar_Keen";
import Subheader from "../KeenTheme/Subheader";
import UserPanel from "../KeenTheme/UserPanel";
import QuickCart from "../KeenTheme/QuickCart";
import QuickPanel from "../KeenTheme/QuickPanel";
import ChatPanel from "../KeenTheme/ChatPanel";
import Scrolltop from "../KeenTheme/Scrolltop";
import StickyToolbar from "../KeenTheme/StickyToolbar";
import DemoPanel from "../KeenTheme/DemoPanel";
import StudentMarks from "../KeenTheme/StudentMarks";

class AddMarks extends Component {
  render() {
    return (
      <>
        {/*begin::Main*/}
        {/*begin::Header Mobile*/}
        <MobileHeader />
        {/*end::Header Mobile*/}
        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/*begin::Aside*/}
            <Sidebar />
            {/*end::Aside*/}
            {/*begin::Wrapper*/}
            <div
              className="d-flex flex-column flex-row-fluid wrapper"
              id="kt_wrapper"
            >
              {/*begin::Header*/}
              <Navbar_Keen />
              {/*end::Header*/}
              {/*begin::Content*/}
              <div
                style={{ marginTop: "20px" }}
                className="content d-flex flex-column flex-column-fluid"
                id="kt_content"
              >
                {/*begin::Subheader*/}

                <Subheader name="Marks" />
                {/*end::Subheader*/}
                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                  {/*begin::Container*/}
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col-6 text-center">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            style={{ width: "250px" }}
                          >
                            Select Class
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div
                              className="d-flex flex-sm-row flex-column"
                              style={{ width: "250px" }}
                            >
                              <ul className="navi navi-hover navi-active">
                                <li
                                  className="navi-item"
                                  style={{ width: "250px" }}
                                >
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-analytics text-danger" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        O level
                                      </span>
                                      <span className="text-muted">
                                        OFR-123
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="navi-item">
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-pie-chart-2  text-warning" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        10th
                                      </span>
                                      <span className="text-muted">SFR-98</span>
                                    </div>
                                  </a>
                                </li>
                                <li className="navi-item">
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-box-1  text-success" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        9th
                                      </span>
                                      <span className="text-muted">
                                        SFR-908
                                      </span>
                                    </div>
                                    {/*<span className="navi-label">*/}
                                    {/*  <span className="label label-warning label-rounded">*/}
                                    {/*    5*/}
                                    {/*  </span>*/}
                                    {/*</span>*/}
                                  </a>
                                </li>
                                <li className="navi-item">
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-file  text-primary" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        11th
                                      </span>
                                      <span className="text-muted">SFX-69</span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="col-6 text-center">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            style={{ width: "250px" }}
                          >
                            Select Subject
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div
                              className="d-flex flex-sm-row flex-column"
                              style={{ width: "250px" }}
                            >
                              <ul className="navi navi-hover navi-active">
                                <li
                                  className="navi-item"
                                  style={{ width: "250px" }}
                                >
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-analytics text-danger" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        English
                                      </span>
                                      {/*<span className="text-muted">*/}
                                      {/*  Inbox and notifications*/}
                                      {/*</span>*/}
                                    </div>
                                    {/*<span className="label label-light-danger font-weight-bold label-inline">*/}
                                    {/*  new*/}
                                    {/*</span>*/}
                                  </a>
                                </li>
                                <li className="navi-item">
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-pie-chart-2  text-warning" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        Computer Science
                                      </span>
                                      {/*<span className="text-muted">*/}
                                      {/*  Applications & services*/}
                                      {/*</span>*/}
                                    </div>
                                  </a>
                                </li>
                                <li className="navi-item">
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-box-1  text-success" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        Physics
                                      </span>
                                      {/*<span className="text-muted">*/}
                                      {/*  Project & tasks*/}
                                      {/*</span>*/}
                                    </div>
                                    <span className="navi-label">
                                      {/*<span className="label label-warning label-rounded">*/}
                                      {/*  5*/}
                                      {/*</span>*/}
                                    </span>
                                  </a>
                                </li>
                                <li className="navi-item">
                                  <a className="navi-link">
                                    <span className="navi-icon">
                                      <i className="flaticon2-file  text-primary" />
                                    </span>
                                    <div className="navi-text">
                                      <span className="d-block font-weight-bold">
                                        Biology
                                      </span>
                                      {/*<span className="text-muted">*/}
                                      {/*  eCommernce orders*/}
                                      {/*</span>*/}
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12">
                        <StudentMarks />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12 text-center">
                        <Button variant="success">Save</Button>
                      </div>
                    </div>
                    {/*begin::Statistics*/}

                    {/*end::Statistics*/}
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Entry*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::Main*/}
        {/* begin::User Panel*/}
        <UserPanel />
        {/* end::User Panel*/}
        {/*begin::Quick Cart*/}
        <QuickCart />
        {/*end::Quick Cart*/}
        {/*begin::Quick Panel*/}
        <QuickPanel />
        {/*end::Quick Panel*/}
        {/*begin::Chat Panel*/}
        <ChatPanel />
        {/*end::Chat Panel*/}
        {/*begin::Scrolltop*/}
        <Scrolltop />
        {/*end::Scrolltop*/}
        {/*begin::Sticky Toolbar*/}
        <StickyToolbar />
        {/*end::Sticky Toolbar*/}
        {/*begin::Demo Panel*/}
        <DemoPanel />
        {/*end::Demo Panel*/}
        {/*begin::Global Config(global config for global JS scripts)*/}
        {/*end::Global Config*/}
        {/*begin::Global Theme Bundle(used by all pages)*/}
        {/*end::Global Theme Bundle*/}
        {/*begin::Page Scripts(used by this page)*/}
        {/*end::Page Scripts*/}
      </>
    );
  }
}

export default AddMarks;
