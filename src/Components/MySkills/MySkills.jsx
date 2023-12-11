import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const MySkills = () => {
  return (
    <div id="skills" className="bg-[#161616] pt-10 pb-10 md:pb-28 mt-10">
      <SectionTitle title={"My Skills"}></SectionTitle>
      <Container>
        <Marquee>
          <div className="flex gap-14">
            <img src={"https://skillicons.dev/icons?i=js"} alt="js" />
            <img src={"https://skillicons.dev/icons?i=react"} alt="react" />
            <img src={"https://skillicons.dev/icons?i=next"} alt="nextJS" />
            <img
              src={"https://skillicons.dev/icons?i=materialui"}
              alt="materialui"
            />
            <img
              src={"https://skillicons.dev/icons?i=tailwind"}
              alt="tailwind"
            />
            <img
              src={"https://skillicons.dev/icons?i=firebase"}
              alt="firebase"
            />
            <img src={"https://skillicons.dev/icons?i=mongo"} alt="mongoDB" />
            <img src={"https://skillicons.dev/icons?i=nodejs"} alt="nodeJS" />
            <img
              src={"https://skillicons.dev/icons?i=express"}
              alt="expressJS"
            />
            <img src={"https://skillicons.dev/icons?i=html"} alt="html" />
            <img src={"https://skillicons.dev/icons?i=css"} alt="css" />
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default MySkills;
