import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
function SocialMediaLinks() {
  return (
    <div className="hidden lg:flex gap-4">
      <a href="#">
        <BsTwitter className="text-3xl" />
      </a>
      <a href="#">
        <AiFillInstagram className="text-3xl" />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
