"use client";

import AppointmentsList from "@/components/AppointmentsList";
import styles from "@/styles/getAllAppointments.module.css";

export default function GetAllAppointmentsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tüm Randevular</h1>
      <AppointmentsList />
    </div>
  );
}
