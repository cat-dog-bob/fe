import CartList from '@/components/cart/list/CartList';
import CartResult from '@/components/cart/result/CartResult';
import styles from '@/styles/Cart.module.css';
export default function Cart() {
  return (
    <main className={styles.cart}>
      <CartList />
      <CartResult />
    </main>
  );
}
