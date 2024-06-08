'use client'
import Slider from "react-slick"

const Page = () => {

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    console.log("this is client component");
    return (
        <div>
            <Slider {...setting}>
                <div>
                    <img src="/images/image1.jpg" alt="Image 1" className="slider-image"/>
                </div>
                <div>
                    <img src="/images/image2.jpg" alt="Image 2" className="slider-image"/>
                </div>
                <div>
                    <img src="/images/image3.jpg" alt="Image 3" className="slider-image"/>
                </div>
                <div>
                    <img src="/images/image4.jpg" alt="Image 4" className="slider-image"/>
                </div>
                <div>
                    <img src="/images/image5.jpg" alt="Image 5" className="slider-image"/>
                </div>
                <div>
                    <img src="/images/image6.jpg" alt="Image 6" className="slider-image"/>
                </div>
            </Slider>

            <style jsx>{`
                .slider-image {
                    width: 100%;
                    height: auto;
                    max-height: 500px; /* adjust this to fit your design */
                    object-fit: cover;
                }
            `}</style>
        </div>
    )
}

export default Page
