import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";
import "./community.css";
import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

export function WhatInMind() {
  const [selectedFile, setSelectedFile] = useState(null);


  const [showPollOptions, setShowPollOptions] = useState(false); // State to control the visibility of poll options
  const [pollOptions, setPollOptions] = useState(['', '']); // Initial poll options with two empty strings

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePollOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleAddOption = () => {
    setPollOptions([...pollOptions, '']);
  };

  const handleCreatePoll = () => {
    setShowPollOptions(true);
  };


  const handleHideImgDiv = () => {
    const imgDiv = document.getElementById("imgDivv");
    if (imgDiv) {
      imgDiv.style.display = "none";
    }
  };



  return (
    <>

      <div className="input-group align-items-center p-2 gap-3 shadoww">
        <div className="input-group-prepend">
          <img
            src="https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?t=st=1709188543~exp=1709192143~hmac=9000097cb6ea3b2156c9e7b295c039a8bd079589fc5ad3eb27005731974b95d3&w=740"
            alt="Profile Image"
            className="prfile-img rounded-circle border"

          />
        </div>
        <input
          type="text"
          className="form-control rounded-pill my-auto"
          placeholder="Whats in Your Mind..."
          aria-label="Whats in Your Mind..."
          aria-describedby="commentBtn"
          onClick={handleShow}
        />

      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100 h5">Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?t=st=1709188543~exp=1709192143~hmac=9000097cb6ea3b2156c9e7b295c039a8bd079589fc5ad3eb27005731974b95d3&w=740"
              alt="Profile Image"
              className="prfile-img rounded-circle border"

            />
            <span className="ms-3 font-3">YasirAli</span>
            <Button variant="dark" className="ms-auto" onClick={handleCreatePoll}>Create Poll</Button>
          </div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="What's in your mind..."
              aria-label="What's in your mind..."
              aria-describedby="basic-addon2"
            />
          </InputGroup>


          {showPollOptions && pollOptions.map((option, index) => (
            <InputGroup className="mb-3" key={index}>
              <FormControl
                placeholder={`Poll Option ${index + 1}`}
                value={option}
                onChange={(e) => handlePollOptionChange(index, e.target.value)}
                aria-label={`Poll Option ${index + 1}`}
              />
              {index === pollOptions.length - 1 && (
                <Button variant="outline-secondary" onClick={handleAddOption}>+</Button>
              )}
            </InputGroup>
          ))}
          <div className="d-flex align-items-center mb-3">
            {/* <span className="mr-2">Upload Image:</span>
            
            <input type="file" /> */}

            <div className="bottom-0 w-100 p-2 mt-5 m-0 border" id="imgDivv">
            <div className="w-100 text-end" >
                  <button type="button" className="btn-close" aria-label="Close" onClick={handleHideImgDiv}></button>

                </div>

              <div className="d-flex flex-column justify-content-center align-items-center w-100 py-5 bg-custom">
               
                <label htmlFor="fileInput" className="p-1 px-2 text-danger" style={{ border: "1px dashed gray", cursor: "pointer" }}>
                  &#43;
                  <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
                </label>
                <h6 className="font-2 m-0 py-1">Add Photos</h6>
                <span className="font-5">or drag and drop</span>
              </div>
            </div>
          </div>
          <Button variant="danger" className="w-100">Post</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}


// 
export function RecentComment({ comment }) {
  return (
    <div className="card mt-3 border-0">
      <div className="card-body">
        <div className="d-flex gap-3 border-0">
          <div>
            <img
              src="https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?t=st=1709188543~exp=1709192143~hmac=9000097cb6ea3b2156c9e7b295c039a8bd079589fc5ad3eb27005731974b95d3&w=740"
              alt="Profile Image"
              className="prfile-img rounded-circle border"

            />

          </div>

          <div className="p-1">
            <div className="shadoww p-1 mb-1">
              <h6 className="card-title p-0 m-0 border-0 font-1">{comment.user}</h6>


              <p className="card-text p-0 m-0" style={{ fontSize: "12px", color: "#484848", opacity: "0.75" }}>
                {comment.comment}
              </p>
            </div>

            <p className="card-text p-0 m-0 gap-3" style={{ fontSize: "11px", color: "#7C7C7C" }}>
              <i className="far fa-heart me-"></i> Likes 10
              <i className="fa-solid fa-reply ms-3 me-1"></i>

              Replies 10
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};
// 

export function Post({ userCommunityPostData }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      {userCommunityPostData.map(index => (
        <>

          <div key={index.id} className="container mt-4 p-0">
            <div className="card p-3 w-100 shadoww">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?t=st=1709188543~exp=1709192143~hmac=9000097cb6ea3b2156c9e7b295c039a8bd079589fc5ad3eb27005731974b95d3&w=740"
                    alt="Profile Image"
                    className="prfile-img rounded-circle border"

                  />
                  <div className="px-3">
                    <h6 className="card-title p-0 m-0 border-0 font-1">{index.user}</h6>
                    <p className="card-text text-secondary p-1 px-0" style={{ fontSize: '11px' }}>
                      Fri 6, 09:45 AM
                    </p>
                  </div>
                </div>

                <div className="dropdown">
                  <button
                    className="btn btn-link"
                    type="button"
                    id="postMenu"
                    onClick={toggleDropdown}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen ? 'true' : 'false'}
                  >
                    <i class="fa-solid fa-ellipsis text-secondary"></i>
                  </button>
                  <div className={` dropdown-menu${dropdownOpen ? ' show' : ''}`} aria-labelledby="postMenu">
                    <a className="dropdown-item py-1 font-2 gap-4" style={{ fontWeight: "600" }} href="#">
                      <i className="far me-1 fa-heart"></i>
                      Save Post
                    </a>
                    <a className="dropdown-item py-1 font-2 gap-4" style={{ fontWeight: "600" }} href="#">
                      <i className="far me-1 fa-paper-plane"></i>
                      Share Post
                    </a>
                    <a className="dropdown-item py-1 font-2 gap-4" style={{ fontWeight: "600" }} href="#">
                      <i className="far me-1 fa-bell"></i> Turn on Notifications
                    </a>
                    <a className="dropdown-item py-1 font-2 gap-4" style={{ fontWeight: "600" }} href="#">
                      <i className="fas me-1 fa-eye-slash "></i> Hide Post
                    </a>
                    <a className="dropdown-item py-1 font-2 gap-4" style={{ fontWeight: "600" }} href="#">
                      <i className="fas me-1 fa-flag"></i> Report Post
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-body py-4">
                <p className="card-text post-text">
                  {index.post}
                </p>
              </div>
              <div className="d-flex gap-2 p-0 border-0 ">
                <button type="button" className="bg-transparent text-secondary font-2">
                  <i className="far fa-thumbs-up"></i> Likes {index.like_count}
                </button>
                <button type="button" className="bg-transparent text-secondary font-2">
                  <i class="fa-regular fa-message"></i> Comments {index.comments.length}
                </button>
              </div>
              <div className="bg-transparent border-0 py-3">
                <div className="d-flex w-100 gap-3" >
                  <div className="input-group-prepend">
                    <img
                      src="https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?t=st=1709188543~exp=1709192143~hmac=9000097cb6ea3b2156c9e7b295c039a8bd079589fc5ad3eb27005731974b95d3&w=740"
                      alt="Profile Image"
                      className="prfile-img rounded-circle border"

                    />
                  </div>
                  <div class="px-3 d-flex justify-content-between rounded-pill border w-100" style={{ height: "42px" }}>
                    <input

                      type="text"
                      className="bg-transparent form-control border-0 p-0 mb-5 "
                      placeholder="Write a comment..."
                      aria-label="Write a comment..."
                      aria-describedby="commentBtn"
                      style={{ outline: "none" }}
                    />
                    <div className="input-group-append d-flex">
                      <button className="btn p-0 " type="button" id="paperClipBtn">
                        <i class="fa-solid fa-paperclip text-secondary"></i>
                      </button>
                      <button className="btn p-0" type="button" id="commentBtn">
                        <i className="far fa-paper-plane text-secondary"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {index.comments.map(comment => (
                <RecentComment key={comment.id} comment={comment} />
              ))}

            </div>
          </div >
        </>
      ))}
    </>
  );
}


