import Link from "next/link";
import styles from "@/styles/homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Beauty Salon'a Hoş Geldiniz</h1>
      <p className={styles.description}>
        Randevularınızı oluşturun ve hizmetlerimizi keşfedin.
      </p>
      {/* Yeni sınıfı burada kullandık */}
      <hr className={styles.horizontalRule} />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/createAppointment">Randevu Oluştur</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/getAllAppointments">Tüm Randevuları Gör</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/addService">Yeni Hizmet Ekle</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/listAllServices">Tüm Hizmetleri Gör</Link>
        </li>
      </ul>
    </div>
  );
}
