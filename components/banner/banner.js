import styles from "./banner.module.css";

export const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Coffee<span>fy</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={props.handleBtnBannerClick}>
        {props.buttonLabel}
      </button>
    </div>
  );
};
