export default async function addServiceService(data) {
  try {
    const response = await fetch("http://localhost:8080/api/services/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Hizmet eklenemedi!");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
