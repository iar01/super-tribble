import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import PrivateRoute from "./Components/PrivateRoute";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Alerts from '../src/Alerts/Alerts'
import axios from "axios";
import Home from '../src/Components/Home'
import Page_404 from '../src/Components/Page_404'
import Signup from '../src/Components/AuthPage/Signup'
import Login from "./Components/AuthPage/Login";
import PageParent from "./Components/subscription/PageParent";
import DashboardHome from './Components/Dashboard/Dashboard-home'
import Report from "./Components/Pages/Report";
import AddMarks from "./Components/Pages/AddMarks";
import QuestionPaper from "./Components/Pages/QuestionPaper";
import Aboutus from "./Components/Pages/Aboutus";
import Privacy from "./Components/Pages/Privacy";
import Team from "./Components/Pages/Team";
import TermsCondition from "./Components/Pages/TermsCondition";
//Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import {loadUser} from "./actions/auth_action/auth";
import StudentsList from "./Components/Pages/Studenslist";
import Exams from "./Components/Pages/Exams";
import Class_Page from "./Components/Pages/Class_Page";

axios.defaults.baseURL = 'https://excelite.pythonanywhere.com/';

const alertOption = {
    timeout: 3000,
    position: "bottom center"
}

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOption}>
                    <BrowserRouter basename={'/'}>
                        <Fragment>
                            <Alerts/>
                            <Switch>
                                <PrivateRoute exact path={'/'} component={Home}/>
                                <Route exact path={'/Signup'} component={Signup}/>
                                <Route exact path={'/Login'} component={Login}/>
                                <Route exact path={'/About-us'} component={Aboutus}/>
                                <Route exact path={'/Privacy'} component={Privacy}/>
                                <Route exact path={'/Team'} component={Team}/>
                                <Route exact path={'/Terms-&-Conditions'} component={TermsCondition}/>


                                <PrivateRoute exact path={'/Classes'} component={Class_Page}/>
                                <PrivateRoute exact path={'/Subscription'} component={PageParent}/>
                                <PrivateRoute exact path={'/Dashboard'} component={DashboardHome}/>
                                <PrivateRoute exact path={'/Exams'} component={Exams}/>
                                <PrivateRoute exact path={'/Students-list'} component={StudentsList}/>
                                <PrivateRoute exact path={'/Reports'} component={Report}/>
                                <PrivateRoute exact path={'/Marks'} component={AddMarks}/>
                                <PrivateRoute exact path={'/Question-Paper'} component={QuestionPaper}/>


                                <Route component={Page_404}/>

                            </Switch>
                        </Fragment>
                    </BrowserRouter>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))