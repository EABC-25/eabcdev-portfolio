import heroImage from "../../assets/hero.png";

const About: React.FC = () => {
  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "30px" }}>
          <div className="div-pboth">
            <div
              className="hero-container"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <br />
            <p>
              Hi, I'm
              <span>eabcdev! - Computer Programming Enthusiast</span> who loves
              to build, break, and rebuild things until they’re just right. I’m
              fascinated by how simple code can create meaningful experiences —
              and I’m always tinkering with new ideas to learn something new
              every day.
            </p>
            <br />
            <p>In my coding journey, I've worked with the below the most:</p>
            <div className="div-pleft">
              <ol>
                <li>
                  <span>JavaScript</span>
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
              While these are languages that I have basic-intermediate working
              knowledge:
            </p>
            <div className="div-pleft">
              <ol>
                <li>
                  <span>Python</span>
                </li>
                <li>
                  <span>Java</span>
                </li>
                <li>
                  <span>C++</span>
                </li>
                <li>
                  <span>C</span>
                </li>
              </ol>
            </div>
            <br />
            <p>
              I have also made use of the below technologies/frameworks on my
              personal projects:
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
                  <li>React-Router</li>
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
                  <li>Node.js</li>
                  <li>Express</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="div-pleft">
              <p>
                <span style={{ color: "#a08a43" }}>Build tools:</span>
              </p>
              <div className="div-pleft">
                <ol>
                  <li>Vite</li>
                  <li>Typescript Compiler</li>
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
                  <li>Jest</li>
                  <li>SuperTest</li>
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
                  <li>Nodemailer</li>
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
            <p>Others:</p>
            <div className="div-pleft">
              <ol>
                <li>Computer hardware knowledge</li>
                <li>Command line (Windows, Linux) knowledge</li>
                <li>Networking and VPS management</li>
                <li>AI Tools Usage (ChatGPT)</li>
                <li>한극말 - Korean Language Proficient (TOPIK 2 certified)</li>
              </ol>
            </div>
            <br />
            <p>
              You can reach me through here:
              <span>eabcdev@gmail.com</span>
            </p>
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
