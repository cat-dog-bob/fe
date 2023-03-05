import Button from '../Button';
import ModalPortal from '../modal/ModalPortal';
import CartCountButton from './CartCountButton';
import styles from '@/styles/CartModal.module.css';

export default function CartModal() {
  return (
    <ModalPortal>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.top}>1개당 38,700원</div>
        <div className={styles.information}>
          <CartCountButton />
          <p className={styles.total}>
            총 <span className={styles.price}>38,700</span>원
          </p>
        </div>
        <Button className="cart-add">장바구니 담기</Button>
      </div>
    </ModalPortal>
  );
}
