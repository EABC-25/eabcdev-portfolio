import heroImage from "../../assets/hero.png";

const About: React.FC = () => {
  const yearStarted: number = 2022;
  const yearNow: number = new Date().getFullYear();
  const yearsPassed = yearNow - yearStarted;

  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "30px" }}>
          <div className="div-pleft">
            <div
              className="hero-container"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <p>
              Hi, my name is <span>Emmanuel A. B. Ciencia</span>
            </p>
            <p>Rookie Fullstack Developer from the Philippines.</p>
            <br />
            <p>
              {`I started coding ${yearsPassed} years ago (June 2022) averaging around 3 hours per day - slowly building the
          knowledge from books to online resources and of course through
          personal projects.`}
            </p>
            <br />
            <p>
              Here are the <span>programming languages </span> that I've worked
              with the most:
            </p>
            <div className="div-pleft">
              <ol>
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>Typescript</span>
                </li>
                <li>
                  <span>SQL</span>
                </li>
              </ol>
            </div>

            <br />
            <p>
              These are languages that I have basic-intermediate working
              knowledge:
            </p>
            <div className="div-pleft">
              <ol>
                <li>
                  <span>Python</span>
                </li>
                <li>
                  <span>Core Java</span>
                </li>
                <li>
                  <span>C++</span>
                </li>
              </ol>
            </div>
            <br />
            <p>
              Alongside these programming languages - I have also made use of
              the below technologies/frameworks:
            </p>
            <div className="div-pleft">
              <p>
                <span style={{ color: "#4571a3" }}>Frontend:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Vite</li>
                  <li>React</li>
                  <li>Nextjs</li>
                  <li>Tailwind</li>
                  <li>Redux Toolkit-Query</li>
                  <li>Custom Web Components</li>
                  <li>Zod</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#865353" }}>Backend:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Nodejs-Express</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#4d8a5c" }}>Database:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#858b4d" }}>Media Storage:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Cloudinary</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#794776" }}>Version Control:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Git/Github</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#a38557" }}>Hosting:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Vercel</li>
                  <li>
                    Hostinger - Ubuntu Linux VPS with Node and Openlitespeed
                  </li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#683096" }}>Testing:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>JUnit</li>
                  <li>VSCode Debugger</li>
                  <li>Chrome devtools</li>
                  <li>Redux devtools</li>
                  <li>React Profiler</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#a14795" }}>Others:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Postman</li>
                  <li>Phpmyadmin</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#63b1c9" }}>IDE:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Visual Studio</li>
                  <li>Visual Studio Code</li>
                  <li>IntelliJ IDEA</li>
                </ol>
              </div>
            </div>
            <br />
            <br />
            <p>
              If you wish to know more about me, here are some of my other
              interests:
            </p>
            <div className="div-pleft">
              <ol>
                <li>Learning new things/technologies</li>
                <li>Reading novels - fiction, historical etc.</li>
                <li>Watching films, series</li>
                <li>Working out</li>
                <li>Gaming - World of Warcraft, MMORPGs etc</li>
                <li>Language learning - Korean (TOPIK 2 certified)</li>
              </ol>
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

export default About;
