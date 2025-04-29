import React from "react";
import Banner from "../../components/common/Banner";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contacts = () => {
  return (
    <div>
      <Navbars />
      <Banner
        heading="Contact Us"
        sub_heading="Quality. Integrity. Value."
        para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise."
      />
      <div className="container py-5">
        <div className="text-center">
          <h2 className="">Contact Us</h2>
          <p>
            We offer a diverse array of construction services, spanning <br />
            residential, commercial, and industrial projects.
          </p>
          <div className="row">
            <div className="col-md-3">
              <div class="card-body shadow p-4">
                <h3 class="mb-3">Call Us</h3>
                <div class="mb-3">
                  <div>
                    <a href="#">(888) 000-0000</a>
                  </div>
                  <div>
                    <a href="#">(222) 123-12345</a>
                  </div>
                </div>

                <h3 class="mt-4 mb-3">You can write us</h3>
                <div class="mb-3">
                  <div>
                    <a href="#">example@example.com</a>
                  </div>
                  <div>
                    <a href="#">info@example.com</a>
                  </div>
                </div>

                <h3 class="mt-4 mb-3">Address</h3>
                <div class="mb-3">
                  B-18X, Rajaji Puram
                  <br />
                  Lucknow, Uttar Pradesh, 226017
                  <br />
                  Phone: <a href="#">0522-400XXXX</a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div class="card-body shadow p-5">
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <label for="" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="form-control form-control-lg undefined"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <label for="" class="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        class="form-control form-control-lg undefined"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <label for="" class="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        class="form-control form-control-lg"
                        placeholder="Phone No."
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <label for="" class="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control form-control-lg"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="" class="form-label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="5"
                      id=""
                      class="form-control form-control-lg"
                    ></textarea>
                  </div>
                  <button class="btn btn-primary large mt-3">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
