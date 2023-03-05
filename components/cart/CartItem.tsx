import CartSelectButton from './CartSelectButton';
import styles from '@/styles/CartItem.module.css';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import Button from '../Button';
import CartCountButton from './CartCountButton';

export default function CartItem() {
  return (
    <div className={styles['product-box']}>
      <CartSelectButton />
      <span className={styles['product-name']}>촉촉트릿 북어 80g</span>
      <div className={styles['product-info']}>
        <Image src="/next.svg" alt="촉촉트릿 북어 80g" width={100} height={100} />
        <div>
          <span className={styles['product-price']}>38,700원</span>
          <CartCountButton />
        </div>
        <Button className="cart-close">
          <GrClose />
        </Button>
      </div>
    </div>
  );
}
