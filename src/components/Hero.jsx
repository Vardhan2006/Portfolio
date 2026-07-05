import { useEffect, useState } from "react";
import "../styles/hero.css";

export default function Hero() {

  const roles = [
    "Full Stack Engineer",
    "Open Source Contributor",
    "Final Year Student"
  ];

  const [displayText, setDisplayText] = useState(roles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const next =
      roles[(index + 1) % roles.length];

    let iteration = 0;

    const interval = setInterval(() => {

      setDisplayText(

        next
          .split("")
          .map((_, i) => {

            if (i < iteration)
              return next[i];

            return chars[
              Math.floor(
                Math.random() *
                chars.length
              )
            ];

          })
          .join("")

      );

      if (iteration >= next.length) {

        clearInterval(interval);

        setTimeout(() => {

          setIndex(
            prev =>
              (prev + 1) %
              roles.length
          );

        }, 2000);
      }

      iteration += 1 / 3;

    }, 30);

    return () => clearInterval(interval);

  }, [index]);

  return (

    <section className="hero">

      <div className="hero-left">

        <h1 className="hero-title">
          Hi, I'm Vardhan
        </h1>

        <div className="hero-shuffle">
          {displayText}
        </div>

        <p className="hero-description">
          I'm always ready to deliver, as long as the 
          opportunity offers a steep learning curve and a solid return on investment for my time.
        </p>

        <p className="quick-link">
          Don't Have Much Time?
        </p>

        <div className="hero-buttons">

          <button className="resume-btn">
            Resume
          </button>

          <button className="hire-btn">
            Hire Me
          </button>

        </div>

      </div>

    </section>
  );
}