import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Popup.scss";

const Popup = (props) => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const onAcceptAllButtonClick = () => {
    console.log("accept all");
    props.ucData.onAcceptAllHandler();
  };

  return (
    <>
      {showPopup ? (
        <div className="Layer">
          <div className="popup">
            <p>
              Wir nutzen auf unseren Webseiten Cookies und Trackingtechnologien.
              Diese dienen der Optimierung unserer Website, der
              Weiterentwicklung von Services und Marketingzwecken. Der Einsatz
              bestimmter Cookies ist für die uneingeschränkte Nutzung unserer
              Website technisch erforderlich. Durch Klick auf „Akzeptieren“
              stimmen Sie zu, dass auch Cookies zu Analyse-, Marketing- und
              Social Media-Zwecken gesetzt werden. Die Einwilligung können Sie
              jederzeit widerrufen. Weitere Informationen sowie die
              Widerspruchsmöglichkeit finden Sie in unserer{" "}
              <Link to="/datenschutz-disclaimer" onClick={closePopup}>
                Datenschutzinformation
              </Link>
              .
            </p>
            <div className="btn-list">
              <button className="accept-btn" onClick={onAcceptAllButtonClick}>
                Akzeptiern
              </button>
              <p className="option-btn">Einstellung</p>
            </div>

            <ul className="banner-links">
              <li>
                <Link to="/impressum">
                  <button className="link-button" onClick={closePopup}>
                    Impressum
                  </button>
                </Link>
              </li>
              <span>|</span>
              <li>
                <Link to="/datenschutz-disclaimer">
                  <button className="link-button" onClick={closePopup}>
                    Datenschutz
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

Popup.propTypes = {
  ucData: PropTypes.object
};

export default Popup;
