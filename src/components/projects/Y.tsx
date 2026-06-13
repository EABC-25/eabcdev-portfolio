import { useMainGlobalContext } from "../../context/GlobalContext";
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
  const { state, dispatch } = useMainGlobalContext();

  const handleMediaClick = (media: string) => {
    if (!state.isOverlayOpen) {
      dispatch({ type: "OPEN_OVERLAY", media: media });
    }
  };

  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "40px", paddingRight: "10px" }}>
          <div
            className="y-hero"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
          <div className="div-pleft">
            <p>
              <span className="exile-regular">Y?</span> is a full-stack web app
              inspired by the social media platform X. This project reproduces
              X's core features and provides users with a functional, minimal
              clone of X's user experience and UI. This is a solo project that
              helped me learn a lot of things about frontend - backend
              development and deployment that took months to complete.
            </p>
            <br />
            <p>
              Users of this app can create their personal accounts,
              create-delete posts and replies, follow and be followed by another
              user, upload profile/header photos, update user information etc.
            </p>
            <br />
            <ol>
              <li>
                Developed with TypeScript for type safety and Zod for data
                validation
              </li>
              <li>RTK Query handles efficient data fetching and caching</li>
              <li>
                Backed by a Node.js backend that follows RESTful API principles
                and uses a MySQL database for relational data storage, hosted
                alongside the backend for low-latency access.
              </li>
              <li>
                Secured backend communication with CORS, HTTP-only cookies,
                security headers (Helmet), proper proxy trust configuration for
                secure header forwarding.
              </li>
              <li>
                Deployed on a Hostinger Linux VPS using OpenLiteSpeed as a
                reverse proxy and process manager for secure and efficient
                backend and frontend delivery.
              </li>
              <li>Optimized for Mobile and Desktop screen sizes.</li>
            </ol>
            <br />
            <p>
              <span>Tools used:</span>
            </p>
            <div className="div-pleft">
              <p>
                <span style={{ color: "#4571a3" }}>Frontend: </span>
                <span>
                  Typescript, React, React-router, Redux Toolkit-Query, CSS3,
                  Tailwind, Custom Web Components, Zod
                </span>
              </p>
              <p>
                <span style={{ color: "#865353" }}>Backend: </span>
                <span>Typescript, Nodejs, Express</span>
              </p>
              <p>
                <span style={{ color: "#a08a43" }}>Build tools: </span>
                <span>Vite, Typescript Compiler</span>
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
              <p>
                <span style={{ color: "#683096" }}>Testing</span>(Backend):
                <span>Jest</span>(Unit testing),
                <span>Jest + SuperTest</span>(Integration testing)
              </p>
            </div>
          </div>
          <br />
          <div className="div-pleft">
            <p>
              <span>Live Demo:</span>
            </p>
            <div className="div-pleft">
              <p>
                Frontend:{" "}
                <a target="_blank" href="https://y-app.eabcdev.com">
                  y-app.eabcdev.com
                </a>
              </p>
              <p>
                Backend:{" "}
                <a
                  target="_blank"
                  href="https://twitter-clone-backend.eabcdev.com"
                >
                  twitter-clone-backend.eabcdev.com
                </a>{" "}
                (redirects to health check route)
              </p>
            </div>
            <br />
            <p>
              <span>Repo:</span>
            </p>
            <div className="div-pleft">
              <p>
                Frontend:<span>(set at private for now)</span>
              </p>
              <p>
                Backend:{" "}
                <a
                  target="_blank"
                  href="https://github.com/EABC-25/twitter-clone-backend"
                >
                  github.com/EABC-25/twitter-clone-backend
                </a>
              </p>
            </div>
            <br />
            <p>
              <span>Mobile:</span>
            </p>
            <br />
            <div className="asset-container">
              <div
                className="asset"
                style={{ backgroundImage: `url(${frame1})` }}
                onClick={() => {
                  handleMediaClick(frame1);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${frame2})` }}
                onClick={() => {
                  handleMediaClick(frame2);
                }}
              />
            </div>
            <br />
            <p>
              <span>Desktop:</span>
            </p>
            <br />
            <div className="asset-container">
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop1})` }}
                onClick={() => {
                  handleMediaClick(desktop1);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop2})` }}
                onClick={() => {
                  handleMediaClick(desktop2);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop3})` }}
                onClick={() => {
                  handleMediaClick(desktop3);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop4})` }}
                onClick={() => {
                  handleMediaClick(desktop4);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop5})` }}
                onClick={() => {
                  handleMediaClick(desktop5);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop6})` }}
                onClick={() => {
                  handleMediaClick(desktop6);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop7})` }}
                onClick={() => {
                  handleMediaClick(desktop7);
                }}
              />
              <div
                className="asset"
                style={{ backgroundImage: `url(${desktop8})` }}
                onClick={() => {
                  handleMediaClick(desktop8);
                }}
              />
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Y;
