import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="main_content_home">
        A brand and product designer working with clients globally
      </h1>
      <div className="expertise">
        <p>Expertise</p>
        <p>Branding</p>
        <p>Product</p>
        <p>Design Systems</p>
      </div>
      <Gallery />
      <div className="header_animation">
        <h1>Let's work together.</h1>
        <h1>
          <a href="mailto:vazquez.lopez.josem@gmail.com">
            <span>Get in touch.</span>
          </a>
        </h1>
      </div>
      <Footer />
    </>
  );
};
export default Home;
