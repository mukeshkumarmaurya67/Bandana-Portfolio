import React from "react";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import ImgSlider from "../assets/components/ImgSlider";
import { useFormik } from "formik";
import { ContactFormSchemas } from "../assets/components/FormSchema";

const Home = () => {
  const initialValues = {
    fname: "",
    lname: "",
    password: "",
    cpassword: "",
    email: "",
    classes: "",
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues,
    validationSchema: ContactFormSchemas,
    handleChange: true,
    handleBlur: false,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });




  return (
    <>
      <Header />
      {/* Main Banner Section starts here  */}

      <section className="banner-wrapper pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <h1 className="main-title">
                I'm Web Developer Natalie E. Watson
              </h1>
              <p className="com-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos dolorum tempora fugiat doloremque eveniet sint sunt
                iure eaque dolorem molestiae! Autem, nulla? Eius odit fuga
                possimus! Cupiditate deserunt asperiores quae.
              </p>
              <button className="btn btn-danger">Learn More</button>
            </div>
            <div className="col-lg-5">
              <img
                src={require(`../assets/images/hero_img.png`)}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Banner Section end here  */}

      {/* About section starts from here  */}
      <section className="about-wrapper">
        <div className="container">
          <h2 className="com-title text-center">About Me</h2>
          <p className="com-para text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="row mt-5">
            <div className="col-lg-4">
              <h3 className="sm-title">
                Developing With a Passion While Exploring The World.
              </h3>
              <p className="com-para pe-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                itaque eius nulla laudantium. Recusandae doloremque mollitia
                vero eum impedit ipsa eligendi voluptatum perferendis possimus
                ex natus, nesciunt ducimus iusto voluptatem.
              </p>
              <p className="com-para pe-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eos officia{" "}
              </p>
              <button className="btn btn-danger">Contact Me</button>
            </div>
            <div className="col-lg-4 align-self-center">
              <p className="com-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat ea tenetur natus rem assumenda ipsa, accusamus quo ab
                quidem id cupiditate optio sed, perferendis esse provident dolor
                sit unde perspiciatis.
              </p>
            </div>
            <div className="col-lg-4 px-0">
              <div className="img-box">
                <img src={require(`../assets/images/aboutme.jpg`)} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section end here  */}

      {/* Service section starts here  */}
      <section className="service-wrapper">
        <div className="container">
          <h2 className="com-title text-center">What Services I'm Providing</h2>
          <p className="com-para text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="service-content">
                <div className="icon-box">
                  <img
                    src={require(`../assets/images/service_icon1.png`)}
                    alt=""
                  />
                </div>
                <h3 className="sm-title">UI/UX Design</h3>
                <p className="com-para text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-content">
                <div className="icon-box">
                  <img
                    src={require(`../assets/images/service_icon2.png`)}
                    alt=""
                  />
                </div>
                <h3 className="sm-title">Digital Marketing</h3>
                <p className="com-para text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-content">
                <div className="icon-box">
                  <img
                    src={require(`../assets/images/service_icon3.png`)}
                    alt=""
                  />
                </div>
                <h3 className="sm-title">Web Development</h3>
                <p className="com-para text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section end here  */}

      {/* bg_img section starts from here  */}
      <section className="bg-img-wrapper">
        <div className="container">
          <div className="bg-img"></div>
          <h2 className="com-title text-center">Working Process</h2>
          <p className="com-para text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      {/* bg_img section end here  */}

      {/* work_exp section starts from here  */}
      <section className="work-exp-wrapper">
        <h2 className="com-title text-center">Work Experience</h2>
        <p className="com-para text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="work-exp-content">
                <h3 className="com-title">UI/UX Designer</h3>
                <h5>2015-2018</h5>
                <p className="com-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <input type="range" min="0" max="80" className="range" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-exp-content">
                <h3 className="com-title">Web Designer</h3>
                <h5>2015-2018</h5>
                <p className="com-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <input type="range" min="0" max="70" className="range" />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="work-exp-content">
                <h3 className="com-title">Web Designer</h3>
                <h5>2015-2018</h5>
                <p className="com-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <input type="range" min="0" max="70" className="range" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="work-exp-content">
                <h3 className="com-title">Web Designer</h3>
                <h5>2015-2018</h5>
                <p className="com-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <input type="range" min="0" max="70" className="range" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="work-exp-content">
                <h3 className="com-title">Web Designer</h3>
                <h5>2015-2018</h5>
                <p className="com-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <input type="range" min="0" max="70" className="range" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* work_exp section end here  */}

      {/* Portfolio-slider section starts from here  */}

      <ImgSlider />

      {/* Portfolio-slider section end here  */}

      {/* Client_review section starts from here  */}

      <section className="client-review-wrapper">
        <div className="container">
          <h2 className="com-title text-center">What My Clients Says</h2>
          <p className="com-para text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="client-content">
                <div className="client-img">
                  <img src={require(`../assets/images/client_1.jpg`)} alt="" />
                </div>
                <p className="com-para text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <span>John Doe</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="client-content">
                <div className="client-img">
                  <img src={require(`../assets/images/client_2.jpg`)} alt="" />
                </div>
                <p className="com-para text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <span>Jenna Smith</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="client-content">
                <div className="client-img">
                  <img src={require(`../assets/images/client_3.jpg`)} alt="" />
                </div>
                <p className="com-para text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <span>Samuel Stevens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client_review section end here  */}

      {/* Contact-wrapper section starts from here  */}

      <section className="contact-wrapper">
        <div className="container">
          <h2 className="com-title text-center">Stay In Touch</h2>
          <p className="com-para text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <input type="email" placeholder="Enter email address" />
          <button className="btn btn-danger subscribe">Subcribe</button>
        </div>
      </section>

      {/* Contact-wrapper section end here  */}

      {/* Contact Form Serction Start from Here  */}

      <section className="form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="fname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fname}
                      />
                      {touched.fname && errors.fname ? (
                            <p className="form-error">{errors.fname}</p>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lname" className="form-label">
                        LasT Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        id=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lname}
                      />
                      {touched.lname && errors.lname ? (
                            <p className="form-error">{errors.lname}</p>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {touched.email && errors.email ? (
                            <p className="form-error">{errors.email}</p>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="classes" className="form-label">
                        Class
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="classes"
                        id=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.classes}
                      />
                      {touched.classes && errors.classes ? (
                            <p className="form-error">{errors.classes}</p>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        id=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {touched.password && errors.password ? (
                            <p className="form-error">{errors.password}</p>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="cpassword"
                        id=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cpassword}
                      />
                      {touched.cpassword && errors.cpassword ? (
                            <p className="form-error">{errors.cpassword}</p>
                          ) : null}
                    </div>
                  </div>

                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Serction End Here  */}

      <Footer />
    </>
  );
};

export default Home;
