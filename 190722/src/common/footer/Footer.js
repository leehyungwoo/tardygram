import React from 'react';

// import about from '../../images/about.jpg'
// import author from '../../images/author.jpg'
// import bg_1 from '../../images/bg_1.jpg'
// import bg_2 from '../../images/bg_2.jpg'
// import bg_3 from '../../images/bg_3.jpg'
// import bg_4 from '../../images/bg_4.jpg'
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


import './Footer.css';

function Footer() {

  return (
    <footer className="ftco-footer ftco-footer-2 ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Stories</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><button><span className="icon-twitter" /></button></li>
              <li className="ftco-animate"><button><span className="icon-facebook" /></button></li>
              <li className="ftco-animate"><button><span className="icon-instagram" /></button></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Information</h2>
            <ul className="list-unstyled customize">
              <li><button className="py-2 d-block">Terms of Uses</button></li>
              <li><button className="py-2 d-block">About Stories</button></li>
              <li><button className="py-2 d-block">Privacy Policy</button></li>
              <li><button className="py-2 d-block">Accessibility Help</button></li>
              <li><button className="py-2 d-block">Advertise with us</button></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Categories</h2>
            <ul className="list-unstyled customize">
              <li><button className="py-2 d-block">Food</button></li>
              <li><button className="py-2 d-block">Restaurant</button></li>
              <li><button className="py-2 d-block">Dessert</button></li>
              <li><button className="py-2 d-block">Lifestyle</button></li>
              <li><button className="py-2 d-block">Recipes</button></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><button><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></button></li>
                <li><button><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          {/* <p>
            Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p> */}
        </div>
      </div>
    </div>
  </footer>
  );
  
}

export default Footer;
