"use client";

import { useState, useEffect } from "react";
import getAllAppointmentsService from "@/services/getAllAppointmentsService";
import styles from "@/styles/getAllAppointments.module.css";

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <ul className={styles.list}>
      {appointments.map((appointment) => (
        <li key={appointment.id} className={styles.listItem}>
          <strong>{appointment.customerName}</strong> - {appointment.appointmentDate}
        </li>
      ))}
    </ul>
  );
}
