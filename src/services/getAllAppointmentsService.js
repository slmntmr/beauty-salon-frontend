export default async function getAllAppointmentsService() {
  const response = await fetch("http://localhost:8080/api/appointments/all");

  if (!response.ok) {
    throw new Error("Randevular alınamadı!");
  }

  return response.json();
}
