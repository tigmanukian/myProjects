import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import React from "react";
import "./style.scss";

function Footer(props) {
	return (
		<footer className="footer">
			<div className="footer-strip"></div>
			<div className="container">
				<div className="row p-4">
					<div className="col">
						<p className="text-light">  © {new Date().getFullYear()} Stroy Service. All Rights Reserved.</p>
					</div>
					<div className="col text-left">
						<div className="float-end">
							<FontAwesomeIcon icon={faFacebookSquare} className="text-light m-1" size="xl" />
							<FontAwesomeIcon icon={faInstagramSquare} className="text-light m-1" size="xl" />
							<FontAwesomeIcon icon={faTwitterSquare} className="text-light m-1" size="xl" />
							<FontAwesomeIcon icon={faLinkedin} className="text-light m-1" size="xl" />
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
