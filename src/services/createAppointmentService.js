export default async function createAppointmentService(data) {
  try {
    const response = await fetch("http://localhost:8080/api/appointments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error || "Randevu oluşturulamadı!");
    }

    return responseData.message; // Başarı mesajını döndür
  } catch (error) {
    throw new Error(error.message);
  }
}
