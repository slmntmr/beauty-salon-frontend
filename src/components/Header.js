import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Beauty Salon</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
