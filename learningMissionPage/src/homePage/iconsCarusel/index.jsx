import React from "react";
import { Container } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";

import "./style.scss";

function IconCarusel(props) {
  console.log(props);
  return (
    <div className="iconCarusel">
      <Container>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={5}
          slidesToShow={5}
          scrollOnDevice={true}
		  arrows={false}
		  autoCycle={true}
        >
          
		    <div className="carusel">
              <a href="#"><img  alt="" src="icons/enternal 1.png" /></a>
            </div>
			<div className="carusel">
             <a href="https://www.kwc-sys.com/"> <img alt="" src="icons/kwc 1.png" /></a>
            </div>
			<div className="carusel">
             <a href="#"> <img alt="" src="icons/ararat 1.png" /></a>
            </div>
			<div className="carusel">
			<a href="https://www.locator.am/"> <img alt="" src="icons/locator 1.png" /></a>
            </div>
			<div className="carusel">
			<a href="https://www.dynamic.am/en/"> <img alt="" src="icons/dynamic 1.png" /></a>
            </div>
			<div className="carusel">
			<a href="https://www.armindia.am/"> <img alt="" src="icons/aitc 1.png" /></a>
            </div>
			<div className="carusel">
			<a href="https://www.fast.foundation/"> <img alt="" src="icons/image 20.png" /></a>
            </div>
			<div className="carusel">
			 <a href="https://armeniansforward.org/"> <img alt="" src="icons/image 21.png" /></a>
            </div>
			<div className="carusel"> 
			 <a href="https://www.pasadenaantiquewarehouse.com/"> <img alt="" src="icons/image 22.png" /></a>
            </div>
			<div className="carusel">
			<a href="#">   <img alt="" src="icons/image 23.png" /></a> 
            </div>
			<div className="carusel">
			<a href="https://www.zevit.net/">   <img alt="" src="icons/image 24.png" /></a>
            </div>
        </InfiniteCarousel>
      </Container>
    </div>
  );
}


export default IconCarusel;
