import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.Item}>
      <img src={props.img} alt={props.imgAlt} />
      <div className={styles.textDiv}>
        <h4>{props.heading}</h4>
        <p>{props.subHeading}</p>
      </div>
    </div>
  );
};

export default Item;
