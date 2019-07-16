import React from 'react';
// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import about from '../../images/about.jpg'
import author from '../../images/author.jpg'
import bg_1 from '../../images/bg_1.jpg'
import bg_2 from '../../images/bg_2.jpg'
import bg_3 from '../../images/bg_3.jpg'
// import bg_4 from '../../images/bg_4.jpg'
// import bg_5 from '../../images/bg_5.jpg'
import blog_1 from '../../images/blog-1.jpg'
import blog_2 from '../../images/blog-2.jpg'
import blog_3 from '../../images/blog-3.jpg'
// import blog_4 from '../../images/blog-4.jpg'
// import blog_5 from '../../images/blog-5.jpg'
// import blog_6 from '../../images/blog-6.jpg'
// import blog_7 from '../../images/blog-7.jpg'
// import blog_8 from '../../images/blog-8.jpg'
// import blog_9 from '../../images/blog-9.jpg'
// import category_1 from '../../images/category-1.jpg'
// import category_2 from '../../images/category-2.jpg'
import image_1 from '../../images/image_1.jpg'
import image_2 from '../../images/image_2.jpg'
import image_3 from '../../images/image_3.jpg'
import image_4 from '../../images/image_4.jpg'
import image_5 from '../../images/image_5.jpg'
// import image_6 from '../../images/image_6.jpg'
// import loc from '../../images/loc.png'
// import person_1 from '../../images/person_1.jpg'
// import person_2 from '../../images/person_2.jpg'
// import person_3 from '../../images/person_3.jpg'
// import person_4 from '../../images/person_4.jpg'
import './Home.css';


function Home() {

  return (
    <>
       <section className="home-slider owl-carousel">
          <div className="slider-item">
            <div className="container">
              <div className="row d-flex slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                <div className="img" style={{backgroundImage: `url(${bg_1})`}} />
                <div className="text d-flex align-items-center ftco-animate">
                  <div className="text-2 pb-lg-5 mb-lg-4 px-4 px-md-5">
                    <h3 className="subheading mb-3">Featured Posts</h3>
                    <h1 className="mb-5">Love the Delicious &amp; Tasty Foods</h1>
                    <p className="mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                    <p><button className="btn btn-black px-3 px-md-4 py-3">Read More <span className="icon-arrow_forward ml-lg-4" /></button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="container">
              <div className="row d-flex slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                <div className="img" style={{backgroundImage: `url(${bg_2})`}} />
                <div className="text d-flex align-items-center ftco-animate">
                  <div className="text-2 pb-lg-5 mb-lg-4 px-4 px-md-5">
                    <h3 className="subheading mb-3">Featured Posts</h3>
                    <h1 className="mb-5">I am A Blogger &amp; I Love Foods</h1>
                    <p className="mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                    <p><button className="btn btn-black px-3 px-md-4 py-3">Read More <span className="icon-arrow_forward ml-lg-4" /></button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 heading-section ftco-animate">
                <h2 className="mb-4"><span>Recent Stories</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 order-md-last col-lg-6 ftco-animate">
                <div className="blog-entry">
                  <div className="img img-big d-flex align-items-end" style={{backgroundImage: `url(${image_2})`}}>
                    <div className="overlay" />
                    <div className="text">
                      <span className="subheading">Food</span>
                      <h3><a href="single.html">Tasty &amp; Delicious Foods</a></h3>
                      <p className="mb-0"><a href="single.html" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img d-flex align-items-end" style={{backgroundImage: `url(${image_1})`}}>
                        <div className="overlay" />
                      </a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><a href="single.html">Tasty &amp; Delicious Foods</a></h3>
                        <p className="mb-0"><a href="single.html" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img d-flex align-items-end" style={{backgroundImage: `url(${image_3})`}}>
                        <div className="overlay" />
                      </a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><a href="single.html">Tasty &amp; Delicious Foods from Scotland</a></h3>
                        <p className="mb-0"><a href="single.html" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img d-flex align-items-end" style={{backgroundImage: `url(${image_4})`}}>
                        <div className="overlay" />
                      </a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><a href="single.html">Tasty &amp; Delicious Foods</a></h3>
                        <p className="mb-0"><a href="single.html" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img d-flex align-items-end" style={{backgroundImage: `url(${image_5})`}}>
                        <div className="overlay" />
                      </a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><a href="single.html">Tasty &amp; Delicious Foods</a></h3>
                        <p className="mb-0"><a href="single.html" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h2 className="mb-4"><span>Featured Posts</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img-2"><img src={blog_1} className="img-fluid" alt="Colorlib Template" /></a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><button>Tasty &amp; Delicious Foods</button></h3>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img-2"><img src={blog_2} className="img-fluid" alt="Colorlib Template" /></a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><button>Tasty &amp; Delicious Foods</button></h3>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ftco-animate">
                    <div className="blog-entry">
                      <a href="single.html" className="img-2"><img src={blog_3} className="img-fluid" alt="Colorlib Template" /></a>
                      <div className="text pt-3">
                        <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                        <h3><button>Tasty &amp; Delicious Foods</button></h3>
                        <p className="mb-0"><a href="single.html" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar-wrap">
                  <div className="sidebar-box p-4 about text-center ftco-animate">
                    <h2 className="heading mb-4">About Me</h2>
                    <img src={author} className="img-fluid" alt="Colorlib Template" />
                    <div className="text pt-4">
                      <p>Hi! My name is <strong>Cathy Deon</strong>, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                  <div className="sidebar-box p-4 ftco-animate">
                    <form action="#" className="search-form">
                      <div className="form-group">
                        <span className="icon icon-search" />
                        <input type="text" className="form-control" placeholder="Search" />
                      </div>
                    </form>
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
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h2 className="mb-4"><span>Holiday Seasons Recipes</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6 ftco-animate">
                    <div className="blog-entry">
                      <div className="img img-big img-big-2 d-flex align-items-end" style={{backgroundImage: `url(${image_1})`}}>
                        <div className="overlay" />
                        <div className="text">
                          <span className="subheading">Food</span>
                          <h3><button>ham sandwich on white surface</button></h3>
                          <p className="mb-0"><button className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 ftco-animate">
                    <div className="blog-entry">
                      <div className="img img-big img-big-2 d-flex align-items-end" style={{backgroundImage: `url(${image_3})`}}>
                        <div className="overlay" />
                        <div className="text">
                          <span className="subheading">Lifestyle</span>
                          <h3><button>White and red ceramic plate</button></h3>
                          <p className="mb-0"><button className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <h2 className="mb-4">About Stories</h2>
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
      
    </>
  );
  
}

export default Home;
