"use client"
import SEO from "@/components/seo";
import FooterTwo from "../footer/footerTwo";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Banner from "./banner";
import Blog from "./blog";
import Booking from "./booking";
import Callarea from "./call-area";
import Companyarea from "./company-area";
import Deluxe from "./deluxe";
import Instagram from "./instagram";
import Place from "./place";

const Home2 = () => {
  return (
    <>
      <SEO pageTitle="Home Two" />
        <HeaderOne />
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
