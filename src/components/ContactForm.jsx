import React from "react";
import { motion } from "framer-motion";
import { contactSchema } from "../Schemas/ValidationSchema";
import { MdClose } from "react-icons/md";
import style from "../components/ContactForm.module.css";


export default function ContactForm({ onSubmit, onClose, initialData = null }) {
  const [formData, setFormData] = React.useState(
    initialData || {
      name: "",
      email: "",
      phone: "",
      group: "personal",
    }
  );

  // Add state for validation errors
  const [errors, setErrors] = React.useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data
      await contactSchema.validate(formData, { abortEarly: false });

      // Clear errors if validation succeeds
      setErrors({});
      onSubmit(formData);
      onClose();
    } catch (validationErrors) {
      // Handle validation errors
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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
              <label className={style.fromLabel}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={style.formInput}
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
              />
              {errors.phone && (
                <span className={style.error}>{errors.phone}</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.fromLabel}>Group</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                className={style.formSelect}
              >
                <option value="professional">Professional</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
              </select>
              {errors.group && (
                <span className={style.error}>{errors.group}</span>
              )}
            </div>
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
