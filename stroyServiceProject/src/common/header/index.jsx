import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { getContactInfo } from '../../services';
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
    const [contactInfo, setContactInfo] = useState({ phone: '', address: '' });

    useEffect(() => {
        const fetchData = async function () {
            const result = await getContactInfo();

            setContactInfo(result);
        }

        fetchData();
    }, []);

    return (
        <header className="ss-header m-2">
            <Container>
                <Row>
                    <Col>
                        <Logo />
                    </Col>
                    <Col>

                    </Col>
                    <Col className="col-auto d-none d-md-block">
                        <HeaderThumb icon={faLocationDot} header="Адрес" content={contactInfo.address} />
                    </Col>
                    <Col className="col-auto">
                        <HeaderThumb icon={faMobileScreenButton} header="Телефон" content={contactInfo.phone} />
                    </Col>
                </Row>


            </Container>

        </header>
    );
}

function HeaderThumb(props) {
    return (
        <div className="d-table">
            <div className="d-table-cell ss-thumb-icon pe-2">
                <FontAwesomeIcon icon={props.icon} className="fa-2xl" />
            </div>
            <div className="ss-thumb-content">
                <div className="fw-bold">{props.header}</div>
                <div>{props.content}</div>
            </div>
        </div>
    );
}

function Logo() {
    const baseUrl = process.env.PUBLIC_URL;

    return <img src={baseUrl + '/logo139.png'} className="ss-logo" alt="logo" />;
}


export default Header;