import profilePicture from "./assets/pic.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePicture} alt="Profile of Simon Juma" />
      <h2 className="card title">Simon Juma</h2>
      <p className="card-text">
        Simon Juma is a dedicated learner currently mastering the React library,
        passionate about front-end development and creating dynamic web
        applications.
      </p>
    </div>
  );
}

export default Card;
