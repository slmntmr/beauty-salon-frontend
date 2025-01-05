"use client"; // Client Component olduğunu belirtir

import { useState } from "react";
import styles from "@/styles/createAppointment.module.css";
import createAppointmentService from "@/services/createAppointmentService";

export default function CreateAppointmentForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    appointmentDate: "",
    phoneNumber: "",
    salonServiceName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      const response = await createAppointmentService(formData);
      setSuccessMessage("Randevunuz başarıyla oluşturuldu!");
      console.log(response);
    } catch (error) {
      setErrorMessage(error.message || "Bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Randevu Oluştur</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="customerName">Müşteri Adı</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Adınızı girin"
            value={formData.customerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="appointmentDate">Randevu Tarihi</label>
          <input
            type="datetime-local"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Telefon Numarası</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="05xx xxx xx xx"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="salonServiceName">Hizmet Adı</label>
          <input
            type="text"
            id="salonServiceName"
            name="salonServiceName"
            placeholder="Hizmeti girin"
            value={formData.salonServiceName}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Gönderiliyor..." : "Randevu Oluştur"}
        </button>
      </form>

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
