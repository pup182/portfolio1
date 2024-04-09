import React, { useState } from "react";

function AboutMe() {
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [charisma, setCharisma] = useState(10);
  const [pointPool, setPointPool] = useState(15);

  const incrementAttribute = (attribute, setValue) => {
    if (pointPool > 0 && attribute < 20) {
      setValue((prevValue) => prevValue + 1);
      setPointPool((prevPoints) => prevPoints - 1);
    }
  };

  const decrementAttribute = (attribute, setValue) => {
    if (attribute > 8) {
      setValue((prevValue) => prevValue - 1);
      setPointPool((prevPoints) => prevPoints + 1);
    } else if (attribute === 8 && pointPool < 15) {
      setValue((prevValue) => prevValue - 1);
      setPointPool((prevPoints) => prevPoints + 1);
    }
  };

  const calculateModifier = (ability) => {
    const modifier = Math.floor((ability - 10) / 2);
    const sign = modifier >= 0 ? "+" : "";
    return `/ ${sign}${modifier}`;
  };

  return (
    <section id="about-me">
      <div className="about-me">
        <div className="about-me-left-side">
          <div className="point-pool">
            <span>Point Pool: {pointPool}</span>
          </div>
          {[
            { attribute: "Strength", value: strength, setValue: setStrength },
            {
              attribute: "Dexterity",
              value: dexterity,
              setValue: setDexterity,
            },
            {
              attribute: "Constitution",
              value: constitution,
              setValue: setConstitution,
            },
            { attribute: "Wisdom", value: wisdom, setValue: setWisdom },
            {
              attribute: "Intelligence",
              value: intelligence,
              setValue: setIntelligence,
            },
            { attribute: "Charisma", value: charisma, setValue: setCharisma },
          ].map((attr) => (
            <div className="attribute" key={attr.attribute}>
              <span>{attr.attribute}:</span>
              <div>
                <button
                  onClick={() => decrementAttribute(attr.value, attr.setValue)}
                  disabled={attr.value === 8 && pointPool === 15}
                >
                  &#9666;
                </button>
                <span>{attr.value}</span>
                <span>{calculateModifier(attr.value)}</span>
                <button
                  onClick={() => incrementAttribute(attr.value, attr.setValue)}
                  disabled={pointPool === 0}
                >
                  &#9656;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="about-me-right-side">
          <div class="paragraphs">
            <h2>About Me</h2>

            <p>
              I've spent over a decade honing my skills in customer service,
              where my passion for connecting with others and helping them
              thrive truly blossomed. Empathy is at the core of everything I do,
              whether it's assisting a customer or crafting a memorable user
              experience.
            </p>
            <br />
            <p>
              My design journey began with music, igniting my creativity from a
              young age. From mastering digital audio workstations to exploring
              the technical intricacies of sound engineering, my early immersion
              in the world of music laid the foundation for my future
              explorations into technology and design. In my early twenties, I
              immersed myself in music, touring and managing the operations of a
              band similarly to a small business. This experience honed my
              skills in other fields like finance and marketing, enriching my
              approach to design with a blend of creativity and business savvy.
            </p>
            <br />
            <p>
              Pursuing an Associate's degree in game design from Austin
              Community College opened doors to a world of creativity and
              innovation. Here, I delved into the realms of coding, exploring
              the intricacies of C#, and discovering the power of design in
              shaping immersive experiences. It was during this time that my
              interest in tech and coding ignited, propelling me to explore new
              avenues and expand my skill set.
            </p>
            <br />
            <p>
              I've spent the last six months immersing myself in the world of
              web design. Self-teaching HTML, CSS, JavaScript, and React, I've
              embraced the challenges and opportunities of mastering new skills.
              With a keen focus on end-user experience and empathic design, I'm
              eager to channel my collective expertise and experiences into
              creating meaningful, impactful designs that resonate with
              audiences on a deeper level.
            </p>
          </div>
          <img src="me.jpg" alt="self-portrait-2" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
