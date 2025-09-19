"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  MailOutline,
  LockClosedOutline,
  PersonOutline,
  CloseOutline,
} from "react-ionicons";

export default function HomePage() {
  const [isLoginActive, setIsLoginActive] = useState(true); // toggle login/register
  const [isPopupActive, setIsPopupActive] = useState(false); // toggle popup wrapper

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.logo}>Logo</h2>
        <nav className={styles.navigation}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button
            className={styles["btnLogin-popup"]}
            onClick={() => setIsPopupActive(true)}
          >
            Login
          </button>
        </nav>
      </header>

      <main>
        <div
          className={`${styles.wrapper} ${
            isPopupActive ? styles["active-popup"] : ""
          } ${!isLoginActive ? styles.active : ""}`}
        >
          <span
            className={styles["icon-close"]}
            onClick={() => setIsPopupActive(false)}
          >
            <CloseOutline width="24px" height="24px" color="#ffffff" />
          </span>

          {/* Login Form */}
          {isLoginActive && (
            <div className={`${styles["form-box"]} ${styles.login}`}>
              <h2 className={styles.h2}>Login</h2>
              <form action="#">
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <MailOutline width="20px" height="20px" color="#e2b09f" />
                  </span>
                  <input type="email" required name="email" />
                  <label>Email</label>
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <LockClosedOutline
                      width="20px"
                      height="20px"
                      color="#e2b09f"
                    />
                  </span>
                  <input type="password" required name="password" />
                  <label>Password</label>
                </div>
                <div className={styles["remember-forgot"]}>
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className={styles.btn}>
                  Login
                </button>
                <div className={styles["login-register"]}>
                  <p>
                    Don&apos;t have an account?{" "}
                    <span
                      className={styles["register-link"]}
                      onClick={() => setIsLoginActive(false)}
                    >
                      Register
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* Register Form */}
          {!isLoginActive && (
            <div className={`${styles["form-box"]} ${styles.register}`}>
              <h2 className={styles.h2}>Registration</h2>
              <form action="#">
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <PersonOutline width="20px" height="20px" color="#e2b09f" />
                  </span>
                  <input type="text" required name="username" />
                  <label>Username</label>
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <MailOutline width="20px" height="20px" color="#e2b09f" />
                  </span>
                  <input type="email" required name="email" />
                  <label>Email</label>
                </div>
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <LockClosedOutline
                      width="20px"
                      height="20px"
                      color="#e2b09f"
                    />
                  </span>
                  <input type="password" required name="password" />
                  <label>Password</label>
                </div>
                <div className={styles["remember-forgot"]}>
                  <label>
                    <input type="checkbox" /> Agree to terms & conditions
                  </label>
                </div>
                <button type="submit" className={styles.btn}>
                  Register
                </button>
                <div className={styles["login-register"]}>
                  <p>
                    Already have an account?{" "}
                    <span
                      className={styles["login-link"]}
                      onClick={() => setIsLoginActive(true)}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <footer></footer>
    </>
  );
}
