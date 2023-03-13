import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';

function Home() {
  return (
    <div>
      <Head>
        <title>캣독밥 : 반려동물 쇼핑몰</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <header>
          <div className={styles.headerWrapper}>
            <h1>캣독밥</h1>
            <div className={styles.switchWrapper}>
              <button className={styles.switcher} type="button">
                강아지
              </button>
              <button className={styles.switcher} type="button">
                고양이
              </button>
            </div>
          </div>

          <section className={styles.navWrapper}>
            <input className={styles.searchInput} type="search" placeholder="어떤 상품을 찾고 있냥?" />
            <button style={{ padding: '5px' }} type="button">
              <BiSearch style={{ color: '#3e3e3e', fontSize: 24 }} />
            </button>
            <button style={{ padding: '5px' }} type="button">
              <BiShoppingBag style={{ color: '#3e3e3e', fontSize: 24 }} />
            </button>
          </section>
        </header>


      </div>
    </div>
  );
}

export default Home;
