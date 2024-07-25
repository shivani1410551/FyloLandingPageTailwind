import * as Yup from "yup";
import { Field, Form, ErrorMessage, Formik } from "formik";
import Feature from "./Feature";
const formSchema = Yup.object({
  email: Yup.string().email().required("Please check your email"),
});
const Hero = () => {
  return (
    <div>
      <section className="intro mx-auto xs:p-6 md:p-8  mt-8 mb-20 md:grid md:grid-cols-2 md:justify-center md:content-center md:gap-4">
        <img
          src="./assets/images/illustration-1.svg"
          alt="illustration-1"
          className="xs:h-[14rem]  md:h-[20rem] mx-auto xs:mb-8  md:col-start-2"
        />
        <div className="text-box font-primary text-center md:row-start-1 md:p-4">
          <h1 className="font-bold xs:text-2xl text-slate-700 md:text-justify md:text-[2rem] md:leading-[2.5rem]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="xs:text-sm xs:py-4 text-DesaturatedBlue md:text-justify md:text-lg">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(value) => {
              console.log(value.email);
              validationSchema = formSchema;
            }}
          >
            <Form className="md:grid md:grid-cols-3 md:gap-2">
              {" "}
              <label htmlFor="email"></label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="border border-black border-solid sm:py-2 indent-2 my-4 rounded  outline-none 
                  placeholder:text-xs text-black w-full
              md:col-start-1
              md:col-end-3
 
                "
              />
              <ErrorMessage
                name="email"
                className="text-red-400 sm:text-xs md:text-base py-2"
              />
              <button
                type="submit"
                className="text-LightGrayishBlue bg-BrightBlue py-2 my-4 rounded  md:col-start-3
              hover:bg-blue-300
                outline-none sm:w-full "
              >
                Get Started
              </button>
            </Form>
          </Formik>
        </div>
      </section>

      {/* feature section */}
      <Feature />
    </div>
  );
};

export default Hero;
