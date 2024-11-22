import "./Home.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HowItWorks from "../../components/HowItWorks";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import StruggleSection from "../../components/StruggleSection";
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonials"
import AnnouncementStrip from "../../components/AnnouncementStrip";

function Home() {
  return (
    <div className="App">
      {/* Box for the HERO Section */}
      
    <AnnouncementStrip/>
      <Box
        sx={{
          background: "#ffffff",
          "box-shadow": "0px 2px 8px rgba(198, 208, 216, 0.25)",

          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
        className="home-container banner-container"
      >
        <HeroSection />
      </Box>
       {/* About Jyoti */}
       <Box
        sx={{
          background: "#ffffff",
          "box-shadow": "0px 2px 8px rgba(198, 208, 216, 0.25)",

          paddingTop: "2rem",

          paddingBottom: "2rem",
        }}
        className="home-container banner-container"
      >
        <AboutUs />
      </Box>
       {/* Box for the Issues */}
      <Box
        sx={{
          background: "#ffffff",
          "box-shadow": "0px 2px 8px rgba(198, 208, 216, 0.25)",

          paddingTop: "2rem",

          paddingBottom: "2rem",
        }}
        className="home-container banner-container"
      >
        <StruggleSection />
      </Box>

      {/* Box for the How it works*/}
      <Box
        sx={{
          background: "#ffffff",
          "box-shadow": "0px 2px 8px rgba(198, 208, 216, 0.25)",

          
        }}
        className="home-container banner-container"
      >
        <HowItWorks />
      </Box>

      {/* Box for Our Testimonials*/}
      <Box
        sx={{
          background: "#ffffff",
          "box-shadow": "0px 2px 8px rgba(198, 208, 216, 0.25)",

          paddingTop: "2rem",
          paddingBottom: "2rem",

        }}
        className="home-container banner-container"
      >
        <Testimonials />
      </Box>
      {/* Box for Footer */}
      <Box
        sx={{
          background: "#ffffff",
          "box-shadow": "0px 2px 8px rgba(198, 208, 216, 0.25)",

          paddingTop: "2rem",

        }}
        className="home-container banner-container"
      >
        <Footer/>
      </Box>
    </div>
  );
}

export default Home;
