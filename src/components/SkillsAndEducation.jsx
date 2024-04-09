import React, { useState, useEffect } from "react";

export function SkillsAndEducation() {
  const skillsData = [
    {
      name: "HTML5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
    },
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    },
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSkillIndex((prevIndex) =>
        prevIndex === skillsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSkillIndex]);

  return (
    <section id="skills-education">
      <div className="section-title skills-title">
        <h1>Skills and Education</h1>
      </div>
      <div className="skills-ed-container">
        <div className="skills">
          <h1>Skills</h1>
          <div className="skill-container">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`skill ${index === currentSkillIndex ? "show" : ""}`}
              >
                <img src={skill.logo} alt={skill.name} className="logo" />
                <p>{skill.name}</p>
                <div className="circle-menu">
                  {[...Array(skillsData.length)].map((_, index) => (
                    <div
                      key={index}
                      className={`circle ${
                        index <= currentSkillIndex ? "filled" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div class="additional-skills">
            <h1>Additional Skills</h1>
            <div class="ad-skills">
              <div class="logo-cont">
                <img src="github.png" alt="github" />
                <label>GitHub</label>
              </div>
              <div class="logo-cont">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
                  alt="tailwind"
                />
                <label>Tailwind</label>
              </div>
              <div class="logo-cont">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
                  alt="typescipt"
                />
                <label>TypeScript</label>
              </div>
              <div class="logo-cont">
                <img src="trello.png" alt="trello" />
                <label>Trello</label>
              </div>
              <div class="logo-cont">
                <img src="vscode.png" alt="vscode" />
                <label>VSCode</label>
              </div>
              <div class="logo-cont">
                <img src="slack.png" alt="slack" />
                <label>Slack</label>
              </div>
              <div class="logo-cont">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png?20221121173824"
                  alt="C#"
                />
                <label>C#</label>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-line"></div>
        <div className="education-accolades">
          <h1>Education and Accolades</h1>
          <div className="award-item">
            <p>
              Associate of Applied Science in Game Design - Austin Community
              College
            </p>
            <img src="diploma.JPG" alt="diploma" class="diploma" />
          </div>
          <div className="award-item">
            <p>
              Certification in Responsive Web Design from FreeCodeCamp.
              <br />
              <a
                href="https://www.freecodecamp.org/certification/pupfam/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                You can view my certification here.
              </a>
            </p>
            <img src="fcc.JPG" alt="responsive-web-cert" class="diploma" />
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
}
