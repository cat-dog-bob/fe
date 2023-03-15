import Image from "next/image";
import styles from "../../styles/Detail.module.css"
import shareBtn from "../../public/shareBtn.png"
import { useEffect, useState } from "react";

function Detail(){
    const [test, setTest] = useState([])
    const getData = async() => {
        await fetch("/data/product.json").then((res)=> res.json()).then((res)=>setTest(res.results))
    }

    console.log(test)

    useEffect(()=>{
        getData();
    },[])
    return  (
        <div>
            <Image 
            src={test[0]?.image}
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