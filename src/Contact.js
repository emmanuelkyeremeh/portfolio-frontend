import React, { useState } from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const HandleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const HandleLastName = (event) => {
    setLastName(event.target.value);
  };
  const HandleEmail = (event) => {
    setEmail(event.target.value);
  };
  const HandleSubject = (event) => {
    setSubject(event.target.value);
  };
  const HandleMessage = (event) => {
    setMessage(event.target.value);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const submit = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
    };
    const response = await axios.post(
      "https://portfolio-backend-1.herokuapp.com/submit/",
      submit
    );
    console.log(response.data);

    console.log("Form sent!!!!");

    window.location = "/";
  };

  return (
    <div className="container-fluid">
      <Helmet>
        <html lang="en" />
        <title>Contact | Emmanuel Kyeremeh, Web Designer and Developer</title>
        <meta
          name="Emmanuel Kyeremeh"
          content="I am Emmanuel Kyeremeh, a Website Designer and Developer from Accra, Ghana"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Helmet>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <h1 style={{ fontSize: "3rem", textAlign: "center" }}>Contact Me</h1>
        <p style={{ textAlign: "center" }}>
          Please fill the form below and I'll get back to you as soon as I can
        </p>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              style={{ paddingTop: "5%", backgroundColor: "#F5F5F5" }}
            >
              <form onSubmit={HandleSubmit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="validationCustom01">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      id="validationCustom01"
                      onChange={HandleFirstName}
                      class="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="validationCustom02">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      id="validationCustom02"
                      onChange={HandleLastName}
                      class="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputEmail4 validationCustom03">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={HandleEmail}
                    class="form-control"
                    id="inputEmail4 validationCustom03"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="validationCustom04">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    id="validationCustom04"
                    onChange={HandleSubject}
                    class="form-control"
                    placeholder="type a subject..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="validationCustom05">Message</label>
                  <input
                    class="form-control form-control-lg"
                    id="validationCustom05"
                    value={message}
                    onChange={HandleMessage}
                    type="text"
                    placeholder="Message"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  class="btn btn-primary btn-block"
                />
              </form>
            </div>
            <div className="col-lg-6">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Dome&t=&z=13&ie=UTF8& iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://www.embedgooglemap.net"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
