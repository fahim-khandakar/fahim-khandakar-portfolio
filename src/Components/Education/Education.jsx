import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div id="education" className="mt-10 md:mt-0">
      <SectionTitle title={"Education & Experience"}></SectionTitle>

      <VerticalTimeline lineColor={"#70FF00"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2023 - present"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Frontend Developer
          </h3>

          <p>
            In 2023, I completed a web development course at Programming Hero.
            Over the last six months, I devoted significant time to research,
            enhancing my understanding of various technologies. This period has
            been particularly fruitful for my learning journey. Additionally, I
            successfully completed my ninth-grade studies during this time.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2022"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Self Learner
          </h3>

          <p>
            In 2022, I embarked on a challenging solo journey into web
            development. Progress was slow, but the experience proved
            invaluable. The turning point came when I started the Programming
            Hero course, where I found significant help and realized the
            effectiveness of structured learning.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2020 - 2021"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Story of my own business
          </h3>

          <p>
            From 2020 to 2021, I endeavored to build an online e-commerce
            business. However, while working on my own e-commerce site, I
            realized my experience was limited. Recognizing the need for more
            knowledge, I decided to pause the business. Despite the challenges,
            the experience provided valuable insights that contribute to my
            growth.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2013 - 2019"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            My Studies at the Madrasah.
          </h3>

          <p>
            From 2013 to 2019, I studied at a madrasah, where I earned my Hafez
            degree. Additionally, I completed two sessions of the Mawlana
            division.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Education;
