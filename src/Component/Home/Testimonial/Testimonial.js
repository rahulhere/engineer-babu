import styles from "./Testimonial.module.css";
import star from "./../../../Assets/svgs/star.svg";
import downArrow from "./../../../Assets/svgs/home-downArrow.svg";

const Testimonial = (props) => {
  return (
    <div className={styles.Testimonial}>
      <div className={styles.imageDiv}>
        <img src={props.img} alt={props.imgAlt} />
      </div>
      <div className={styles.textDiv}>
        <p>{props.children}</p>
        <div className={styles.stars}>
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
        </div>
      </div>
      <img className={styles.downArrow} src={downArrow} alt="" />
      <h4>{props.user}</h4>
      <p>{props.post}</p>
    </div>
  );
};

export default Testimonial;
