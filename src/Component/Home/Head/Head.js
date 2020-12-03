import styles from "./Head.module.css";
import homeImage from "./../../../Assets/svgs/home-image.svg";

const Head = () => {
  return (
    <div className={styles.Head}>
      <div className={styles.main}>
        <h2>
          Expect experienced engineers, nothing less! Hire skilled engineers
          today in any domain.
        </h2>
        <p>5000+ satisfied customers Whatever the sector,</p>
        <p>we’ll have an engineer that fits right in.</p>
        <button>view all case studies</button>
      </div>
      <div className={styles.imageDiv}>
        <img src={homeImage} alt="Comapanies" />
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default Head;
