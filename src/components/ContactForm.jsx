import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import style from "../components/ContactForm.module.css";

const ContactForm = ({ onSubmit, onClose, initialData = null }) => {
  const [formData, setFormData] = React.useState(
    initialData || {
      name: "",
      email: "",
      phone: "",
      group: "personal",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
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
            <MdClose size={20} />
          </button>
          <h2 className={style.formTitle}>
            {initialData ? "Edit Contact" : "Add Contact"}
          </h2>
          <form onSubmit={handleSubmit} className={style.formSpace}>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={style.formInput}
                required
                placeholder="Enter name"
              />
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={style.formInput}
                required
                placeholder="Enter email"
              />
            </div>
            <div className={style.formGroup}>
              <label className={style.fromLabel}>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={style.formInput}
                required
                placeholder="Enter phone number"
              />
            </div>
            <div className={style.formGroup}>
              <label className={style.fromLabel}>Group</label>
              <select
                value={formData.group}
                onChange={(e) =>
                  setFormData({ ...formData, group: e.target.value })
                }
                className={style.formSelect}
              >
                <option value="personal">Professional</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
              </select>
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
};

export default ContactForm;
