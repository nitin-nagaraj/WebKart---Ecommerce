import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube'; 
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://twitter.com/nnitin";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://pbs.twimg.com/profile_images/1085472505362436097/dpuRUwuW_400x400.jpg"
              alt="Founder"
            />
            <Typography component="h1">Hi, I'm Nitin</Typography>
            <Typography component="h2">Full Stack Developer</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Find Me here</Typography>
            <a
              href="https://twitter.com/nnitin"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://twitter.com/nnitin" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
