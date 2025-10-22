const SqlTools: React.FC = () => {
  return (
    <div className="content-div">
      <div className="container">
        <div style={{ marginTop: "40px", paddingRight: "10px" }}>
          <div className="div-pleft">
            <p>
              <span>Sql-Tools</span> is a CLI tool I made specifically for
              migrating MySQL data from my local machine to my Hostinger VPS.
            </p>
            <br />
            <p>
              <span>Tools used:</span>
            </p>
            <div className="div-pleft">
              <p>
                <span style={{ color: "#865353" }}>Backend: </span>
                <span>Typescript, Nodejs</span>
              </p>
              <p>
                <span style={{ color: "#4d8a5c" }}>Database: </span>
                <span>MySQL</span>
              </p>
              <p>
                <span style={{ color: "#a08a43" }}>Build tools: </span>
                <span>Typescript Compiler</span>
              </p>
              <p>
                <span style={{ color: "#794776" }}>Version Control: </span>
                <span>Git, Github</span>
              </p>
            </div>
          </div>
          <br />
          <div className="div-pleft">
            <p>
              <span>Code:</span>
              <span>
                <a target="_blank" href="https://github.com/EABC-25/sql-tools">
                  Link
                </a>
              </span>
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

export default SqlTools;
