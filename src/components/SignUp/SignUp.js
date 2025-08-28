import React, { useState } from "react";
// import axios from "axios";
import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import { Link } from "react-router-dom";
import "./signup.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SignUp(props) {

  // Sign In API Integration
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userNameLogin, setUserNameLogin] = useState("");
  const [errors,setErrors] = useState({})

  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value)
  }
  const handleUserLogin = (e) => {
    setUserNameLogin(e.target.value)
  }
  const handleApiLogin = () => {
    console.log(userNameLogin,'===============')
    axios.post(axiosUrls.userLogin, {
      username: userNameLogin,
      password: passwordLogin,
    })
      .then(result => {
        console.log(result,'=================111111111')
        localStorage.setItem("loginToken", result.data.data.token)
      })
      .catch(error => {
        setErrors(error.response.data.message)
        console.log(error)
      })
  }
  // SignUp API intergration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleUser = (e) => {
    setUserName(e.target.value)
  }
  const handleApi = () => {
    console.log(axios)
    axios.post(axiosUrls.userRegister, {
      name: name,
      email: email,
      username: userName,
      password: password,
      password2: password
    })

      .then(result => {
        console.log(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your registration logic here
  //   props.handleClose(); // Close the modal after registration
  // };

  // const showhandle = props.handleShow();
  // Form Switching
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Button variant="primary" onClick={props.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <div className="d-flex w-100 gap-0">
          <Button className={`w-100 m-0 p-3 border-0 rounded-0 ${isLogin ? 'active' : ''}`} style={{ backgroundColor: "gray" }} onClick={toggleForm}>
            SIGN IN
          </Button>
          <Button className={`w-100 border-0 rounded-0 ${isLogin ? '' : 'active'}`} style={{ backgroundColor: "black" }} onClick={toggleForm}>
            SIGN UP
          </Button>
        </div>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#E61616", fontWeight :"bold", fontSize:"33px" }}> Puls 2X</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <Form >
              <Form.Group controlId="formUserNameLogin">
                <Form.Control onChange={handleUserLogin} value={userNameLogin} type="text" className={"signUpLoginField form-control " +(errors.username?'is-invalid':'')} placeholder="User Name" />
                
              </Form.Group>

              <Form.Group controlId="formBasicPasswordLogin">
                <Form.Control onChange={handlePasswordLogin} value={passwordLogin} type="text" className={"signUpLoginField form-control " +(errors.password?'is-invalid':'')} placeholder="Password" />
              </Form.Group>
              <div className="w-100 text-center loginSignUpBtn">
                <Button className=" border-0" onClick={handleApiLogin} style={{ backgroundColor: "#E61616" }} type="button">
                  SIGN IN
                </Button>
              </div>
            </Form>
          ) : (
            <Form >
              <Form.Group controlId="formBasicName">
                <Form.Control onChange={handleName} value={name} type="text" className="signUpLoginField" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control onChange={handleEmail} value={email} type="text" className="signUpLoginField" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formUserName">
                <Form.Control onChange={handleUser} value={userName} type="text" className="signUpLoginField" placeholder="User Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control onChange={handlePassword} value={password} type="text" className="signUpLoginField" placeholder="Password" />
              </Form.Group>
              <div className="w-100 text-center loginSignUpBtn">
                <Button className=" border-0" onClick={handleApi} style={{ backgroundColor: "#E61616" }} type="submit">
                  SIGN UP
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );

}

export default SignUp;