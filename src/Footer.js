import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const referralCode = "4DE1A470";
  const referralLink = `https://carsreview.com/signup?referral=${referralCode}`;

  function shareOnLinkedin() {
    const postText =
      "Hey!👋🏻 I use Cars Review to know about the top rated cars in the market. They also offer free insurance for the first 3 months if you use my code 4DE1A470 while signing up for the first time. Visit Now - https://xxxxxxx.com/home";
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${referralLink}&title=Cars Review&summary=${postText}`;
    window.open(linkedinUrl, "_blank");
  }

  function shareOnTwitter() {
    const tweetText =
      "Hey!👋🏻 I use Cars Review to know about the top rated cars in the market. They also offer free insurance for the first 3 months if you use my code 4DE1A470 while signing up for the first time. Visit Now - https://xxxxxxx.com/home";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${referralLink}`;
    window.open(twitterUrl, "_blank");
  }

  function shareOnWhatsapp() {
    const whatsappText =
      "Hey!👋🏻 I use Cars Review to know about the top rated cars in the market. They also offer free insurance for the first 3 months if you use my code 4DE1A470 while signing up for the first time. Visit Now - https://xxxxxxx.com/home ";
    const whatsappUrl = `https://wa.me/?text=${whatsappText}${referralLink}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div id="footer">
      <div className="referUs">Refer Us</div>
      <div id="all_links">
        <div className="links" onClick={shareOnLinkedin}>
          <LinkedInIcon />
        </div>
        <div className="links" onClick={shareOnTwitter}>
          <TwitterIcon />
        </div>
        <div className="links" onClick={shareOnWhatsapp}>
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
