import styles from "@/app/(beforeLogin)/_component/main.module.css";
import nLogo from "/nLogo.webp";
import Image from "next/image";
import Link from "next/link";
export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={nLogo} alt="logo" priority={true} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signupButton}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={styles.loginButton}>
          로그인
        </Link>
      </div>
    </>
  );
}
