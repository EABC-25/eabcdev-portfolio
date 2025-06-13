import heroImage from "../../assets/yhero.jpg";
import frame1 from "../../assets/y-app/Frame 1.jpg";
import frame2 from "../../assets/y-app/Frame 2.jpg";
import desktop1 from "../../assets/y-app/desktop1.jpg";
import desktop2 from "../../assets/y-app/desktop2.jpg";
import desktop3 from "../../assets/y-app/desktop3.jpg";
import desktop4 from "../../assets/y-app/desktop4.jpg";
import desktop5 from "../../assets/y-app/desktop5.jpg";
import desktop6 from "../../assets/y-app/desktop6.jpg";
import desktop7 from "../../assets/y-app/desktop7.jpg";
import desktop8 from "../../assets/y-app/desktop8.jpg";

const Y: React.FC = () => {
  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "40px" }}>
          <div
            className="y-hero"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
          <p>
            <span>Y?</span> is a personal project that took inspiration from the
            social media app that we know named X. This project is mostly an
            attempt to reproduce X's basic features and aims to give users at
            the very least a bare bones feel of a social media app via my
            version (clone) of X's UI. The development of this app took 7 - 8
            mos to complete through trial and error/experimentation with many
            different libraries, frameworks, and ideas - one example is the use
            of custom web components in typescript which helped me build this
            app's rich text input and some other components.
          </p>
          <br />
          <p>Technologies used:</p>
          <div style={{ paddingLeft: "20px" }}>
            <p>
              <span style={{ color: "#4571a3" }}>Frontend: </span>
              <span>
                Typescript, Vite, React, Redux Toolkit-Query, CSS3, Tailwind,
                Custom Web Components, Zod
              </span>
            </p>
            <p>
              <span style={{ color: "#865353" }}>Backend: </span>
              <span>Typescript, Nodejs, Express</span>
            </p>
            <p>
              <span style={{ color: "#4d8a5c" }}>Database: </span>
              <span>MySQL</span>
            </p>
            <p>
              <span style={{ color: "#858b4d" }}>Media Storage: </span>
              <span>Cloudinary</span>
            </p>
            <p>
              <span style={{ color: "#794776" }}>Version Control: </span>
              <span>Git, Github</span>
            </p>
            <p>
              <span style={{ color: "#a38557" }}>Hosting: </span>
              <span>
                Hostinger Ubuntu Linux VPS with Nodejs and Openlitespeed
              </span>
            </p>
          </div>
          <br />
          <p>
            Link to project:
            <span>
              <a target="_blank" href="https://y-app.eabcdev.com">
                y-app.eabcdev.com
              </a>
            </span>
          </p>
          <br />
          <p>Mobile responsive:</p>
          <br />
          <div className="asset-container">
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${frame1})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${frame2})` }}
            />
          </div>
          <br />
          <p>Desktop:</p>
          <br />
          <div className="asset-container">
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop1})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop2})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop3})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop4})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop5})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop6})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop7})` }}
            />
            <div
              className="y-asset"
              style={{ backgroundImage: `url(${desktop8})` }}
            />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Y;
