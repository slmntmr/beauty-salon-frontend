export default async function getAllServicesService() {
  try {
    const response = await fetch("http://localhost:8080/api/services/list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Hizmetler yüklenemedi. Lütfen daha sonra tekrar deneyin.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
