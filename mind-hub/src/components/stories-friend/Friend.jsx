import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName, address } = data;

  return (
    <div className="Friend">
      <img src={image} alt={lastName} className="friend-avatar " />
      <div className="friend__text">
        <h5>{`${firstName}`}</h5>
      </div>
    </div>
  );
};

export default Friend;
