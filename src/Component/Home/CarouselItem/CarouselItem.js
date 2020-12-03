import styles from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  return (
    <div
      className={styles.CarouselItem}
      style={{
        background: `linear-gradient(${props.colorStart} , ${props.colorEnd})`,
      }}
    >
      <div className={styles.textDiv}>
        <h3>{props.heading}</h3>
        <p>{props.subHeading}</p>
        <ul>{props.children}</ul>
      </div>
      <div className={styles.imgDiv}>
        <img src={props.img} alt={props.imgAlt} />
      </div>
    </div>
  );
};

export default CarouselItem;
