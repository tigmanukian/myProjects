import React from "react";

import "./style.scss";

function ClientLogos(props) {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <div className="ss-client-logos-section">
      <div className="container">
        <div className="row">
          {props.clientLogos.logos.map(
            (item, index) => <div className="col" key={index}>
              <img alt="" src={baseUrl + '/' + item.url} className="w-100"/>
            </div>)}
        </div>
      </div>
    </div>
  );
}


export default ClientLogos;
