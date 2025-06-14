import { useMainGlobalContext } from "../../context/GlobalContext";
import heroImage from "../../assets/compareWOT-hero.jpg";
import frame3 from "../../assets/CompareWOT/Frame 3.jpg";
import desktop1 from "../../assets/CompareWOT/desktop1.jpg";
import desktop2 from "../../assets/CompareWOT/desktop2.jpg";
import desktop3 from "../../assets/CompareWOT/desktop3.jpg";
import desktop4 from "../../assets/CompareWOT/desktop4.jpg";
import desktop5 from "../../assets/CompareWOT/desktop5.jpg";

const CompareWot: React.FC = () => {
  const { state, dispatch } = useMainGlobalContext();

  const handleMediaClick = (media: string) => {
    if (!state.isOverlayOpen) {
      dispatch({ type: "OPEN_OVERLAY", media: media });
    }
  };

  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "40px" }}>
          <div
            className="compareWot-hero"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
          <div className="div-pleft">
            <p>
              <span>CompareWOT?</span> is an app where you can compare tanks
              from the game - World of Tanks. Users can add their chosen tank
              and configure its modules like the gun, engine, track, turret etc.
              which will then change the default stats (damage per minute, move
              speed, reloading speed, armor etc.) of the tank. These stats are
              reflected on a spreadsheet like table and then users can compare
              the chosen tanks whether it has better (green) or worse (red)
              stats. In the game, players can pick their tank, modify the
              modules and battle it out in a given map where the team with the
              best tanks will have a higher chance of winning.
            </p>
            <br />
            <p>
              This project is a minified version of the compare feature of this
              website{" "}
              <a target="_blank" href="https://tanks.gg/compare">
                tanks.gg/compare
              </a>{" "}
              which is also a web app made for the game World of Tanks. All of
              the assets and data used in this project was pulled directly from
              the World of Tanks API:{" "}
              <a target="_blank" href="https://developers.wargaming.net/">
                developers.wargaming.net
              </a>
            </p>
            <br />
            <p>
              <span>Technologies used:</span>
            </p>
            <div className="div-pleft">
              <p>
                <span style={{ color: "#4571a3" }}>Frontend: </span>
                <span>Vite, React, Redux Toolkit-Query, CSS3, Axios</span>
              </p>
              <p>
                <span style={{ color: "#794776" }}>Version Control: </span>
                <span>Git, Github</span>
              </p>
              <p>
                <span style={{ color: "#a38557" }}>Hosting: </span>
                <span>Vercel</span>
              </p>
            </div>
          </div>
          <br />
          <div className="div-pleft">
            <p>
              <span>Link to project:</span>
              <span>
                <a target="_blank" href="https://compare-wot-app.vercel.app/">
                  compare-wot-app.vercel.app
                </a>
              </span>
            </p>
            <br />
            <p>
              <span>Mobile:</span>
            </p>
            <br />
            <div className="asset-container">
              <div
                className="asset"
                style={{ backgroundImage: `url(${frame3})` }}
                onClick={() => {
                  handleMediaClick(frame3);
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

export default CompareWot;
