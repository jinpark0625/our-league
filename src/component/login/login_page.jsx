import React from "react";
import styles from "./login.module.css";

const Login_page = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.login_bg}>
        <img
          src="./images/login_bg.jpg"
          alt="login_bg"
          className={styles.login_img}
        />
      </div>
      <div className={styles.login_form_wrap}>
        <div className={styles.login_form}>
          <h3 className={styles.title}>로그인</h3>
          <input
            type="text"
            placeholder="이메일 주소"
            name="id"
            className={`${styles.id} ${styles.input}`}
          />
          <input
            type="text"
            placeholder="비밀번호"
            name="password"
            className={`${styles.passwords} ${styles.input}`}
          />
          <div className={styles.login_btn_wrap}>
            <button className={styles.login_btn}>로그인</button>
            <p>
              계정을 잊으셨나요?{" "}
              <span className={styles.find_btn}>ID 찾기</span> 또는{" "}
              <span className={styles.find_btn}>비밀번호찾기</span>
            </p>
          </div>
          <p className={styles.sign_up}>
            아직 회원이 아닌가요?{" "}
            <span className={styles.sign_up_btn}>회원가입하기 ></span>
          </p>
          <div className={styles.sign_sns_title_wrap}>
            <p className={styles.sign_sns_title}>다른방법으로 로그인</p>
            <div className={styles.border}></div>
          </div>
          <ul className={styles.sns_btn_wrap}>
            <li className={styles.sns_btn_li}>
              <button className={`${styles.sns_btn} ${styles.naver}`}>
                Naver
              </button>
            </li>
            <li className={styles.sns_btn_li}>
              <button className={`${styles.sns_btn} ${styles.google}`}>
                Google
              </button>
            </li>
            <li className={styles.sns_btn_li}>
              <button className={`${styles.sns_btn} ${styles.kakao}`}>
                Kakao
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Login_page;
