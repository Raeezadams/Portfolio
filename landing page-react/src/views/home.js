import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-left-side">
            <img
              alt="image"
              src="/whatsapp%20image%202023-10-09%20at%2013.45.46_e72ad732-200w.jpg"
              className="home-image"
            />
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="home-links-container">
              <a href="#resources" className="home-link Anchor">
                about me
              </a>
              <a href="#inspiration" className="home-link01 Anchor">
                Highlights
              </a>
              <a href="#ourstory" className="home-link02 Anchor">
                Achievements
              </a>
              <a href="#ContactMe" className="home-link03 Anchor">
                Contact me
              </a>
            </div>
          </div>
          <div className="home-right-side">
            <button type="button" className="home-cta-btn button Anchor">
              MY CV
            </button>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <a href="#resources" className="home-link04 Anchor">
                Resources
              </a>
              <a href="#inspiration" className="home-link05 Anchor">
                Inspiration
              </a>
              <span className="home-link06 Anchor">Process</span>
              <a href="#ourstory" className="home-link07 Anchor">
                Our story
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="home-hero">
        <div className="home-content-container">
          <div className="home-hero-text">
            <h1 className="home-heading">
              <span>Raeez Adams </span>
              <br></br>
              <span className="home-text02">Future Software Developer</span>
              <br></br>
            </h1>
            <span className="home-text04">
              My name is Raeez Adams, I have a bachelors in Information systems
              and I am furthering my education by pursing my Honour. Hoping to
              find work in software development.
            </span>
            <button type="button" className="home-cta-btn1 button Anchor">
              MY CV
            </button>
          </div>
        </div>
      </div>
      <div id="inspiration" className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text05 Section-Heading">
            What are some things I have done?
          </h2>
        </div>
        <div className="home-cards-container">
          <div className="home-features-card">
            <div className="home-icon-container">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
              <svg
                viewBox="0 0 1316.5714285714284 1024"
                className="home-icon07"
              >
                <path d="M1013.714 477.714l10.286 180.571c4.571 80.571-164 146.286-365.714 146.286s-370.286-65.714-365.714-146.286l10.286-180.571 328 103.429c9.143 2.857 18.286 4 27.429 4s18.286-1.143 27.429-4zM1316.571 292.571c0 8-5.143 14.857-12.571 17.714l-640 201.143c-2.286 0.571-4 0.571-5.714 0.571s-3.429 0-5.714-0.571l-372.571-117.714c-32.571 25.714-55.429 88.571-60 165.714 21.714 12.571 36 35.429 36 62.286 0 25.714-13.143 48-33.143 61.143l33.143 247.429c0.571 5.143-1.143 10.286-4.571 14.286s-8.571 6.286-13.714 6.286h-109.714c-5.143 0-10.286-2.286-13.714-6.286s-5.143-9.143-4.571-14.286l33.143-247.429c-20-13.143-33.143-35.429-33.143-61.143 0-27.429 15.429-50.857 37.143-63.429 3.429-66.857 20.571-138.857 56-188.571l-190.286-59.429c-7.429-2.857-12.571-9.714-12.571-17.714s5.143-14.857 12.571-17.714l640-201.143c2.286-0.571 4-0.571 5.714-0.571s3.429 0 5.714 0.571l640 201.143c7.429 2.857 12.571 9.714 12.571 17.714z"></path>
              </svg>
            </div>
            <div className="home-text-container">
              <span className="home-heading01 Card-Heading">Feature One</span>
              <span className="home-text06 Card-Text">
                Completed my degree in Information Systems 
              </span>
            </div>
          </div>
          <div className="home-features-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon09">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M810 298v-84h-426v84h426zM640 640v-86h-256v86h256zM810 470v-86h-426v86h426zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h512zM170 256v598h598v84h-598q-34 0-59-25t-25-59v-598h84z"></path>
              </svg>
            </div>
            <div className="home-text-container1">
              <span className="home-heading02 Card-Heading">Feature Two</span>
              <span className="home-text07">
                Pursuing my Honors in Information Systems
              </span>
            </div>
          </div>
          <div className="home-features-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon17">
                <path d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"></path>
              </svg>
            </div>
            <div className="home-text-container2">
              <span className="home-heading03 Card-Heading">Feature Three</span>
              <span className="home-text08 Card-Text">
                Completed in a hackathon where the theme was intelligent
                transportation
              </span>
            </div>
          </div>
          <div className="home-features-card3">
            <div className="home-icon-container3">
              <svg viewBox="0 0 1024 1024" className="home-icon19">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
              <svg viewBox="0 0 1152 1024" className="home-icon22">
                <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
              </svg>
            </div>
            <div className="home-text-container3">
              <span className="home-heading04 Card-Heading">Feature Four</span>
              <span className="home-text09 Card-Text">
                Tutored 1st year students in Information Systems at The
                University of The Western Cape 
              </span>
            </div>
          </div>
          <div className="home-features-card4">
            <div className="home-icon-container4">
              <svg viewBox="0 0 1024 1024" className="home-icon25">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon28">
                <path d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z"></path>
                <path d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"></path>
                <path d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"></path>
              </svg>
            </div>
            <div className="home-text-container4">
              <span className="home-heading05 Card-Heading">Feature Five</span>
              <span className="home-text10 Card-Text">
                Building a full stack delivery system, using TypeScript, C# and
                Microsoft SQL Server
              </span>
            </div>
          </div>
          <div className="home-features-card5">
            <div className="home-icon-container5">
              <svg viewBox="0 0 1024 1024" className="home-icon32">
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
              <svg viewBox="0 0 1097.142857142857 1024" className="home-icon35">
                <path d="M352.571 799.429l-28.571 28.571c-7.429 7.429-18.857 7.429-26.286 0l-266.286-266.286c-7.429-7.429-7.429-18.857 0-26.286l266.286-266.286c7.429-7.429 18.857-7.429 26.286 0l28.571 28.571c7.429 7.429 7.429 18.857 0 26.286l-224.571 224.571 224.571 224.571c7.429 7.429 7.429 18.857 0 26.286zM690.286 189.714l-213.143 737.714c-2.857 9.714-13.143 15.429-22.286 12.571l-35.429-9.714c-9.714-2.857-15.429-13.143-12.571-22.857l213.143-737.714c2.857-9.714 13.143-15.429 22.286-12.571l35.429 9.714c9.714 2.857 15.429 13.143 12.571 22.857zM1065.714 561.714l-266.286 266.286c-7.429 7.429-18.857 7.429-26.286 0l-28.571-28.571c-7.429-7.429-7.429-18.857 0-26.286l224.571-224.571-224.571-224.571c-7.429-7.429-7.429-18.857 0-26.286l28.571-28.571c7.429-7.429 18.857-7.429 26.286 0l266.286 266.286c7.429 7.429 7.429 18.857 0 26.286z"></path>
              </svg>
            </div>
            <div className="home-text-container5">
              <span className="home-heading06 Card-Heading">Feature Six</span>
              <span className="home-text11 Card-Text">
                Completed full length Udemy course to fully ground myself in
                HTML, CSS and JavaScript.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="ourstory" className="home-achievements">
        <div className="home-heading-container1">
          <h1 className="home-text12">Achievements</h1>
          <span className="home-text13">
            Born Problem Solver, Critical Thinker Extraordinaire
          </span>
        </div>
        <div className="home-cards-container1">
          <div className="home-left-section">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="home-image2"
            />
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="home-image3"
            />
            <div className="home-content-container1">
              <span className="home-heading07 Card-Heading">
                Smart Delivery
              </span>
              <span className="home-text14">
                I am in the process of designing and building a full stack
                delivery system making use of technologies such as TypeScript,
                C#, Microsoft SQL server and React.Js
              </span>
              <span className="home-text15 Card-Text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-info-container">
              <span className="Card-Text">28July 2023</span>
            </div>
          </div>
          <div className="home-right-section">
            <div className="home-card">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image4"
              />
              <div className="home-content-container2">
                <span className="home-text16 SmallCard-Heading">Hackathon</span>
                <span className="home-link08">
                  Competed in a hackathon focused on intelligent transportation
                  systems, where I was part of a small group tasked with
                  developing a solution from the ground up.
                </span>
              </div>
              <div className="home-info-container1">
                <span className="Card-Text">20 May 2022</span>
              </div>
            </div>
            <div className="home-card1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image5"
              />
              <div className="home-content-container3">
                <span className="home-text17 SmallCard-Heading">
                  Information Systems Tutor
                </span>
                <span className="home-link09">
                  Tutored 1st year students in Information Systems where i
                  taught them the basics of hardware, software, HTML,CSS and
                  JavaScript
                </span>
              </div>
              <div className="home-info-container2">
                <span className="Card-Text">12 Feb 2023</span>
              </div>
            </div>
            <div className="home-card2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image6"
              />
              <div className="home-content-container4">
                <span className="home-text18 SmallCard-Heading">
                  Graduation 
                </span>
                <span className="home-link10">
                  Graduated with a degree in Information Systems where i learnt
                  about HTML, CSS, JavaScript, Java, SQL, and agile
                  methodologies
                </span>
              </div>
              <div className="home-info-container3">
                <span className="Card-Text">12 Jan 2023</span>
              </div>
            </div>
            <div className="home-card3">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image7"
              />
              <div className="home-content-container5">
                <span className="home-text19 SmallCard-Heading">
                  Web Developer Udemy Course 
                </span>
                <span className="home-link11">
                  Completed an online Udemy course to further ground my web
                  development skills and provide proof of my ability
                </span>
              </div>
              <div className="home-info-container4">
                <span className="Card-Text">12 Dec 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#Contact Me" className="home-link12">
        <section id="ContactMe" className="home-get-in-touch">
          <h2 className="home-text20 Section-Heading">Contact ME</h2>
          <div className="home-form-container">
            <span className="home-heading08 BigCard-Heading">
              Send me a message
            </span>
            <input
              type="text"
              required="true"
              placeholder="Name"
              className="home-name input"
            />
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="home-email input"
            />
            <textarea
              placeholder="Your Message"
              className="home-message textarea"
            ></textarea>
            <button className="home-cta-btn2 Anchor button">SEND</button>
          </div>
          <div className="home-content-container6">
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading09">South Africa, CPT</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon37">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span>Cape Town, Kenwyn</span>
                </div>
                <div className="home-email1">
                  <svg viewBox="0 0 1024 1024" className="home-icon39">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="Section-Text">Raeezadams123@gmail.com</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon41"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span>0829532292</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </a>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://www.linkedin.com/in/raeez-adams-41a76b25b"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon43">
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/raeez_adams/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link14"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon45">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/Raeezadams"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link15"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon47">
                <path d="M296.571 685.714v0c1.143-1.714 0.571-5.143-1.714-7.429-2.857-2.286-6.286-2.857-8-1.143-1.143 1.714-0.571 5.143 1.714 7.429 2.857 2.286 6.286 2.857 8 1.143zM280.571 662.286c-1.714-2.286-4.571-3.429-6.857-2.286-1.714 1.143-1.714 4.571 0 6.857 2.286 2.857 5.143 4 6.857 2.857v0c1.714-1.143 1.714-4.571 0-7.429zM257.143 639.429v0c0.571-1.143-0.571-3.429-2.857-4.571-1.714-0.571-4-0.571-4.571 1.143-1.143 1.714 0 3.429 2.286 4.571 2.286 0.571 4.571 0.571 5.143-1.143zM269.143 652.571v0c1.143-1.143 1.143-4-1.143-5.714-1.714-2.286-4.571-2.857-5.714-1.714-1.714 1.714-1.143 4 0.571 6.286 1.714 1.714 4.571 2.857 6.286 1.143zM318.286 695.429v0c0.571-2.286-1.714-5.143-5.143-6.286s-6.286 0-7.429 2.286c-0.571 2.286 1.714 5.143 5.143 6.286s6.286 0 7.429-2.286zM342.286 697.143v0c0-2.286-2.857-4.571-6.857-4.571-3.429 0-5.714 2.286-5.714 4.571s2.857 4.571 6.286 4.571 6.286-2.286 6.286-4.571zM364.571 693.143v0c-0.571-2.286-4-3.429-7.429-2.857s-5.714 2.857-5.143 5.143 3.429 4 6.857 3.429 5.714-3.429 5.714-5.714zM731.429 512c0-161.714-130.857-292.571-292.571-292.571s-292.571 130.857-292.571 292.571c0 129.143 84 238.857 200 277.714 14.857 2.857 20-6.286 20-14.286 0-6.857 0-29.714-0.571-54.286 0 0-81.143 17.714-98.286-34.857 0 0-13.143-33.714-32.571-42.286 0 0-26.286-18.286 2.286-18.286 0 0 28.571 2.286 44.571 30.286 25.714 45.143 68.571 32 85.143 24.571 2.857-18.857 10.286-32 18.857-39.429-65.143-7.429-133.714-32.571-133.714-144.571 0-32 11.429-57.714 30.286-78.286-2.857-7.429-13.143-37.143 2.857-77.714 24.571-7.429 80.571 30.286 80.571 30.286 23.429-6.857 48-9.714 73.143-9.714s49.714 2.857 73.143 9.714c0 0 56-37.714 80.571-30.286 16 40.571 5.714 70.286 2.857 77.714 18.857 20.571 30.286 46.286 30.286 78.286 0 112.571-68.571 137.143-133.714 144.571 10.286 9.143 20 26.857 20 54.286 0 38.857-0.571 70.286-0.571 80 0 8 5.143 17.143 20 14.286 116-38.857 200-148.571 200-277.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon49">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
