import React from "react";
//Button Image links

function About() {
  //Image links
  const about_url = new URL("../media/about/profilbild1.png", import.meta.url);
  //Icon links
  const cv_url = new URL("../media/about/cv.png", import.meta.url);
  const grades_url = new URL("../media/about/grades.png", import.meta.url);

  return (
    <>
      <div className="about_header">
        <article>
          <h1 id="about_title">About Me</h1>
        </article>
      </div>
      <div className="about_wrapper">
        <article>
          <img id="about_img" src={about_url} alt="Image of me" />
        </article>
        <article>
          <p id="about_text">
            I am a Java Developer student who has also learned some Javascript.
            Before pursuing a career in programming, I worked as a chef and
            gained valuable experience in the industry. Currently, I am located
            in Malmö, Sweden.
          </p>
          <p id="about_text">
            In addition to my programming skills, I have also gained experience
            with SEO and marketing. As a person, I am hard-working, determined,
            and able to handle stress well. I am always open to trying new
            things and seeking new challenges and opportunities to learn and
            grow
          </p>

          <p id="about_text">
            For me, working with a team that I trust and enjoy working with is
            more important than the work itself. I value collaboration and
            believe that it is crucial for achieving success in any project.
          </p>
        </article>
      </div>
      <div className="about_buttons">
        <form id="about_buttons_wrapper" target="_blank">
          <button
            id="about_button"
            formAction="https://drive.google.com/file/d/1xsnCrigUS5d6EDQWgILDTMFvt_Sa0aRo/view?usp=sharing"
          >
            <p>View CV</p>
            <img src={cv_url} alt="CV icon" />
          </button>
        </form>
      </div>
    </>
  );
}

export default About;
