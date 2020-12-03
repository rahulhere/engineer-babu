import styles from "./Loader.module.css";
import loader from "./../../../Assets/svgs/loader.svg";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <img src={loader} alt="Loading" />
    </div>
  );
};

export default Loader;
