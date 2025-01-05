import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Beauty Salon'a Hoş Geldiniz</h1>
      <p style={{ textAlign: "center" }}>
        Randevularınızı oluşturun ve hizmetlerimizi keşfedin.
      </p>
      <hr />
      <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            href="/createAppointment"
            style={{ color: "#4CAF50", fontWeight: "bold", textDecoration: "none" }}
          >
            Randevu Oluştur
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            href="/getAllAppointments"
            style={{ color: "#4CAF50", fontWeight: "bold", textDecoration: "none" }}
          >
            Tüm Randevuları Gör
          </Link>
        </li>
      </ul>
    </div>
  );
}
