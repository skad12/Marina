"use client"
import SEO from "@/components/seo";
import FooterTwo from "./footer/footerTwo";
import HeaderTwo from "./header/headerTwo";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import Banner from "./home-two/banner";
import Blog from "./home-two/blog";
import Booking from "./home-two/booking";
import Callarea from "./home-two/call-area";
import Companyarea from "./home-two/company-area";
import Deluxe from "./home-two/deluxe";
import Instagram from "./home-two/instagram";
import Place from "./home-two/place";

const Home2 = () => {
  return (
    <>
      <SEO pageTitle="Marina" />
        <HeaderTwo />
        <Banner />
        <Companyarea />
        <Callarea />
        <Deluxe />
        <Booking />
        <Place />
        <Blog />
        <Instagram />
        <FooterTwo />
        <ScrollToTopButton />
    </>
  );
};

export default Home2;
