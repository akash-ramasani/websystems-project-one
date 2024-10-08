"use client";

import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Get in Touch with Our Gaming Studio</h1>
            <p class="col-lg-10 fs-4">Have any questions or feedback about our games? We would love to hear from you! Use the form below to contact us, and we'll get back to you as soon as possible.</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingName" placeholder="Your Name" />
                <label htmlFor="floatingName">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a message here" id="floatingMessage" style={{ height: "150px" }}></textarea>
                <label htmlFor="floatingMessage">Your Message</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
              <hr class="my-4" />
              <small class="text-body-secondary">We value your privacy. Your contact details will only be used to respond to your inquiry.</small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}