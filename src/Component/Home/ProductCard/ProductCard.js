import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.ProductCard}>
      <img src={props.img} alt={props.imgAlt} />
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default ProductCard;
