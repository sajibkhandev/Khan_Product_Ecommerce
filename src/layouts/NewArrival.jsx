import React from 'react'
import Heading from '../components/Heading'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import ImageOne from '../assets/marketing1.png'
import ImageTwo from '../assets/marketing2.png'
import ImageThree from '../assets/marketing3.png'
import ImageFour from '../assets/marketing4.png'
import { Link } from 'react-router-dom'

const NewArrival = () => {
    let data = [
        {
            image: ImageOne,
            id: 1
        },
        {
            image: ImageTwo,
            id: 2
        },
        {
            image: ImageThree,
            id: 3
        },
        {
            image: ImageFour,
            id: 4
        }
    ]


    return (
        <section>
            <Container>
                <SubHeading title="Featured" />
                <Heading className='pb-14 pt-5' text="New Arrival" />

                <div className="grid gap-[30px] grid-cols-4 grid-rows-2 auto-rows-[284px]">


                    {data.map((item, index) => (
                        <div
                            className={`
                             ${index === 0
                                    ? "col-start-1 col-end-3 row-start-1 row-end-3"
                                    : index === 1
                                        ? "col-start-3 col-end-5"
                                        : ""
                                }
      `}
                        >
                            <Image className="w-full h-full" src={item.image} />
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    )
}

export default NewArrival