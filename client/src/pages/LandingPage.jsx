import { Link } from "react-router-dom";
import LandingWrapper from "../assets/wrappers/LandingWrapper";
import { Logo } from "../components";
import big from "../assets/images/big.svg";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Land a <span>job</span> here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            facilis quaerat id iste. Dignissimos nisi, labore vitae quam
            nesciunt eius error vero harum repudiandae delectus et nemo. Enim
            dolorem, natus quod delectus amet illum eos aut. Esse excepturi
            molestias ut autem, a officiis iste delectus ex ratione dolorem
            officia doloremque.
          </p>
          <Link to="/" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={big} alt="" className="img main-img" />
      </div>
    </LandingWrapper>
  );
};

export default LandingPage;
