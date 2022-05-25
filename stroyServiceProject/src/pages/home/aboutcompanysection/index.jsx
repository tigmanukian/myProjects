import React from "react";
import PageSection from "../../../common/pagesection";

import "./style.scss";

function AboutCompany(props) {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <div>
      <PageSection
        header={props.aboutCompany.header}
        description={props.aboutCompany.description}
        alternate="true">
        <div className="container ss-about-company">
          <div className="row">
            <div className="col-auto d-none d-md-block">
              <div className="ss-img-frame ps-2 pb-2">
                <img src={baseUrl + '/' + props.aboutCompany.imageUrl} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="text-start">
                <h3>{props.aboutCompany.textHeader}</h3>
                <p>{props.aboutCompany.text}</p>
                <img src={baseUrl + '/' + props.aboutCompany.signatureUrl} alt="signature" className="float-end pt-3" />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

export default AboutCompany;
