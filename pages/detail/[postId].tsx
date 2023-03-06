import Image from "next/image";
import styles from "../../styles/Detail.module.css"
import shareBtn from "../../public/shareBtn.png"

function Detail(){
    return  (
        <div>
            <Image src={`https://image.bom.co.kr/product/detail/RFP/1912260440243588/_600.jpg`}
            alt="사료"
            width={800}
            height={500} />
            <Image src={shareBtn} alt="공유하기" width={60} height={60} className={styles.sharebutton}/>
            <h2 className={styles.titlename}>위스카스 고양이 사료 포켓 참치 3kg</h2>

            <p className={styles.pricebox}><span className={styles.price}>24070</span> 원</p>
            <button className={styles.addcart}>장바구니담기</button>
        </div>
    )
}

export default Detail;