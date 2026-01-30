import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import Flex from "../components/Flex";
import BannerImage from "../assets/banner.jpg";
import CategoryList from "../components/CategoryList";
import Slider from "react-slick";
import { ImOpt } from "react-icons/im";

const Banner = () => {
  var settings = {
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="pt-10 pb-[140px]">
      <Container>
        <Flex>
          <div className='w-3/12  relative after:w-[1px] after:h-[380px] after:absolute after: top-[12%] 
          after:right-[50px] after:bg-[#9a9a9a4d] after:content-[""]'>
            <ul className="flex flex-col gap-y-4">
              <CategoryList text="Woman’s Fashion" type="true" />
              <CategoryList
                classNameForIcon="ml-20"
                text="Men’s Fashion"
                type="true"
              />
              <CategoryList text="Electronics" />
              <CategoryList text="Home & Lifestyle"/>
              <CategoryList text="Medicine" />
              <CategoryList text="Sports & Outdoor"/>
              <CategoryList text="Baby’s & Toys" />
              <CategoryList text="Groceries & Pets"/>
              <CategoryList text="Health & Beauty"/>
            </ul>
          </div>
          <div className="w-9/12 ">
            <Slider {...settings}>
              <div>
                <Image src={BannerImage} alt="Banner Image" />
              </div>
              <div>
                <Image src={BannerImage} alt="BannerImage"/>
              </div>
              <div>
                <Image src={BannerImage} alt="BannerImage"/>
              </div>
              
              
            </Slider>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
