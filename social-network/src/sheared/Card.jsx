function Card({ title, body, userId,onClick }) {
  return (
    <div onClick={onClick} className="card">
      <p className="title-card">{title}</p>
      <p className="body-card">{body}</p>
      <p className="userId-card">{userId}</p>
    </div>
  );
}
export default Card;
