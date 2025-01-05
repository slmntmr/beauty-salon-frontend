export default async function createAppointmentService(data) {
  try {
    const response = await fetch("http://localhost:8080/api/appointments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Hata durumunda mesaj döndür
      const errorData = await response.json();
      throw new Error(errorData.message || "Randevu oluşturulamadı!");
    }

    // Başarılı yanıtı döndür
    return await response.json();
  } catch (error) {
    // Hata durumunda hatayı fırlat
    throw new Error(error.message);
  }
}
