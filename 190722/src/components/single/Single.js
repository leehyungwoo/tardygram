import React from 'react';

import about from '../../images/about.jpg'
import author from '../../images/author.jpg'
import bg_1 from '../../images/bg_1.jpg'
import bg_2 from '../../images/bg_2.jpg'
import bg_3 from '../../images/bg_3.jpg'
import bg_4 from '../../images/bg_4.jpg'
import bg_5 from '../../images/bg_5.jpg'
import blog_1 from '../../images/blog-1.jpg'
import blog_2 from '../../images/blog-2.jpg'
import blog_3 from '../../images/blog-3.jpg'
import blog_4 from '../../images/blog-4.jpg'
import blog_5 from '../../images/blog-5.jpg'
import blog_6 from '../../images/blog-6.jpg'
import blog_7 from '../../images/blog-7.jpg'
import blog_8 from '../../images/blog-8.jpg'
import blog_9 from '../../images/blog-9.jpg'
import category_1 from '../../images/category-1.jpg'
import category_2 from '../../images/category-2.jpg'
import image_1 from '../../images/image_1.jpg'
import image_2 from '../../images/image_2.jpg'
import image_3 from '../../images/image_3.jpg'
import image_4 from '../../images/image_4.jpg'
import image_5 from '../../images/image_5.jpg'
import image_6 from '../../images/image_6.jpg'
import loc from '../../images/loc.png'
import person_1 from '../../images/person_1.jpg'
import person_2 from '../../images/person_2.jpg'
import person_3 from '../../images/person_3.jpg'
import person_4 from '../../images/person_4.jpg'

import './Single.css';

function Single() {

  return (
    <>
      <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${bg_4})`}}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <h1 className="mb-3 bread">Article Single</h1>
              <p className="breadcrumbs"><span className="mr-2">>Home <i className="ion-ios-arrow-forward" /></span> <span>Article Single<i className="ion-ios-arrow-forward" /></span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-last ftco-animate">
              <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
              <p>
                <img src={image_6}  alt="food" className="img-fluid" />
              </p>
              <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
              <p>
                <img src={image_4} alt="food" className="img-fluid" />
              </p>
              <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
              <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
              <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
              <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a className="tag-cloud-link">Life</a>
                  <a className="tag-cloud-link">Sport</a>
                  <a className="tag-cloud-link">Tech</a>
                  <a className="tag-cloud-link">Travel</a>
                </div>
              </div>
              <div className="about-author d-flex p-4 bg-light">
                <div className="bio mr-5">
                  <img src={person_1} alt="people" className="img-fluid mb-4" />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>
              <div className="pt-5 mt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src={person_1} alt="people" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">October 03, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src={person_1} alt="people" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">October 03, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img src={person_1} alt="people" />
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">October 03, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img src={person_1} alt="people" />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">October 03, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src={person_1} alt="people" />
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta">October 03, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="#" className="reply">Reply</a></p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src={person_1} alt="people" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">October 03, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>
                </ul>
                {/* END comment-list */}
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea  id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <input type="submit" defaultValue="Post Comment" className="btn py-3 px-4 btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
            </div> {/* .col-md-8 */}
            <div className="col-lg-4 sidebar pr-lg-5 ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search" />
                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <ul className="categories">
                  <h3 className="heading mb-4">Categories</h3>
                  <li><a href="#">Travel <span>(12)</span></a></li>
                  <li><a href="#">Tour <span>(22)</span></a></li>
                  <li><a href="#">Destination <span>(37)</span></a></li>
                  <li><a href="#">Drinks <span>(42)</span></a></li>
                  <li><a href="#">Foods <span>(14)</span></a></li>
                  <li><a href="#">Travel <span>(140)</span></a></li>
                </ul>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading mb-4">Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{backgroundImage: `url(${image_1})`}} />
                  <div className="text">
                    <h3><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> February 12, 2019</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{backgroundImage: `url(${image_2})`}} />
                  <div className="text">
                    <h3><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> February 12, 2019</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{backgroundImage: `url(${image_3})`}} />
                  <div className="text">
                    <h3><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> February 12, 2019</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading mb-4">Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">dish</a>
                  <a href="#" className="tag-cloud-link">menu</a>
                  <a href="#" className="tag-cloud-link">food</a>
                  <a href="#" className="tag-cloud-link">sweet</a>
                  <a href="#" className="tag-cloud-link">tasty</a>
                  <a href="#" className="tag-cloud-link">delicious</a>
                  <a href="#" className="tag-cloud-link">desserts</a>
                  <a href="#" className="tag-cloud-link">drinks</a>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading mb-4">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>
          </div>
        </div>
      </section> {/* .section */}
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

export default Single;
