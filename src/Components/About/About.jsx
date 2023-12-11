import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import me1 from "../../assets/me1.jpg";
import me2 from "../../assets/me2.jpg";
import me3 from "../../assets/me3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const About = () => {
  return (
    <div id="about" className="min-h-screen ">
      <SectionTitle title={"About Me"}></SectionTitle>
      <div className="mt-10">
        <Container>
          <div className="flex flex-col items-center md:flex-row gap-5 ">
            {/* left side div  */}
            <div className="w-full md:w-3/5">
              <h1 className="uppercase text-[#F2F2F2] text-xl md:text-3xl font-bold mb-8">
                Personal Infos
              </h1>
              <div className="grid grid-cols-6  ">
                <div className="space-y-5 font-bold col-span-2 mr-5 text-[#828282]">
                  <h3>
                    First Name : <span className="text-[#F2F2F2]">Fahim</span>
                  </h3>
                  <h3>
                    Last Name :{" "}
                    <span className="text-[#F2F2F2]">Khandakar</span>
                  </h3>
                  <h3>
                    Age : <span className="text-[#F2F2F2]">22</span>
                  </h3>
                  <h3>
                    Nationality :{" "}
                    <span className="text-[#F2F2F2]">Bangladeshi</span>
                  </h3>
                </div>

                <div className="space-y-5 font-bold col-span-4 text-[#828282]">
                  <h3>
                    Address :{" "}
                    <span className="text-[#F2F2F2]">Dhaka, Bangladesh</span>
                  </h3>
                  <h3>
                    Phone :{" "}
                    <span className="text-[#F2F2F2]">+880 190 3994 195</span>
                  </h3>
                  <h3>
                    Email :{" "}
                    <span className="text-[#F2F2F2]">
                      fahimkhandakar01@gmail.com
                    </span>
                  </h3>
                  <h3>
                    Langages :{" "}
                    <span className="text-[#F2F2F2]">
                      Bengali, Hindi (Basic), English (Basic)
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* right side div  */}
            <div className="w-full md:w-1/3">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="rounded-md" src={me1} alt="My Photo" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="rounded-md" src={me2} alt="My Photo" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img className="rounded-md" src={me3} alt="My Photo" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
