import Persona from "../images/Rebecca D Webb.jpg";

const Info = () => {
  return (
    <div className="info">
      <div className="info--photo">
        <img className="imgPersona" src={Persona} alt="Rebecca D Webb"></img>
      </div>
      <div className="info--name">
        <span className="head--name">Rebecca D Webb</span>
        <br />
        <span className="head--job">Full Stack Developer</span>
        <br />
        <span className="head--mail">bernadine.da@yahoo.com</span>
      </div>
      <div className="info--button">
        <button className="button--link">Linkdn</button>
        <button className="button--link">Gmail</button>
      </div>
    </div>
  );
};

export default Info;
