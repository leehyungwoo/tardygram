import React from 'react';

// import about from '../../images/about.jpg'
// import author from '../../images/author.jpg'
// import bg_1 from '../../images/bg_1.jpg'
// import bg_2 from '../../images/bg_2.jpg'
// import bg_3 from '../../images/bg_3.jpg'
import bg_4 from '../../images/bg_4.jpg'
// import bg_5 from '../../images/bg_5.jpg'
// import blog_1 from '../../images/blog-1.jpg'
// import blog_2 from '../../images/blog-2.jpg'
// import blog_3 from '../../images/blog-3.jpg'
// import blog_4 from '../../images/blog-4.jpg'
// import blog_5 from '../../images/blog-5.jpg'
// import blog_6 from '../../images/blog-6.jpg'
// import blog_7 from '../../images/blog-7.jpg'
// import blog_8 from '../../images/blog-8.jpg'
// import blog_9 from '../../images/blog-9.jpg'
// import category_1 from '../../images/category-1.jpg'
// import category_2 from '../../images/category-2.jpg'
// import image_1 from '../../images/image_1.jpg'
// import image_2 from '../../images/image_2.jpg'
// import image_3 from '../../images/image_3.jpg'
// import image_4 from '../../images/image_4.jpg'
// import image_5 from '../../images/image_5.jpg'
// import image_6 from '../../images/image_6.jpg'
// import loc from '../../images/loc.png'
// import person_1 from '../../images/person_1.jpg'
// import person_2 from '../../images/person_2.jpg'
// import person_3 from '../../images/person_3.jpg'
// import person_4 from '../../images/person_4.jpg'

import './Contact.css';





 
function Contact() {
  return (
    <>
     <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${bg_4})`}}>
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate pb-5 text-center">
                <h1 className="mb-3 bread">Contact Us</h1>
                <p className="breadcrumbs"><span className="mr-2">Home <i className="ion-ios-arrow-forward" /></span> <span>Contact us <i className="ion-ios-arrow-forward" /></span></p>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb contact-section">
          <div className="container">
            <div className="row block-9">
              <div className="col-md-6 order-md-last d-flex">
                <form action="#" className="bg-light p-5 contact-form">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
              </div>
              <div className="col-md-6 d-flex">
                <div id="map" className="bg-white" />
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section contact-section">
          <div className="container">
            <div className="row d-flex contact-info">
              <div className="col-md-3 d-flex">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-map-signs" />
                  </div>
                  <h3 className="mb-4">Address</h3>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-phone2" />
                  </div>
                  <h3 className="mb-4">Contact Number</h3>
                  <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <h3 className="mb-4">Email Address</h3>
                  <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="align-self-stretch box p-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-globe" />
                  </div>
                  <h3 className="mb-4">Website</h3>
                  <p><button href="#">yoursite.com</button></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-subscribe ftco-section bg-light">
          <div className="overlay">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8 text-wrap text-center heading-section ftco-animate">
                  <h2 className="mb-4"><span>Subcribe to our Newsletter</span></h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <div className="row d-flex justify-content-center mt-4 mb-4">
                    <div className="col-md-8">
                      <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                          <input type="text" className="form-control" placeholder="Enter email address" />
                          <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
  
}

export default Contact;
