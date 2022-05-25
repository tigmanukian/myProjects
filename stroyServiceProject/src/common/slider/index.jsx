import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './index.scss';

function Slider(props) {
    const [index, setIndex] = useState(0);
    const baseUrl = process.env.PUBLIC_URL;
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel id="ss-slider" activeIndex={index} onSelect={handleSelect} height="100px">
            {props.items?.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={baseUrl + '/' + item.imageUrl}
                        alt="First slide"
                    />
                    {(item.header || item.description) &&
                        <Carousel.Caption>
                            {item.header && <h3>{item.header}</h3>}
                            {item.description && <p>{item.description}</p>}
                        </Carousel.Caption>
                    }
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;