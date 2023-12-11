import img from "/FLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-[#828282] ">
        <aside className=" mx-auto  md:mx-0 text-center md:text-left">
          <img className="w-1/3 mx-auto" src={img} alt="My Logo" />

          <p className="text-[#70FF00] w-full text-3xl font-bold">
            Fahim Khandakar
          </p>
        </aside>
        <nav>
          <header className="footer-title text-[#70FF00]">Address</header>
          <a className="link link-hover">Email: fahimkhandakar01@gmail.com</a>
          <a className="link link-hover">Mipur-1, Dhaka-1216.</a>
        </nav>
        <nav>
          <header className="footer-title text-[#70FF00]">Projects</header>
          <a
            href="https://explore-elite.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Explore Elite
          </a>
          <a
            href="https://adventures-hub.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Adventure Hub
          </a>
          <a
            href="https://drive-master-pro-f36e6.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Drive Master Pro
          </a>
        </nav>
        <nav>
          <header className="footer-title text-[#70FF00]">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
