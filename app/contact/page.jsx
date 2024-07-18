import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderTwo from "../header/headerTwo";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Contactcontainer from "./contact-container";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
        <HeaderTwo />
        <BreadCrumb title="Contact Us" innerTitle="Contact Us" bgImage="/img/banner/page-banner-5.jpg"/>
        <Contactcontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Contact;
