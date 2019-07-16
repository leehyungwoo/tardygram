import React from 'react';



import './Host.css';

function Host() {

  return (<div>
            <div className="container">
              <h2>Basic Progress Bar</h2>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{
                  background:"#fd5f00",
                  width:"70%"}}>
                  <span className="sr-only">70% Complete</span>
                </div>
              </div>
            </div>

          <section className="ftco-subscribe ftco-section bg-light">
            <div className="overlay">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-8 text-wrap text-center heading-section ftco-animate">
                    <h2 className="mb-4"><span>What will your group's me be?</span></h2>
                    <p></p>
                    <div className="row d-flex justify-content-center mt-4 mb-4">
                      <div className="col-md-8">
                        <form action="#" className="subscribe-form">
                          <div className="form-group d-flex">
                            <input type="text" className="form-control" placeholder="Group title" />
                            <input type="button"   className="submit px-3" value="next" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
       
      </div>
  );
  
}

export default Host;
