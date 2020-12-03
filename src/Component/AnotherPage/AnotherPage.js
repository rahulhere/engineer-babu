import styles from "./AnotherPage.module.css";
import Page from "./../UI/Page/Page";

const AnotherPage = () => {
  return (
    <div className={styles.AnotherPage}>
      <Page
        header={<p className={styles.HeaderPara}>This is header text</p>}
        footerText="Any footer text here"
        footerButtonText="talk to me"
      >
        This is the body of this imaginary ANOTHER PAGE!
      </Page>
    </div>
  );
};

export default AnotherPage;
