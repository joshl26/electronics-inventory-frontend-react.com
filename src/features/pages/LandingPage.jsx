import { Container } from "react-bootstrap";
import "./LandingPage.scss";
import Lottie from "lottie-react";
import BusinessMetrics from "../../svg/BusinessMetrics.json";

const LandingPage = () => {
  return (
    <div className="landing_container">
      <Container>
        <div className="spacer"></div>
        <h1>Why choose our Software?</h1>
        <p>
          Doggo ipsum he made many woofs very jealous pupper wow very biscit
          heckin good boys and girls, doggorino. boof doge ur givin me a spook.
          Dat tungg tho big ol long bois borking doggo much ruin diet boof,
          puggo porgo yapper. Many pats length boy wow very biscit tungg such
          treat blop waggy wags, heckin good boys and girls pats most angery
          pupper I have ever seen corgo. Maximum borkdrive heckin good boys and
          girls doggorino snoot big ol heckin angery woofer, woofer porgo clouds
          big ol pupper. Smol most angery pupper I have ever seen length boy
          noodle horse puggo, such treat thicc. Doing me a frighten wow such
          tempt such treat shoob many pats long woofer many pats noodle horse,
          adorable doggo I am bekom fat borking doggo doggo much ruin diet
          doggorino. Adorable doggo wow very biscit clouds thicc woofer, super
          chub boof.
        </p>
        <Lottie
          className="business-metrics"
          animationData={BusinessMetrics}
          loop={true}
        />
      </Container>
    </div>
  );
};

export default LandingPage;
