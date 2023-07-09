import React from "react";
import figma from "../../assets/icons/figma.png";
import photoshop from "../../assets/icons/photoshop.png";
import illustrator from "../../assets/icons/illustration.png";
import design from "../../assets/lottie/designing.json";
import Lottie from "lottie-react";


const Design = () => {
  return (
    <div  >
      <div>
        <div className="flex flex-col lg:flex-row justify-around items-center mb-20 px-5 ">
          <div>
            <p className="text-3xl text-[#575555] text-center">
              Designing
            </p>
            <div
              className="flex justify-center gap-2 mt-16 mb-16"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <img src={figma} alt="" />
              <img src={photoshop} alt="" />
              <img src={illustrator} alt="" />
            </div>
            <div className="leading-loose">
              <p>
                {" "}
                &#x25ba; Experience in designing user-friendly interfaces with
                figma
              </p>
              <p>
                {" "}
                &#x25ba; Experience in developing design systems and style
                guides
              </p>
              <p> &#x25ba; Providing user-friendly design solutions</p>
            </div>
          </div>
          <div
            className=" w-[18rem] md:w-[30rem] md:h-[30rem] mt-0 md:-mt-32 "
            data-aos="fade-up-left"
            data-aos-duration="1200"
          >
            <Lottie animationData={design} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
