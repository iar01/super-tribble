import React, {Component} from 'react'
import MobileHeader from "../KeenTheme/MobileHeader";
import Sidebar from "../KeenTheme/Sidebar";
import Navbar_Keen from "../KeenTheme/Navbar_Keen";
import Subheader from "../KeenTheme/Subheader";
import Mixed_Widget_2 from "../KeenTheme/Widget/Mixed/Mixed_Widget_2";
import Mixed_Widget_13 from "../KeenTheme/Widget/Mixed/MixedWidget13";
import Mixed_Widget_16 from "../KeenTheme/Widget/Mixed/MixedWidget16";
import Mixed_Widget_4 from "../KeenTheme/Widget/Mixed/MixedWidget4";
import Mixed_Widget_7 from "../KeenTheme/Widget/Mixed/MixedWidget7";
import Mixed_Widget_18 from "../KeenTheme/Widget/Mixed/MixedWidget18";
import Mixed_Widget_15 from "../KeenTheme/Widget/Mixed/MixedWidget15";
import StatsWidget7 from "../KeenTheme/Widget/Stats/StatsWidget7";
import UserPanel from "../KeenTheme/UserPanel";
import QuickCart from "../KeenTheme/QuickCart";
import QuickPanel from "../KeenTheme/QuickPanel";
import ChatPanel from "../KeenTheme/ChatPanel";
import Scrolltop from "../KeenTheme/Scrolltop";
import StickyToolbar from "../KeenTheme/StickyToolbar";
import DemoPanel from "../KeenTheme/DemoPanel";
import ListWidget17 from "../KeenTheme/Widget/List/ListWidget17";
import ListWidget9 from "../KeenTheme/Widget/List/ListWidget9";
import NavPanelWidget3 from "../KeenTheme/Widget/Nav Panel Widget/NavPanelWidget3";

class DashboardHome extends Component {
    render() {
        return (
            <>
                {/*begin::Main*/}
                {/*begin::Header Mobile*/}
                <MobileHeader/>
                {/*end::Header Mobile*/}
                <div className="d-flex flex-column flex-root">
                    {/*begin::Page*/}
                    <div className="d-flex flex-row flex-column-fluid page">
                        {/*begin::Aside*/}
                        <Sidebar/>
                        {/*end::Aside*/}
                        {/*begin::Wrapper*/}
                        <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                            {/*begin::Header*/}
                            <Navbar_Keen/>
                            {/*end::Header*/}
                            {/*begin::Content*/}
                            <div style={{marginTop: '20px'}} className="content d-flex flex-column flex-column-fluid"
                                 id="kt_content">
                                {/*begin::Subheader*/}
                                <Subheader/>
                                {/*end::Subheader*/}
                                {/*begin::Entry*/}
                                <div className="d-flex flex-column-fluid">
                                    {/*begin::Container*/}
                                    <div className="container">
                                        {/*begin::Statistics*/}
                                        <div className="d-flex flex-sm-row flex-column">
                                            {/*begin::Aside*/}
                                            <div className="flex-md-row-auto w-sm-250px w-md-275px w-xl-325px">
                                                {/*begin::Nav Panel Widget 3*/}
                                                <NavPanelWidget3/>
                                                {/*end::Nav Panel Widget 3*/}
                                                {/*begin::List Widget 17*/}
                                                <ListWidget17/>
                                                {/*end::List Widget 17*/}
                                                {/*begin::List Widget 9*/}
                                                {/*<ListWidget9/>*/}
                                                {/*end: List Widget 9*/}
                                            </div>
                                            {/*end::Aside*/}
                                            {/*begin::Content*/}
                                            <div className="flex-row-fluid ml-sm-8">
                                                <div className="row">
                                                    <div className="col-xxl-6">
                                                        {/*begin::Mixed Widget 2*/}
                                                        <Mixed_Widget_2/>
                                                        {/*end::Mixed Widget 2*/}
                                                        {/*begin::Mixed Widget 13*/}
                                                        {/*<Mixed_Widget_13/>*/}
                                                        {/*end::Mixed Widget 13*/}
                                                        {/*begin::Mixed Widget 16*/}
                                                        <Mixed_Widget_16/>
                                                        {/*end::Mixed Widget 16*/}
                                                        {/*begin::Mixed Widget 4*/}
                                                        {/*<Mixed_Widget_4/>*/}
                                                        {/*end::Mixed Widget 4*/}
                                                    </div>
                                                    <div className="col-xxl-6">
                                                        {/*begin::Mixed Widget 7*/}
                                                        <Mixed_Widget_7/>
                                                        {/*end::Mixed Widget 7*/}
                                                        <ListWidget9/>
                                                        {/*begin::Mixed Widget 18*/}
                                                        {/*<Mixed_Widget_18/>*/}
                                                        {/*end::Mixed Widget 18*/}
                                                        {/*begin::Mixed Widget 15*/}
                                                        {/*<Mixed_Widget_15/>*/}
                                                        {/*end::Mixed Widget 15*/}
                                                        {/*begin::Stats Widget 7*/}
                                                        {/*<StatsWidget7/>*/}
                                                        {/*end::Stats Widget 7*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Content*/}
                                        </div>
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
                <UserPanel/>
                {/* end::User Panel*/}
                {/*begin::Quick Cart*/}
                <QuickCart/>
                {/*end::Quick Cart*/}
                {/*begin::Quick Panel*/}
                <QuickPanel/>
                {/*end::Quick Panel*/}
                {/*begin::Chat Panel*/}
                <ChatPanel/>
                {/*end::Chat Panel*/}
                {/*begin::Scrolltop*/}
                <Scrolltop/>
                {/*end::Scrolltop*/}
                {/*begin::Sticky Toolbar*/}
                <StickyToolbar/>
                {/*end::Sticky Toolbar*/}
                {/*begin::Demo Panel*/}
                <DemoPanel/>
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

export default DashboardHome