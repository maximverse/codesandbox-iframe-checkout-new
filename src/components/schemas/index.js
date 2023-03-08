import * as yup from "yup";

const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup
    .number()
    .required("Required")
    .min(6, "Please enter a valid phone number"),
  fullName: yup
    .string()
    .min(2, "Name is too short")
    .required("Please enter your full name")
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name."),
});
export default basicSchema;
