import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import ProfileIcon from "../../Assests/ProfileLogin.svg";
import "./UserProfile.css";
export default function UserProfile() {
  // Setting the UserProfileData coming from its API
  const [userProfileDataApi, setUserProfileDataApi] = useState([]);

  // Setting States to get all Input Fileds Values
  const [userBio, setUserBio] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const handleUserBio = (e) => {
    setUserBio(e.target.value);
  }
  const handleUserAddress = (e) => {
    setUserAddress(e.target.value)

  }
  // Function for Getting and Displaying Image
  const [profileImage, setProfileImage] = useState(ProfileIcon);
  const handleFileSelect = (event) => {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImage(event.target.result);
    };

    reader.readAsDataURL(file);
  }

  // Function for Getting and Displaying Image


  const [isToken, setIsToken] = useState(false); // Initialize to false
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };
    checkToken(); // Call the function to set the state when the component mounts
  }, []);

  // Post User Profile Integration
  const handleApiUserProfile = () => {
    if (isToken) { // Only make the request if there's a token
      const token = localStorage.getItem("loginToken");
      // Create a new FormData object
      const formData = new FormData();
      // Append other fields to the FormData
      formData.append('bio', userBio);
      formData.append('address', userAddress);
      // Append the image file to the FormData
      const fileInput = document.getElementById('fileInput');
      formData.append('profile_image', fileInput.files[0]);
      // Update button text to "Updating"
      const updateAccountBtn = document.getElementById('updateAccountBtn');
      updateAccountBtn.textContent = 'Updating...';
      axios.post(
        axiosUrls.userProfile,
        formData, // Send FormData instead of a regular object
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'multipart/form-data', // Set Content-Type to multipart/form-data
          }
        }
      )
        .then((res) => {
          // Change button text to "Updated" after 3 seconds
          setTimeout(() => {
            updateAccountBtn.textContent = 'Updated';
            // Change button text back to "Update Account" after 2 seconds
            setTimeout(() => {
              updateAccountBtn.textContent = 'Update Account';
            }, 2000);
          }, 3000);
        })
        .catch(err => {
          console.log(err);
          // Reset button text to "Update Account" in case of error
          updateAccountBtn.textContent = 'Update Account';
        });
    }
  };


  // GET USER PROFILE API INTEGRATION

  useEffect(() => {

    const userName = document.getElementById('userName');
    const userFullName = document.getElementById('userFullName');
    const userEmailField = document.getElementById('userEmailField');
    const userBioField = document.getElementById('userBioField');
    const userAddressField = document.getElementById('userAddressField');
    const userProfileDiv = document.getElementById('userProfileDiv');

    if (isToken) { // Only make the request if there's a token
      const token = localStorage.getItem("loginToken");
      axios.get(axiosUrls.userProfile, {
        headers: {
          'Authorization': 'Bearer ' + token // Include token in the Authorization header
        }
      })
        .then((res) => {
          if (Array.isArray(res.data)) {
            userName.value = res.data[1].user.username;
            userFullName.value = res.data[1].user.name;
            userEmailField.value = res.data[1].user.email;
            userBioField.value = res.data[1].bio;
            userAddressField.value = res.data[1].address;
            userProfileDiv.src = res.data[1].profile_image;
          } else {
            console.error('Invalid response format. Expected an array.');
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [isToken]);

  // GET USER PROFILE API INTEGRATION

  return (
    <div className="UserProfile">
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h3 className="opacity-8" style={{ marginTop: "40px" }}>
          My Profile
        </h3>
        <img  alt=".." className="ProfileImage rounded-circle" id="userProfileDiv" />
        <br></br>
        <label htmlFor="fileInput" className="p-1 px-2 text-danger" style={{ cursor: "pointer" }}>
          <div
            className="py-2 updateImg font-2 semibold"
            style={{ width: "165px" }}
          >
            <input type="file" id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />

            Update Profile Image
          </div>
        </label>
      </div>
      <div className="formOuterDiv row">
        <div className=" col-md-6 formFields">
          <form className="contact-form" style={{ marginTop: "30px" }}>
            <div className="form-group">
              <label className="control-label " htmlFor="fname">
                Full Name:
              </label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mani"
                  name="fname"
                  id="userFullName"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="lname">
                Username:
              </label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="EMani0709"
                  name="lname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="email">
                Bio:
              </label>
              <div className="col-sm-11">
                <textarea
                  onChange={handleUserBio}
                  value={userBio}
                  className="form-control"
                  rows="5"
                  id="userBioField"
                  style={{ height: "90px" }}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className=" col-md-6 formFields">
          <form className="contact-form" style={{ marginTop: "30px" }}>
            <div className="form-group">
              <label className="control-label " htmlFor="fname">
                Email:
              </label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="userEmailField"                  
                  placeholder="mani@gmail.com"
                  name="fname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="lname">
                User type:
              </label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Customer"
                  name="lname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="email">
                Address:
              </label>
              <div className="col-sm-11">
                <textarea
                  onChange={handleUserAddress}
                  value={userAddress}
                  className="form-control"
                  rows="4"
                  id="userAddressField"
                  style={{ height: "90px" }}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h5 className="opacity-8" style={{ marginTop: "40px" }}>
          Update Password
        </h5>
      </div>

      <div className="row formOuterDiv">
        <div className="form-group formFields">
          <label className="control-label " htmlFor="fname">
            Old Password:
          </label>
          <div className="col-sm-11">
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
            />
          </div>
        </div>
        <div className="form-group formFields">
          <label className="control-label " htmlFor="fname">
            New Password:
          </label>
          <div className="col-sm-11">
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
            />
          </div>
        </div>
        <div className="form-group formFields">
          <label className="control-label " htmlFor="fname">
            Confirm Password:
          </label>
          <div className="col-sm-11">
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
            />
          </div>
        </div>
      </div>
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <button
          id="updateAccountBtn"
          onClick={handleApiUserProfile}
          className=" updateImg font-2 semibold text-white"
          style={{ width: "135px", backgroundColor: "#E61616" }}
        >
          Update Account
        </button>
      </div>
    </div>
  );
}
