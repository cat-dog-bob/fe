import Button from '@/components/Button';
import CartSelectButton from '../button/CartSelectButton';
import styles from './CartList.module.css';
import CartItem from '../item/CartItem';

export default function CartList() {
  return (
    <section className={styles.section}>
      <div className={styles['select-all']}>
        <div>
          <CartSelectButton />
          <span>전체선택</span>
        </div>
        <div>
          <Button className="cart-basic">전체삭제</Button>
          <Button className="cart-basic">1개 삭제</Button>
        </div>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
    </section>
  );
}