export default function CommunityMiddle() {

  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [userCommunityPostData, setUserCommunityPostData] = useState([]);
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };
    checkToken(); // Call the function to set the state when the component mounts
  }, []);
  useEffect(() => {

    if (isToken) { // Only make the request if there's a token
      const token = localStorage.getItem("loginToken");

      axios.get(axiosUrls.userCommunityPost, {
        headers: {
          'Authorization': 'Bearer ' + token // Include token in the Authorization header
        }
      })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setUserCommunityPostData(res.data);
            console.log(res.data)
          } else {
            console.error('Invalid response format. Expected an array.');
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [isToken]);



  return (
    <div className="col-lg-5 col-sm-5 col-md-5">

      <div className="d-flex align-items-center gap-3 py-2">
        <div className="input-group border rounded" style={{ height: "47px", minWidth: "300px" }}>
          <span className="input-group-text bg-transparent h-100 border-0"><i className="fas fa-search text-secondary"></i></span>
          <input type="text"
            className="form-control bg-transparent border-0"
            placeholder="Search" aria-label="Search"
            aria-describedby="basic-addon1" />
        </div>



        <h6 className="h-100 text-center p-0 m-0 w-100" style={{ fontSize: "13px", color: "#484848" }}>Filter by</h6>

        <select className="form-select" aria-label="Default select example" style={{ height: "47px", maxWidth: "156px", fontSize: "12px", color: "#484848" }}>
          <option selected >Most Liked</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>

      </div>

      < WhatInMind />
      <Post userCommunityPostData={userCommunityPostData} />

    </div>


  );
}
