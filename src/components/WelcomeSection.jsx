export function WelcomeSection() {
  return (
    <div id="welcome-section-wrapper" className="">
      <section id="welcome-section" className="welcome-section">
        <img src="dragon.png" className="dragon-image" alt="dragon" />
        <div className="mountain-container">
          <img src="mountain2.png" className="mountain-img" alt="mountains" />
        </div>
        <div className="welcome-container">
          <div className="left-side">
            <img
              src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/5927_10204013752584508_3539026893136448984_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S5dRIkPejbQAX9Hq-vD&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCuxWZr3ny7BgZQIfnXl2ZKGIfPcB0MsErsRRjfCowC1Q&oe=6619D6B0"
              className="welcome-img"
              alt="self-portrait"
            />
            <div className="character-name">
              <h2>Louis Moore</h2>
              <h1>Character Name:</h1>
            </div>
          </div>
          <div className="right-side">
            <div className="character-class">
              <h2>Front-end Web Developer</h2>
              <h1>Class:</h1>
            </div>
            <div className="character-level">
              <h2>1</h2>
              <h1>Level:</h1>
            </div>
            <div className="character-background">
              <h2>Self-Taught Altruist</h2>
              <h1>Background:</h1>
            </div>
            <div className="character-alignment">
              <h2>Austin, Texas</h2>
              <h1>Location:</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
