import React from 'react'
import Banner from '../../components/common/Banner'
import Navbars from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Contacts = () => {
  return (
    <div>
        <Navbars/>
        <Banner heading="Contact Us" sub_heading="Quality. Integrity. Value." para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise." />
        <div className="container py-5">
            <div className="text-center">
                <h2 className="">Contact Us</h2>
                <p>
                We offer a diverse array of construction services, spanning <br/>
                residential, commercial, and industrial projects.
                </p>
                <div className="row">
                    <div className="col-md-4">
                    <div class="card-body p-4">
                        <h3 class="mb-3">Call Us</h3>
                        <div class="mb-3">
                            <div><a href="tel:8880000000">(888) 000-0000</a></div>
                            <div><a href="tel:22212312345">(222) 123-12345</a></div>
                        </div>
                        
                        <h3 class="mt-4 mb-3">You can write us</h3>
                        <div class="mb-3">
                            <div><a href="mailto:example@example.com">example@example.com</a></div>
                            <div><a href="mailto:info@example.com">info@example.com</a></div>
                        </div>
                        
                        <h3 class="mt-4 mb-3">Address</h3>
                        <div class="mb-3">
                            B-18X, Rajaji Puram<br/>
                            Lucknow, Uttar Pradesh, 226017<br/>
                            Phone: <a href="tel:0522400XXXX">0522-400XXXX</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contacts