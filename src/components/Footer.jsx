import React from "react";

export default function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row justify-around sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="#home" className="link link-hover">Home</a>
          <a href="#services" className="link link-hover">Services</a>
          <a href="#our-work" className="link link-hover">Our Work</a>
          <a href="#contact-us" className="link link-hover">Contact Us</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button onClick={(e) => e.preventDefault()} className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
    </footer>
  );
}
