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
      <SectionTitle title={"Education & Experience"} />

      <VerticalTimeline lineColor={"#70FF00"}>
        {/* Backend Developer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid #70FF00" }}
          date="Jan 2025 - Present"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Backend Developer — NEC Group
          </h3>

          <p className="mb-2 text-sm text-[#70FF00]">
            Jan 2025 - Present · 1+ Year
          </p>

          <p>
            Currently working as a Backend Developer at NEC Group, focusing on
            building scalable server-side applications, REST APIs, database
            architecture, authentication, business logic, and performance
            optimization.
          </p>
        </VerticalTimelineElement>

        {/* Frontend Developer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid #70FF00" }}
          date="Jan 2024 - Dec 2024"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Frontend Developer — NEC Group
          </h3>

          <p className="mb-2 text-sm text-[#70FF00]">
            Jan 2024 - Dec 2024 · 1 Year
          </p>

          <p>
            Started my professional career as a Frontend Developer at NEC Group,
            where I worked on modern and responsive web applications, reusable
            UI components, API integration, state management, and improving
            overall user experience.
          </p>
        </VerticalTimelineElement>

        {/* University */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid #70FF00" }}
          date="2021 - 2025"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            B.Sc. in Computer Science & Engineering
          </h3>

          <p className="mb-2 text-sm text-[#70FF00]">
            American International University-Bangladesh (AIUB)
          </p>

          <p>
            Graduated with a degree in Computer Science & Engineering. During my
            academic journey, I developed a strong foundation in programming,
            software engineering, databases, and modern web technologies.
          </p>
        </VerticalTimelineElement>

        {/* Web Development */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid #70FF00" }}
          date="2023"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Web Development
          </h3>

          <p>
            Completed a comprehensive web development course at Programming Hero
            and gained hands-on experience in modern frontend technologies,
            backend development, APIs, databases, and full-stack application
            development.
          </p>
        </VerticalTimelineElement>

        {/* Self Learner */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid #70FF00" }}
          date="2022"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Self Learner
          </h3>

          <p>
            Started my journey into web development as a self learner, exploring
            programming, web technologies, and software development through
            continuous practice and real-world projects.
          </p>
        </VerticalTimelineElement>

        {/* E-commerce */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid #70FF00" }}
          date="2020 - 2021"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            E-commerce Business
          </h3>

          <p>
            Worked on building my own online e-commerce business. This
            experience helped me understand real-world business requirements,
            customer needs, and how technology can be used to build practical
            business solutions.
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
