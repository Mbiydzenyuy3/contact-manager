import * as yup from "yup";
export const contactSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  group: yup.string().required("Group is required"),
});
