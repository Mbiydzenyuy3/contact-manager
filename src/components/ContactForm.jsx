import { motion } from "framer-motion";
import * as yup from "yup";
import { useState } from "react";
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
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      email: "",
      phone: "",
      group: "personal",
    }
  );

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await contactSchema.validate(formData, { abortEarly: false });

      setErrors({});

      // Handle submission result
      const submissionResult = await onSubmit(formData);
      if (submissionResult !== false) {
        onClose();
      }
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    clearDuplicateError?.();
  };

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
          <form onSubmit={handleSubmit} className={style.formSpace} noValidate>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={style.formInput}
                placeholder="Enter name"
              />
              {errors.name && (
                <span className={style.error}>{errors.name}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={style.formInput}
                placeholder="Enter email"
              />
              {errors.email && (
                <span className={style.error}>{errors.email}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={style.formInput}
                placeholder="67838690"
                pattern="[0-9]{10}"
              />
              {errors.phone && (
                <span className={style.error}>{errors.phone}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Group</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                className={style.formSelect}
              >
                <option value="professional">Professional</option>
                <option value="personal">Personal</option>
                <option value="work">Business</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
              </select>
              {errors.group && (
                <span className={style.error}>{errors.group}</span>
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
