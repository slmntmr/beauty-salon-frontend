export default async function deleteAppointmentService(id) {
  try {
    const response = await fetch(`http://localhost:8080/api/appointments/cancel/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Randevu silinemedi. Lütfen tekrar deneyin.");
    }

    return await response.text(); // Backend'den dönen başarı mesajını alıyoruz
  } catch (error) {
    throw new Error(error.message);
  }
}
