import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center py-8 lg:p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#">About me</a>
        <a className="link link-hover" href="#">Contact</a>
        <a className="link link-hover" href="#">Blog</a>
        <a className="link link-hover" href="#">Portfolio</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/jemmoudi.md/">
            <SiInstagram className="w-6 h-6"/>
          </a>
          <a href="https://www.linkedin.com/in/jemmoudi/">
            <SiLinkedin className="w-6 h-6"/>
          </a>
          <a href="https://github.com/snoring-dev/">
            <SiGithub className="w-6 h-6"/>
          </a>
        </div>
      </div>
      <div>
        <p className="flex flex-row items-center">Copyright © 2023 - Made with <FaHeart className="w-6 h-6 px-1" /> By @snoring.dev</p>
      </div>
    </footer>
  );
}

export default Footer;
