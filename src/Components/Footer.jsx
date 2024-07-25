const Footer = () => {
  return (
    <div className="bg-VeryDarkBlue text-LightGrayishBlue">
      <img
        src={"./assets/images/logocopy.svg"}
        alt="logo footer"
        className="pt-12 pl-8"
      />
      <div
        className="mx-auto xs:p-6 md:p-8  xs:space-y-8 xs:text-sm  md:grid md:grid-cols-5 md:gap-x-4
   
      "
      >
        {" "}
        <div className="address-box md:col-span-2 ">
          <ul className="xs:space-y-4 xs:text-sm">
            <li>
              <a
                href="#"
                aria-label="phone"
                className="block    hover:text-blue-400"
              >
                {" "}
                <img
                  src={"./assets//images/icon-phone.svg"}
                  alt="phone"
                  className="inline-block xs:mr-4    hover:text-blue-400"
                />
                Phone: +1-543-123-4567
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="email"
                className="block    hover:text-blue-400"
              >
                <img
                  src={"./assets//images/icon-email.svg"}
                  alt="email"
                  className="inline-block mr-4    hover:text-blue-400"
                />
                example@fylo.com
              </a>
            </li>
          </ul>
        </div>
        <div className="about-us ">
          <ul className="xs:space-y-3    ">
            <li className="   hover:text-blue-400">About Us</li>
            <li className="   hover:text-blue-400">Jobs</li>
            <li className="   hover:text-blue-400">Press</li>
            <li className="   hover:text-blue-400">Blog</li>
          </ul>
        </div>
        <div className="contact-us">
          <ul className="xs:space-y-3">
            <li className="   hover:text-blue-400">Contact Us</li>
            <li className="   hover:text-blue-400"> Terms</li>
            <li className="   hover:text-blue-400">Privacy</li>
          </ul>
        </div>
        <ul className="socials xs:flex xs:space-x-4 xs:justify-center">
          <li className="   hover:text-blue-400">
            <a href="#" aria-label="facebook">
              {" "}
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className="   hover:text-blue-400">
            <a href="#" aria-label="twitter">
              {" "}
              <i class="fa-brands fa-square-twitter"></i>
            </a>
          </li>
          <li className="   hover:text-blue-400">
            <a href="#" aria-label="instagram">
              {" "}
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
