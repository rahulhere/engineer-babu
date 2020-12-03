import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.image}>
        <img src={props.img} alt={props.imgAlt} />
      </div>
      {props.children}
    </div>
  );
};

export default ProjectCard;
