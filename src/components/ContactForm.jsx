import { motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import { MdClose } from "react-icons/md";
import style from "../components/ContactForm.module.css";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{8,15}$/, "Phone number must be between 8 and 15 digits")
    .required("Phone number is required"),
  group: yup.string().required("Group is required"),
});

export default function ContactForm({
  onSubmit,
  onClose,
  initialData = null,
  duplicateError,
  clearDuplicateError,
}) {
  const formik = useFormik({
    initialValues: initialData || {
      name: "",
      email: "",
      phone: "",
      group: "personal",
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      const submissionResult = await onSubmit(values);
      if (submissionResult !== false) {
        onClose();
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.modalOverlay}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={style.modalContent}
      >
        <div className={style.formContainer}>
          <button onClick={onClose} className={style.closeButton}>
            <MdClose size={18} />
          </button>
          <h2 className={style.formTitle}>
            {initialData ? "Edit Contact" : "Add Contact"}
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className={style.formSpace}
            noValidate
          >
            <div className={style.formGroup}>
              <label className={style.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className={style.formInput}
                placeholder="Enter name"
              />
              {formik.errors.name && formik.touched.name && (
                <span className={style.error}>{formik.errors.name}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className={style.formInput}
                placeholder="Enter email"
              />
              {formik.errors.email && formik.touched.email && (
                <span className={style.error}>{formik.errors.email}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className={style.formInput}
                placeholder="67838690"
              />
              {formik.errors.phone && formik.touched.phone && (
                <span className={style.error}>{formik.errors.phone}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Group</label>
              <select
                name="group"
                value={formik.values.group}
                onChange={(e) => {
                  formik.handleChange(e);
                  clearDuplicateError?.();
                }}
                className={style.formSelect}
              >
                <option value="professional">Professional</option>
                <option value="personal">Personal</option>
                <option value="work">Business</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
              </select>
              {formik.errors.group && formik.touched.group && (
                <span className={style.error}>{formik.errors.group}</span>
              )}
            </div>
            {duplicateError && (
              <div className={style.duplicateError}>{duplicateError}</div>
            )}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className={style.submitButton}
            >
              {initialData ? "Update Contact" : "Add Contact"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
