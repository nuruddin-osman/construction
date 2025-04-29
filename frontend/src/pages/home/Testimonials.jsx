import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineStar } from "react-icons/md";
import ChooseIcon_1 from "../../../public/assets/images/pexels-pixabay-220453.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

const Testimonials = () => {
  return (
    <div className="testimonial py-5">
      <div className="text-center">
        <h4 className="section_sub_title">Testimonials</h4>
        <h2 className="">What people are saying about us</h2>
        <p>
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </p>
      </div>
      <div className="container pt-5">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // when window width is >= 576px
              576: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // when window width is >= 992px
              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <Card className="card_head shadow">
                <div className="card_icon">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <Card.Body className="card_body">
                  <Card.Title className="pb-3">
                    Cutting-Edge Solutions
                  </Card.Title>
                  <div className="service_content">
                    <Card.Text className="mb-2">
                      Small actions create big impacts. It all begins and ends
                      with each employee committing to safer work practices
                      daily, ensuring they return home safely.
                    </Card.Text>
                  </div>
                </Card.Body>
                <hr className="card_hr" />
                <div className="card_footer">
                  <div className="card_footer_icon">
                    <img src={ChooseIcon_1} alt="ChooseIcon woner" />
                  </div>
                  <div className="card_footer_name">
                    <h4>John Doe</h4>
                    <h6>CEO, XYZ Company</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="card_head shadow">
                <div className="card_icon">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <Card.Body className="card_body">
                  <Card.Title className="pb-3">
                    Cutting-Edge Solutions
                  </Card.Title>
                  <div className="service_content">
                    <Card.Text className="mb-2">
                      Small actions create big impacts. It all begins and ends
                      with each employee committing to safer work practices
                      daily, ensuring they return home safely.
                    </Card.Text>
                  </div>
                </Card.Body>
                <hr className="card_hr" />
                <div className="card_footer">
                  <div className="card_footer_icon">
                    <img src={ChooseIcon_1} alt="ChooseIcon woner" />
                  </div>
                  <div className="card_footer_name">
                    <h4>John Doe</h4>
                    <h6>CEO, XYZ Company</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="card_head shadow">
                <div className="card_icon">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <Card.Body className="card_body">
                  <Card.Title className="pb-3">
                    Cutting-Edge Solutions
                  </Card.Title>
                  <div className="service_content">
                    <Card.Text className="mb-2">
                      Small actions create big impacts. It all begins and ends
                      with each employee committing to safer work practices
                      daily, ensuring they return home safely.
                    </Card.Text>
                  </div>
                </Card.Body>
                <hr className="card_hr" />
                <div className="card_footer">
                  <div className="card_footer_icon">
                    <img src={ChooseIcon_1} alt="ChooseIcon woner" />
                  </div>
                  <div className="card_footer_name">
                    <h4>John Doe</h4>
                    <h6>CEO, XYZ Company</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="card_head shadow">
                <div className="card_icon">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <Card.Body className="card_body">
                  <Card.Title className="pb-3">
                    Cutting-Edge Solutions
                  </Card.Title>
                  <div className="service_content">
                    <Card.Text className="mb-2">
                      Small actions create big impacts. It all begins and ends
                      with each employee committing to safer work practices
                      daily, ensuring they return home safely.
                    </Card.Text>
                  </div>
                </Card.Body>
                <hr className="card_hr" />
                <div className="card_footer">
                  <div className="card_footer_icon">
                    <img src={ChooseIcon_1} alt="ChooseIcon woner" />
                  </div>
                  <div className="card_footer_name">
                    <h4>John Doe</h4>
                    <h6>CEO, XYZ Company</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="card_head shadow">
                <div className="card_icon">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <Card.Body className="card_body">
                  <Card.Title className="pb-3">
                    Cutting-Edge Solutions
                  </Card.Title>
                  <div className="service_content">
                    <Card.Text className="mb-2">
                      Small actions create big impacts. It all begins and ends
                      with each employee committing to safer work practices
                      daily, ensuring they return home safely.
                    </Card.Text>
                  </div>
                </Card.Body>
                <hr className="card_hr" />
                <div className="card_footer">
                  <div className="card_footer_icon">
                    <img src={ChooseIcon_1} alt="ChooseIcon woner" />
                  </div>
                  <div className="card_footer_name">
                    <h4>John Doe</h4>
                    <h6>CEO, XYZ Company</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="card_head shadow">
                <div className="card_icon">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <Card.Body className="card_body">
                  <Card.Title className="pb-3">
                    Cutting-Edge Solutions
                  </Card.Title>
                  <div className="service_content">
                    <Card.Text className="mb-2">
                      Small actions create big impacts. It all begins and ends
                      with each employee committing to safer work practices
                      daily, ensuring they return home safely.
                    </Card.Text>
                  </div>
                </Card.Body>
                <hr className="card_hr" />
                <div className="card_footer">
                  <div className="card_footer_icon">
                    <img src={ChooseIcon_1} alt="ChooseIcon woner" />
                  </div>
                  <div className="card_footer_name">
                    <h4>John Doe</h4>
                    <h6>CEO, XYZ Company</h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
