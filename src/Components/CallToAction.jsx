import * as Yup from "yup";
import { Field, Form, ErrorMessage, Formik } from "formik";

const formSchema = Yup.object({
  email: Yup.string().email().required("Please check your email"),
});
const CallToAction = () => {
  return (
    <div className="bg-DesaturatedBlue mt-8 py-8">
      <div className="cta-text  mx-auto xs:p-8  lg:p-6 lg:grid lg:grid-cols-2">
        <div
          className="text-LightGrayishBlue
          justify-center
          p-4
          xs:space-y-4
"
        >
          <h2
            className="font-primary font-bold sm:text-xl
        xs:text-center
        lg:text-justify
        "
          >
            Get early access today
          </h2>
          <p
            className="xs:text-[0.8rem] text-slate-200 xs:text-center
          lg:w-[25rem]
          lg:text-sm
          lg:text-justify"
          >
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(value,resetForm) => {
            console.log(value.email);
             resetForm();
            validationSchema = formSchema;
          }}
        >
          <Form className=" justify-self-center">
            {" "}
            <label htmlFor="FooterEmail"> </label>
            <Field
              type="text"
              name="email"
              id="FooterEmail"
              placeholder="Enter your email address"
              className="border border-black border-solid  indent-2 my-4 rounded  outline-none placeholder:text-xs text-black xs:w-full
              xs:py-1 
                "
            />
            <ErrorMessage
              name="email"
              className="text-red-400 sm:text-xs md:text-base py-2"
            />
            <button
              type="submit"
              className="text-LightGrayishBlue bg-BrightBlue rounded  outline-none 
              xs:w-full xs:p-1
              lg:w-1/2
              lg:text-xs
              lg:py-2
              hover:bg-blue-300
              "
            >
              Get Started For Free
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CallToAction;
