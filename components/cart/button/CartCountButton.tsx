import Button from '@/components/Button';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styles from './CartCountButton.module.css';

export default function CartCountButton() {
  return (
    <div className={styles['count-box']}>
      <Button className="cart-minus">
        <AiOutlineMinus />
      </Button>
      <span className={styles.number}>1</span>
      <Button className="cart-plus">
        <AiOutlinePlus />
      </Button>
    </div>
  );
}
