import { motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import { MdClose } from "react-icons/md";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{8,15}$/, "Phone number must be between 8 and 15 digits")
    .required("Phone number is required"),
  group: yup.string().required("Group is required")
});

export default function ContactForm({
  onSubmit,
  onClose,
  initialData = null,
  duplicateError,
  clearDuplicateError
}) {
  const formik = useFormik({
    initialValues: initialData || {
      name: "",
      email: "",
      phone: "",
      group: "personal"
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      const submissionResult = await onSubmit(values);
      if (submissionResult !== false) {
        onClose();
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-black/40 backdrop-blur-[4px] flex items-center justify-center p-4 z-50'
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className='bg-white rounded-xl shadow-lg w-full max-w-sm relative overflow-hidden'
      >
        <div className='p-6'>
          <button
            onClick={onClose}
            className='absolute right-4 top-4 text-gray-500 rounded-lg p-2 transition-all hover:text-gray-700 hover:bg-gray-100'
          >
            <MdClose size={18} />
          </button>
          <h2 className='text-xl font-bold text-gray-900 mb-6'>
            {initialData ? "Edit Contact" : "Add Contact"}
          </h2>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={formik.values.name}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className='w-full p-3 border border-gray-300 rounded-lg transition-all focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 mt-2.5'
                placeholder='Enter name'
              />
              {formik.errors.name && formik.touched.name && (
                <span className='text-red-500 pt-10'>{formik.errors.name}</span>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formik.values.email}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className='w-full p-3 border border-gray-300 rounded-lg transition-all focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 mt-2.5'
                placeholder='Enter email'
              />
              {formik.errors.email && formik.touched.email && (
                <span className='text-red-500 pt-10'>
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Phone
              </label>
              <input
                type='tel'
                name='phone'
                value={formik.values.phone}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className='w-full p-3 border border-gray-300 rounded-lg transition-all focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 mt-2.5'
                placeholder='67838690'
              />
              {formik.errors.phone && formik.touched.phone && (
                <span className='text-red-500 pt-10'>
                  {formik.errors.phone}
                </span>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Group
              </label>
              <select
                name='group'
                value={formik.values.group}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className='w-full p-3 border border-gray-300 rounded-lg transition-all focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 mt-2.5'
              >
                <option value='professional'>Professional</option>
                <option value='personal'>Personal</option>
                <option value='work'>Business</option>
                <option value='family'>Family</option>
                <option value='friends'>Friends</option>
              </select>
              {formik.errors.group && formik.touched.group && (
                <span className='text-red-500 pt-10'>
                  {formik.errors.group}
                </span>
              )}
            </div>
            {duplicateError && (
              <div className='text-red-600 bg-red-100 p-3 mb-4 rounded border border-red-400 text-center'>
                {duplicateError}
              </div>
            )}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type='submit'
              className='w-full bg-purple-500 text-white p-3 rounded-lg font-medium border-none cursor-pointer transition-all hover:bg-purple-700 mt-6'
            >
              {initialData ? "Update Contact" : "Add Contact"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
