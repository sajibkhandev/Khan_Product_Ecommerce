import React from "react";
import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import Card from "../components/Card";
import Flex from "../components/Flex";
import Button from "../components/Button";
import ProductOne from "../assets/product1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";

const Today = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="mb-20 ">
      <Container>
        <div className="border-b  border-[#9a9a9a4d] pb-[60px]">
          <SubHeading title="Today’s" />
          <Heading className="pt-6 pb-8" text="Flash Sales" />
          <Slider {...settings}>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={ProductOne}
                title="HAVIT HV-G92 Gamepad"
                saleprice="120"
                regularprice="160"
                badge="new"
              />
            </div>
          </Slider>
          <div className="text-center mt-[60px]">
            <Button text="View All Products" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Today;
