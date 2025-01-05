"use client";

import { useState, useEffect } from "react";
import getAllAppointmentsService from "@/services/getAllAppointmentsService";
import deleteAppointmentService from "@/services/deleteAppointmentService";
import styles from "@/styles/getAllAppointments.module.css";

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Randevuları getir
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const data = await getAllAppointmentsService();
        setAppointments(data);
      } catch (err) {
        setError("Randevular alınamadı. Lütfen daha sonra tekrar deneyin.");
      }
    }

    fetchAppointments();
  }, []);

  // Randevu silme işlemi
  const handleDelete = async (id) => {
    try {
      const message = await deleteAppointmentService(id);
      setSuccessMessage(message);

      // Silinen randevuyu listeden çıkar
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div>
      <h2 className={styles.title}>Tüm Randevular</h2>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <ul className={styles.list}>
        {appointments.map((appointment) => (
          <li key={appointment.id} className={styles.listItem}>
            <strong>{appointment.customerName}</strong> - {appointment.appointmentDate}
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(appointment.id)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
