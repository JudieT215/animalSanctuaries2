import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "../components/Container";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import { Link } from "react-router-dom";

// Switch this to REGISTER and create a seperate LOGIN
class Signin extends Component {
  //Setting the initial values of this.state.email and this.state.password

  state = {
    email: '',
    password: ''
    // email: "",
    // firstname: "",
    // lastname: ""
  };


  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
      // We need to have an HTTP request to our path
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          console.log(res);
          this.props.history.push("/dashboard");
          // this.history.pushState(null, 'login');
        })
        .catch(err => console.log(err));
    };
  }
    // const data = new FormData(event.target);



    render() {
      return <div>
          <Container>
            <Row className="justify-content-start">
              <Col size="md-12" className="center ">
                {/* FORM HAS ACTION TO SIGNIN route*/}
                <div className="card w-50 h-50">
                  <div className="card-header">
                    Please Login or Return to the homepage
                  </div>
                  <div className="form-group">
                    <form className="card-body">
                      <span>
                        <p> Email Address:</p>
                        <p className="form-group">
                          <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </p>
                        {/* <label >User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}

                  /> */}
                        <p>Password:</p>
                        <p>
                          <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                        </p>
                        <p />
                      <Link className="btn btn-primary" to="/dashboard" onClick={this.handleFormSubmit}>
                          Login
                        </Link>
                        &nbsp;
                        <Link className="btn" to="/">
                          Cancel
                        </Link>
                      </span>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>;
    }
  };


  export default withRouter(Signin);
