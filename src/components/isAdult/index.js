import { useState } from "react";
import "./style.css";
import Button from "../ui/button/index";
import { HASH } from "../../utils/hash";
import Footer from "../footer";
const IsAdult = ({ setAdult }) => {
  const [isAdult, setIsAdult] = useState(false);
  const handleYes = () => {
    setAdult(true);
    localStorage.setItem("token", HASH);
  };
  return (
    <div>
      <div className="main">
        <div className="main-inner">
          <section className="title">
            <img src="images/logo.png" />
            {isAdult ? (
              <div>
                <h3>You are not old enough to view this content</h3>
              </div>
            ) : (
              <div>
                <h1>Welcome To Casino Smoke Shop</h1>
                <h2>You Must be 21 or older to enter</h2>
                <p>Are you over 21 years of age?</p>
                <Button className="btn btn-info btn-large" onClick={handleYes}>
                  Yes
                </Button>{" "}
                <Button
                  className="btn btn-info btn-large"
                  onClick={() => setIsAdult(true)}
                >
                  No
                </Button>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IsAdult;
