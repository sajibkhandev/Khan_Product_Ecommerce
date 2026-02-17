import React, { useState } from "react";
import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import Card from "../components/Card";
import Flex from "../components/Flex";
import Button from "../components/Button";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.png";
import Product6 from "../assets/product6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import Apidata from "../data";

const Today = () => {
  let [show, setShow] = useState(0)

  // console.log(Apidata);






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
                image={Product1}
                title="Product One"
                saleprice="300"
                regularprice="200"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={Product2}
                title="Product One"
                saleprice="300"
                regularprice="200"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={Product3}
                title="Product One"
                saleprice="300"
                regularprice="200"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={Product4}
                title="Product One"
                saleprice="300"
                regularprice="200"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={Product5}
                title="Product One"
                saleprice="300"
                regularprice="200"
                badge="new"
              />
            </div>
            <div>
              <Card
                image={Product6}
                title="Product One"
                saleprice="300"
                regularprice="200"
                badge="new"
              />
            </div>

          </Slider>






          <div className="flex flex-wrap gap-4">
            {
              Apidata.slice(0, show).map(item => (
                <div>
                  <Card
                    image={item.image}
                    title={item.name}
                    saleprice={item.saleprice}
                    regularprice={item.regularprice}
                    badge={item.badge}
                  />
                </div>

              ))

            }

          </div>
          {
            show < Apidata.length ? <div onClick={() => setShow(show + 4)} className="text-center mt-[60px]">
              <Button text="Load More Product" />
            </div>
              : <p className="text-center text-3xl text-red-500">No More Product</p>
          }
        </div>
      </Container>
    </section>
  );
};

export default Today;
