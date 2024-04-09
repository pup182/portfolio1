import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { WelcomeSection } from "./components/WelcomeSection";
import { SkillsAndEducation } from "./components/SkillsAndEducation";
import { Projects } from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="path/to/fontawesome-free-<version>/css/all.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Almendra+Display&display=swap"
        />

        <title>My Portfolio</title>
      </head>
      <body>
        <NavBar />
        <WelcomeSection />
        <SkillsAndEducation />
        <Projects />
        <AboutMe />
        <ContactMe />
      </body>
      <footer>
        <p>
          This page is still under construction. As I learn more about web
          design, I intend to improve it more and more.
        </p>
      </footer>
    </div>
  );
}

export default App;
