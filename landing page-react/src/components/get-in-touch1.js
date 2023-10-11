import React from 'react'

import PropTypes from 'prop-types'

import './get-in-touch1.css'

const GetInTouch1 = (props) => {
  return (
    <div className="get-in-touch1-get-in-touch">
      <h2 className="get-in-touch1-text Section-Heading">{props.heading}</h2>
      <div className="get-in-touch1-content-container">
        <div className="get-in-touch1-form-container">
          <span className="get-in-touch1-heading BigCard-Heading">
            {props.Heading}
          </span>
          <input
            type="text"
            required="true"
            placeholder={props.Name_placeholder}
            className="get-in-touch1-name input"
          />
          <input
            type="text"
            required="true"
            placeholder={props.Email_placeholder}
            className="get-in-touch1-email input"
          />
          <textarea
            placeholder={props.Message_placeholder}
            className="get-in-touch1-message textarea"
          ></textarea>
          <button className="get-in-touch1-cta-btn button Anchor">
            {props.Cta_btn}
          </button>
        </div>
        <div className="get-in-touch1-locations-container">
          <div className="get-in-touch1-location-1">
            <span className="get-in-touch1-heading1">{props.Heading1}</span>
            <div className="get-in-touch1-adress">
              <svg viewBox="0 0 1024 1024" className="get-in-touch1-icon">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span>{props.text}</span>
            </div>
            <div className="get-in-touch1-email1">
              <svg viewBox="0 0 1024 1024" className="get-in-touch1-icon2">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="Section-Text">{props.text1}</span>
            </div>
            <div className="get-in-touch1-phone">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="get-in-touch1-icon4"
              >
                <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
              </svg>
              <span>{props.text2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GetInTouch1.defaultProps = {
  Email_placeholder: 'E-mail',
  heading: 'Contact ME',
  text2: '0829532292\n',
  text: 'Cape Town, Kenwyn\n',
  Heading1: 'South Africa, CPT',
  Message_placeholder: 'Your Message',
  Name_placeholder: 'Name',
  text1: 'Raeezadams123@gmail.com',
  Heading: 'Send me a message',
  Cta_btn: 'SEND',
}

GetInTouch1.propTypes = {
  Email_placeholder: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  Heading1: PropTypes.string,
  Message_placeholder: PropTypes.string,
  Name_placeholder: PropTypes.string,
  text1: PropTypes.string,
  Heading: PropTypes.string,
  Cta_btn: PropTypes.string,
}

export default GetInTouch1
