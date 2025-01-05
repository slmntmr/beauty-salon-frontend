"use client";

import { useState } from "react";
import styles from "@/styles/addService.module.css";
import addServiceService from "@/services/addServiceService";

export default function AddServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
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

    if (!formData.name || !formData.price || !formData.duration) {
      setErrorMessage("Lütfen gerekli tüm alanları doldurunuz.");
      setIsSubmitting(false);
      return;
    }

    const dataToSend = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      duration: parseInt(formData.duration, 10),
    };

    try {
      const response = await addServiceService(dataToSend);
      setSuccessMessage(`Hizmet başarıyla eklendi! Hizmet: ${response.name}`);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Yeni Hizmet Ekle</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Hizmet Adı</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Hizmet adını girin"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Açıklama</label>
          <textarea
            id="description"
            name="description"
            placeholder="Hizmet açıklamasını girin"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Fiyat</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Fiyatı girin"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="duration">Süre (dakika)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="Süreyi girin"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Gönderiliyor..." : "Hizmet Ekle"}
        </button>
      </form>

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
