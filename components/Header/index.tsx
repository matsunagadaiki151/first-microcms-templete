import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <p>microCMSテンプレートで作成したサンプルブログ</p>
      </Link>
    </header>
  );
}
