import React from 'react';

// Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobeAmericas, faEnvelope, faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const HeadInformation = () => {
    return (
        <div className="container d-flex justify-content-between align-items-center">
            <p className="m-0"><FontAwesomeIcon
                className="mx-2"
                icon={faGlobeAmericas}
                color="#0BBAFF"
                size="lg"
            />Bienvenidos a AUTOTRUX.</p>
            <ul className="h-100 my-2 list-unstyled d-flex justify-content-between align-items-center">
                <li className="mx-2"><FontAwesomeIcon
                    className="mx-2"
                    icon={faFacebookF}
                    color="#000"
                    size="lg"
                /></li>
                <li className="mx-2"><FontAwesomeIcon
                    className="mx-2"
                    icon={faInstagram}
                    color="#000"
                    size="lg"
                /></li>
                <li className="mx-2"><FontAwesomeIcon
                    className="mx-2"
                    icon={faEnvelope}
                    color="#000"
                    size="lg"
                /></li>
            </ul>
        </div>
    )
}

export default HeadInformation;