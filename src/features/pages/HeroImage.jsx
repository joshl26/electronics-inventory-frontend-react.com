import "./HeroImage.scss";
import background from "../../img/bg.jpg";

const LandingPage = () => {
  return (
    <div className="hero_image">
      <img alt="" className="background_image" src={background} />
    </div>
  );
};

export default LandingPage;
