import { Link } from "react-router-dom";

export default function TaskCard(props) {
  const {
    task: { _id, title, description },
  } = props;

  return (
    <div className="TaskCard card">
      <Link to={`/tasks/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  );
}
