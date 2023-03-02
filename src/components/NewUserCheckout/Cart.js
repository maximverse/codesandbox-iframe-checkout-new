import styles from "./cart.module.css";
import Product from "./Product";
export default function Cart(props) {
  return (
    <>
      <div className={styles.blur}>
        <div className={styles.cartContainer}></div>
      </div>
      <div className={styles.container1}>
        <Product />
        <Product />

        <div className={styles.separator}></div>

        <div id="costs">
          <div className={styles.costsVariables}>
            <div className={styles.variables}>
              Subtotal:
              <span>
                <svg
                  className={styles.arrow}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00037 1.2002L4.60037 4.8002L8.20037 1.2002"
                    stroke="#9CA3AF"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.pricing}>$100,00</div>
          </div>
        </div>

        <div className={styles.costsVariables}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.subvariable}>x1 Tates Bugatti</div>
            <div
              className={`${styles.subvariable} ${styles.subvar} ${styles.subvar2}`}
            >
              x1 Tates Bugatti
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={`${styles.pricing} ${styles.sub}`}>$59,00</div>
            <div className={`${styles.pricing} ${styles.sub} ${styles.sub2}`}>
              $59,00
            </div>
          </div>
        </div>

        <div className={styles.costsVariables2}>
          <div className={styles.variables}>
            Shipping & handling: <span> </span>
          </div>
          <div className={styles.pricing}>$59,00</div>
        </div>
        <div className={styles.costsVariables2}>
          <div className={styles.variables}>
            Applied coupon: <span> </span>
          </div>
          <div className={styles.pricing}>(-10%) $2.99</div>
        </div>
        <div className={styles.costsVariables2}>
          <div className={`${styles.variables} ${styles.total}`}>
            Total: <span> </span>
          </div>
          <div className={`${styles.pricing} ${styles.total}`}>$1.404,99</div>
        </div>
      </div>
    </>
  );
}
