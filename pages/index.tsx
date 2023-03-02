import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <Head>
        <title>펫프렌즈 : 반려동물 쇼핑몰</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>잘나오나?</div>
    </div>
  );
}

export default Home;
