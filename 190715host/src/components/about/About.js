import React from 'react';
import bg_3 from '../../images/bg_3.jpg'
import bg_4 from '../../images/bg_4.jpg'
import about from '../../images/about.jpg'
// import author from '../../images/author.jpg'
// import bg_1 from '../../images/bg_1.jpg'
// import bg_2 from '../../images/bg_2.jpg'

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


import './About.css';


 
function About() {
  return (
    <>
       <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${bg_4})`}}>
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate pb-5 text-center">
                <h1 className="mb-3 bread">About Us</h1>
                <p className="breadcrumbs"><span className="mr-2">Home <i className="ion-ios-arrow-forward" /></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img" id="section-counter">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 d-flex">
                <div className="img d-flex align-self-stretch" style={{backgroundImage: `url(${about})`}} />
              </div>
              <div className="col-md-6 pl-md-5 py-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h2 className="mb-4"><span>About Stories</span></h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={10}>0</strong>
                        <span>Years of Experienced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={200}>0</strong>
                        <span>Foods</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={300}>0</strong>
                        <span>Lifestyle</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={40}>0</strong>
                        <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-section-about ftco-no-pb bg-darken">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-9 order-md-last img py-5" style={{backgroundImage: `url(${bg_3})`}} />
              <div className="col-sm-6 col-md-6 col-lg-3 py-4 text d-flex align-items-center ftco-animate">
                <div className="text-2 py-5 px-4">
                  <p className="mb-5"><a href="https://vimeo.com/45830194" className="btn-custom popup-vimeo">Watch Video <span className="ion-ios-play ml-4" /></a></p>
                  <h1 className="mb-5">Roger <br /> Bosch</h1>
                  <p className="mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <span className="signature">Roger.Bosch</span>
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

export default About;
