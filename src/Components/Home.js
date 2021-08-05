import React, { Component } from "react";
import MobileHeader from "./KeenTheme/MobileHeader";
import Sidebar from "./KeenTheme/Sidebar";
import Navbar_Keen from "./KeenTheme/Navbar_Keen";
import Subheader from "./KeenTheme/Subheader";
import UserPanel from "./KeenTheme/UserPanel";
import QuickCart from "./KeenTheme/QuickCart";
import QuickPanel from "./KeenTheme/QuickPanel";
import ChatPanel from "./KeenTheme/ChatPanel";
import Scrolltop from "./KeenTheme/Scrolltop";
import StickyToolbar from "./KeenTheme/StickyToolbar";
import DemoPanel from "./KeenTheme/DemoPanel";
import HomeData from "./KeenTheme/HomeData";

class Home extends Component {
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
                <Subheader name="Home Page" />
                {/*end::Subheader*/}
                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                  {/*begin::Container*/}
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col-12">
                        <HomeData />
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

export default Home;
