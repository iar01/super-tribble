import React, {Fragment, Component} from "react";
import {Container, Navbar, Button, Nav, NavDropdown} from "react-bootstrap";
import logo from '../media/Logo/logo.svg'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {logout} from "../actions/auth_action/auth";
import {getSubscription} from "../actions/Subscription/Subscription_Action";

export class NavbarComponent extends Component {
    static  propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        getSubscription: PropTypes.func.isRequired
    }

    async componentDidMount() {
        await getSubscription()
    }

    render() {
        return (
            <Fragment>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Excelite Ltd.
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <span>{localStorage.getItem('Subject')}</span>
                            </Navbar.Text>
                        </Navbar.Collapse>
                        {localStorage.getItem('token') !== null ? <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <span>Welcome! {localStorage.getItem('Name')}</span>
                                <span style={{marginLeft: '5px'}}><Button style={{padding: '5px'}}
                                                                          variant="outline-warning"
                                                                          onClick={(this.props.logout)}>Logout</Button></span>
                            </Navbar.Text>
                        </Navbar.Collapse> : <Button variant="outline-info" href='/login'>Login</Button>}

                    </Container>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/Subscription">Subscription</Nav.Link>
                                <Nav.Link href="/Students-list">Students List</Nav.Link>
                                <Nav.Link href="/Reports">Reports</Nav.Link>
                                <Nav.Link href="/Marks">Marks</Nav.Link>
                                <Nav.Link href="/Question-Paper">Question Papers</Nav.Link>

                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/About-us">About us</NavDropdown.Item>
                                    <NavDropdown.Item href="/Privacy">Privacy</NavDropdown.Item>
                                    <NavDropdown.Item href="/Team">Team</NavDropdown.Item>
                                    <NavDropdown.Item href="/Terms-&-Conditions">Terms & Conditions</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {logout, getSubscription})(NavbarComponent)