import { Link } from "react-router-dom";
import PageSection from "../../../common/pagesection";
import "./index.scss";

function OurServicesSection(props) {
    return (
        <PageSection
            header={props.ourServices.header}
            description={props.ourServices.description}
        >
            <div className="container ss-our-services">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {props.ourServices.items?.map((item, index) => (
                        <div key={index} className="col overflow-hidden">
                            <ServiceCard
                                imageUrl={item.imageUrl}
                                header={item.header}
                                description={item.description}
                                serviceList={item.serviceList}
                                detailUrl={item.detailUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    );
}

function ServiceCard(props) {
    const baseUrl = process.env.PUBLIC_URL;
    return (
        <Link to={props.detailUrl}>
            <div className="card">
                {/* <div className="card-cover"></div> */}
                <img src={baseUrl + '/' + props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-bg-overlay card-img-overlay"></div>
                <div className="card-img-overlay ss-card-description">
                    <h5 className="card-title">{props.header}</h5>
                    {props.description && <div className="card-text text-start ps-3 d-md-none d-lg-block">{props.description}</div>}
                    {props.serviceList && <ul className="card-text d-md-none d-lg-block text-start ss-service-list">
                        {props.serviceList.map((sl, index) => <li key={index}>{sl}</li>)}
                    </ul>}
                    <button type="button" className="btn btn-outline-light">Детали</button>
                </div>
            </div>
        </Link>
    );
}

export default OurServicesSection;
