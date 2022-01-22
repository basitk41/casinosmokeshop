import "./style.css";
const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Card</h2>
      </div>
      <div className="card-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          recusandae!
        </p>
        <a href="#" className="btn">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
