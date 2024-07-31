import React from "react";

const Feature = () => {
  return (
    <section className="feature">
      <img
        src="./assets/images/bg-curve-mobile.svg"
        alt="mobile-bg"
        className="xxs:block xs:hidden bg-no-repeat mx-auto"
      />
      <img
        src="./assets/images/bg-curve-desktop.svg"
        alt="desktop-bg"
        className="xs:block xxs:hidden bg-no-repeat "
      />

      <div className="features-section mx-auto xs:p-6 md:p-8 bg-LightGrayishBlue md:grid md:grid-cols-2">
        <img
          src="./assets/images/illustration-2.svg"
          alt="illustration-2"
          className="xs:h-[14rem]  md:h-[20rem] mx-auto xs:mb-8 md:col-start-2 "
        />
        <div className="feature-text md:row-start-1 md:p-4">
          <h2 className="font-bold xs:text-lg text-slate-700 xs:text-center pt-4 md:text-justify md:text-2xl">
            Stay productive, wherever you are
          </h2>
          <p
            className="xs:text-sm xs:py-4 text-DesaturatedBlue 
          md:text-justify md:text-base"
          >
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p
            className="xs:text-sm xs:py-4 text-DesaturatedBlue
          md:text-justify md:text-base "
          >
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <a
            href="#"
            className="
            xs:text-center  no-underline border-b border-solid  w-fit xxs:text-[0.85em] text-Cyan pb-[0.5rem]
            
            md:text-justify
            sm:mx-auto  xs:my-6   border-ModerateCyan text-ModerateCyan sm:text-xs  md:text-sm hover:text-green-200
            hover:border-green-200"
          >
            See how Fylo works
            <img
              src="./assets/images/icon-arrow.svg"
              alt="arrow"
              className="
              ml-[0.5rem] h-4
              inline-block hover:opacity-50"
            />
          </a>
          <div className="testimonial          shadow bg-white my-4 p-6 rounded md:w-[20rem]">
            <img
              src="./assets/images/icon-quotes.svg"
              alt="quotes"
              className="xs:h-4"
            />
            <p className="xs:text-xs xs:py-4 text-DesaturatedBlue">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="testimonialProfile flex items-center space-x-2 font-primary">
              <img
                src="./assets/images/avatar-testimonial.jpg"
                alt="avatar"
                className="h-8 w-8 rounded-full "
              />
              <div className="avatarData font-primary ">
                <h3 className="xs:text-xs font-bold ">Kyle Burton</h3>
                <h4 className="xs:text-xs">Founder & CEO, Huddle</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
