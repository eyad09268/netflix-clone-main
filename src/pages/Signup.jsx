import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuthContext } from "../context/Authcontext";
import { toast } from "react-toastify";
export default function Signup() {
  const navigate = useNavigate()
  const{user,SignUp} = useAuthContext()
  let validate = Yup.object().shape({
    email: Yup.string().email("email is invalid").required("email is invalid"),

    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password must be uppercase")
      .required(),
  });
  const Register = async(values) => {
    try {
      await SignUp(values.email, values.password)
      toast.success("account created successfully")
      
      navigate('/')
    }catch (err) {
      console.log(err)
    }
  };

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: Register,
      validationSchema: validate,
    });
  return (
    <div className=" w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className=" fixed bg-black/60 inset-0">
        <div className=" fixed w-full px-4 py-24 z-50">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className=" max-w-[320px] mx-auto py-16">
              <h1 className="font-bold text-3xl"> Sign Up</h1>
              <form onSubmit={handleSubmit} className=" flex flex-col py-4">
                <input
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" p-3 my-2 bg-gray-500 rounded "
                  placeholder="Email"
                  autoComplete="email"
                  type="email"
                />
                {errors.email && touched.email && (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </div>
                )}
                <input
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" p-3 my-2 bg-gray-500 rounded "
                  placeholder="Password"
                  autoComplete="current-password"
                  type="password"
                />
                  {errors.password && touched.password && (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {errors.password}
                  </div>
                )}
                <button className=" bg-red-600 py-3 my-6 rounded font-bold">
                  {" "}
                  Sign Up
                </button>
                <div className=" flex justify-between items-center text-gray-600 text-sm">
                  <p>
                    {" "}
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className=" py-4 space-x-3">
                  {" "}
                  <span className="text-gray-500">
                    {" "}
                    Already subscribed to Netflix?
                  </span>
                  <Link to={"/login"}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
