import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h1 className="opacity-8">Send us a Message</h1>
      </div>
      <div className="formOuter">
        <div className=" formSide">
          <form className="contact-form" style={{ marginTop: "30px" }}>
            <div className="form-group">
              <label className="control-label " htmlFor="fname">
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter First Name"
                  name="fname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="lname">
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter Last Name"
                  name="lname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="email">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label " htmlFor="comment">
                Comment:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div
                className="col-sm-offset-2 col-sm-10"
                style={{ marginTop: "20px" }}
              >
                <button type="submit" className="btn btn-outline-contact">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 mapSide">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
