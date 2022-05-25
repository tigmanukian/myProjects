import PageSection from "../../../common/pagesection";

import "./index.scss";

function WhyChooseUsSection(props) {
  return (
    <div className="ss-whychooseus-section">
      <PageSection
        header={props.whyChooseUs.header}
        description={props.whyChooseUs.description}
        alternate="true"
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {props.whyChooseUs.items?.map((item, index) => (
              <div key={index} className="col pt-2 pb-2">
                <CardsAdvantage
                  url={item.url}
                  title={item.title}
                  text={item.text}
                  alt={item.alt}
                  detailUrl={item.detailUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}

function CardsAdvantage(props) {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <div className="ss-animate-line">
      <a href={props.detailUrl}>
        <div className="card">
          <img
            className="card-img-top ms-auto me-auto mt-4 mb-4"
            src={baseUrl + "/" + props.url}
            alt="icon"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
          <button href="#" className="btn btn-secondary m-auto mb-3">
            Детали
          </button>
        </div>
      </a>
    </div>
  );
}
export default WhyChooseUsSection;
