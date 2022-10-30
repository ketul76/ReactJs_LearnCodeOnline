import React from "react";

const About = () => (
  <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p class="lead">JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language developed by Sun Microsystems.

                    </p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server. This means JavaScript functions can run after a webpage has loaded without communicating with the server.</p></div>
                </div>
               
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://javascript.info/">
                        <i className="fas fa-download me-2"></i>
                        Learn Javascript
                    </a>
                </div>
            </div>
        </section>
)
export default About;