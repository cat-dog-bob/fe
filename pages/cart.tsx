import CartList from '@/components/cart/CartList';
import CartResult from '@/components/cart/CartResult';
import styles from '@/styles/Cart.module.css';
export default function Cart() {
  return (
    <main className={styles.cart}>
      <CartList />
      <CartResult />
    </main>
  );
}
