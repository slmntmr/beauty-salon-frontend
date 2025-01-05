"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/listAllServices.module.css";
import getAllServicesService from "@/services/getAllServicesService";

export default function ServicesList() {
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getAllServicesService();
        setServices(servicesData);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mevcut Hizmetler</h2>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {!errorMessage && services.length === 0 && <p>Yükleniyor...</p>}
      <ul className={styles.servicesList}>
        {services.map((service) => (
          <li key={service.id} className={styles.serviceItem}>
            <h3>{service.name}</h3>
            <p>Açıklama: {service.description || "Belirtilmemiş"}</p>
            <p>Fiyat: {service.price} ₺</p>
            <p>Süre: {service.duration} dakika</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
