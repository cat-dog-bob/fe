import styles from './CartResult.module.css';
import Button from '@/components/Button';

export default function CartResult() {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.box}>
          <span className={styles.description}>상품금액</span>
          <span className={styles.price}>45,000원</span>
        </div>
        <div className={styles.box}>
          <span className={styles.description}>할인가</span>
          <span className={styles.price}>-6,300원</span>
        </div>
        <div className={styles.box}>
          <span className={styles.description}>배송비</span>
          <span className={styles.price}>무료</span>
        </div>
        <div className={styles.result}>
          <span className={styles['total-description']}>총 결제 금액</span>
          <span className={styles['total-price']}>38,700원</span>
        </div>
        <div className={styles.guide}>
          <p>&#183;&#32; 주문/결제 페이지에서 쿠폰 및 적립금 사용 가능합니다.</p>
          <p>
            &#183;&#32; 상품 쿠폰 적용금액 2만원 이상 시 배송비 무료
            <br />
            &nbsp;&nbsp;(업체직배송 상품금액 제외)
          </p>
        </div>
        <div className={styles.buy}>
          <div className={styles['buy-price']}>38,700원</div>
          <Button className="cart-buy">구매하기</Button>
        </div>
      </div>
    </section>
  );
}
