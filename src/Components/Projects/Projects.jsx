/* eslint-disable react/no-unescaped-entities */
import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import project1 from "../../assets/exploreElite.png";
import project2 from "../../assets/driveMasterPro.png";
import project3 from "../../assets/adventureHub.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <SectionTitle title={"Projects"}></SectionTitle>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Project 1 */}
          <div className="card  shadow-xl text-center">
            <figure>
              <img src={project1} alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-2xl text-center text-[#70FF00]">
                Explore Elite
              </h2>
              <p className="mt-3 text-[#828282]">
                Tourists: Register, login, and add services on our
                mobile-friendly site. Get sweet alerts upon success. Gain guide
                access with admin approval. Buy packages for discounts on 3 or
                more. Click the heart icon to add packages to your wish route.
              </p>
              <div className="card-actions justify-center mt-5">
                <NavLink
                  to={"https://explore-elite.web.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Live Link
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/fahim-khandakar/explore-elite-client-side"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Client Code
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/fahim-khandakar/explore-elite-server-side"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Server Code
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card shadow-xl text-center">
            <figure>
              <img src={project2} alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-2xl text-center text-[#70FF00]">
                Drive Master Pro
              </h2>
              <p className="mt-3 text-[#828282]">
                This website lets you explore a variety of cars. Create an
                account for extra features like 'Add Product' and 'My Cart.' The
                mobile-responsive design ensures easy access on any device.
                After successfully registering, logging in, adding a product, or
                placing it in your cart, receive a sweet alert confirming your
                success.
              </p>
              <div className="card-actions justify-center mt-5">
                <NavLink
                  to={"https://drive-master-pro-f36e6.web.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Live Link
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/fahim-khandakar/drive-master-pro-client-side"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Client Code
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/fahim-khandakar/drive-master-pro-server-side"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Server Code
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="card  shadow-xl text-center">
            <figure>
              <img src={project3} alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-2xl text-center text-[#70FF00]">
                Adventure Hub
              </h2>
              <p className="mt-3 text-[#828282]">
                Explore diverse tour services on our mobile-friendly website.
                Create an account for exclusive features like 'Add Service,' 'My
                Booking,' and 'My Schedules.' Enjoy a seamless experience with
                sweet alerts confirming your success after registration, login,
                and service or booking additions.
              </p>
              <div className="card-actions justify-center mt-5">
                <NavLink
                  to={"https://adventures-hub.web.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Live Link
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/fahim-khandakar/adventures-hub-client-side"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Client Code
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/fahim-khandakar/adventures-hub-server-side"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-[#70FF00] border-white">
                    Server Code
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
