import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="center-container">
        <div className="contact header_animation">
          <h1>Let's work together.</h1>
          <h1>
            <a href="mailto:vazquez.lopez.josem@gmail.com">
              <span>Get in touch.</span>
            </a>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
