import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import PageSection from "../../../common/pagesection";
import "./style.scss";

function ClientSay(props) {
  return (
    <div className="ss-clientsay-section">
      <PageSection
        header={props.clientSay.header}
        description={props.clientSay.description}
      >
        <div className="container">
          <ClientSayCarusel caruselInfo={props.clientSay} />
        </div>
      </PageSection>
    </div>
  );
}

function ClientSayCarusel({ caruselInfo }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="card mb-5">
      <div className="card-body">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {caruselInfo.clientSays?.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="p-3 text-start">
                <p>{item.text}</p>
                <div className="text-end">
                  <i>- {item.person}</i>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ClientSay;
