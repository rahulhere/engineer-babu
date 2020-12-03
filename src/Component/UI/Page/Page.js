import styles from "./Page.module.css";

const Page = (props) => {
  return (
    <div className={styles.Page}>
      <div className={styles.PageHeader}>{props.header}</div>
      {props.children}
      <div className={styles.PageFooter}>
        <p className={styles.FooterText}>{props.footerText}</p>
        <div className={styles.FooterButton}>{props.footerButtonText}</div>
      </div>
    </div>
  );
};

export default Page;
