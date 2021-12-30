import React from "react";
import { NavLink } from "react-router-dom";
import "./homeFooter.css";
export default function HomeFooter(props) {
  return (
    <div className="footer">
      <div className="row" style={{ margin: 0 }}>
        <div className="col-3">
          <ul className="ulHomeFooter">
            <h3 className="h3HomeFooter">Categories</h3>
            <li className="liHomeFooter" className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Graphic & Design
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Graphic & Design
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Digital Marketing
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Writing & Translation
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Video & Animation
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Music & Audio
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Programming & Tech
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Data
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Business
              </NavLink>
            </li>

            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Lifestyle
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Sitemap
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="ulHomeFooter">
            <h3 className="h3HomeFooter">About</h3>

            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Careers
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Press & News
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Partnerships
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Privacy Policy
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Terms of Service
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Intellectual Property Claims
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Investor Relations
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="ulHomeFooter">
            <h3 className="h3HomeFooter">Support</h3>

            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Help & Support
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Trust & Safety
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Selling on Fiverr
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Buying on Fiverr
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="ulHomeFooter">
            <h3 className="h3HomeFooter">Community</h3>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Events
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Blog
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Forum{" "}
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Community Standeards
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Podcast
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Affilliates
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Invite a Friend
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Become a Seller
              </NavLink>
            </li>
            <li className="liHomeFooter">
              <NavLink className="aHomeFooter" to="/">
                Fiverr Elevate
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div class="fiverr-logo-footer">
            <svg
              width="91"
              height="27"
              viewBox="0 0 91 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A7D85">
                <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#7A7D85">
                <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
              </g>
            </svg>
          </div>
          <p class="text-body-2"> © Fiverr International Ltd. 2021</p>
        </div>
        <div className="right">
          <ul>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-facebook"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
            <li>
              <i class="fab fa-pinterest"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
