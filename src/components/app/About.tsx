import heroImage from "../../assets/hero.png";

const About: React.FC = () => {
  const yearStarted: number = 2022;
  const yearNow: number = new Date().getFullYear();
  const yearsPassed = yearNow - yearStarted;

  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "40px" }}>
          <div
            className="hero-container"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <p>
            Hi, my name is <span>Emmanuel A. B. Ciencia</span>
          </p>
          <p>Rookie Fullstack Developer based from the Philippines.</p>
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
          <ol>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>SQL</li>
          </ol>
          <br />
          <p>
            These are languages that I have basic-intermediate working
            knowledge:
          </p>
          <ol>
            <li>Python</li>
            <li>Core Java</li>
            <li>Basic C++</li>
          </ol>
          <br />
          <p>
            Alongside these programming languages - I have also made use of the
            below technologies/frameworks:
          </p>
          <p>
            <span>Frontend:</span>
          </p>
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
          <br />
          <p>
            <span>Backend:</span>
          </p>
          <ol>
            <li>Nodejs-Express</li>
          </ol>
          <br />
          <p>
            <span>Database:</span>
          </p>
          <ol>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ol>
          <br />
          <p>
            <span>Version Control:</span>
          </p>
          <ol>
            <li>Git/Github</li>
          </ol>
          <br />
          <p>
            <span>Hosting:</span>
          </p>
          <ol>
            <li>Vercel</li>
            <li>Hostinger - Ubuntu Linux VPS with Node and Openlitespeed</li>
          </ol>
          <br />
          <p>
            <span>Testing:</span>
          </p>
          <ol>
            <li>Jupiter</li>
            <li>VSCode Debugger</li>
            <li>Chrome devtools</li>
            <li>Redux devtools</li>
            <li>React Profiler</li>
          </ol>
          <br />
          <p>
            <span>Others:</span>
          </p>
          <ol>
            <li>Postman</li>
            <li>Phpmyadmin</li>
          </ol>
          <br />
          <p>
            <span>IDE:</span>
          </p>
          <ol>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
            <li>IntelliJ IDEA</li>
          </ol>
          <br />
          <br />
          <p>
            If you wish to know more about me, here are some of my other
            interests:
          </p>
          <ol>
            <li>Learning new things/technologies</li>
            <li>Reading novels - fiction, historical etc.</li>
            <li>Watching films, series</li>
            <li>Working out</li>
            <li>Gaming - World of Warcraft, MMORPGs etc</li>
            <li>Language learning - Korean (TOPIK 2 certified)</li>
          </ol>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
