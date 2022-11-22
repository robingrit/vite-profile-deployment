const java_url = new URL("../media/skills/java.png", import.meta.url);
const html_url = new URL("../media/skills/html5.png", import.meta.url);
const css_url = new URL("../media/skills/css.png", import.meta.url);
const js_url = new URL("../media/skills/js.png", import.meta.url);
const react_url = new URL("../media/skills/reactjs.png", import.meta.url);
const mysql_url = new URL("../media/skills/mysql_small.png", import.meta.url);
const restful_url = new URL("../media/skills/api_rest.png", import.meta.url);
const agile_url = new URL("../media/skills/agile.png", import.meta.url);
const github_url = new URL("../media/skills/github.png", import.meta.url);
const trello_url = new URL("../media/skills/trello.png", import.meta.url);
const vscode_url = new URL("../media/skills/vscode.png", import.meta.url);
const springboot_url = new URL(
  "../media/skills/springboot.png",
  import.meta.url
);
const eclipse_url = new URL("../media/skills/eclipse.png", import.meta.url);
const android_url = new URL(
  "../media/skills/android_studio.png",
  import.meta.url
);
const kotlin_url = new URL("../media/skills/kotlin.png", import.meta.url);
const javafx_url = new URL("../media/skills/javafx.png", import.meta.url);

function Skills() {
  return (
    <>
      <div className="skills_header">
        <article>
          <h1 id="skills_title">Skills & Tools</h1>
          <p id="skills_desc">
            These are the skills and tools I use to create my projects:
          </p>
        </article>
      </div>
      <div className="skills_wrapper">
        <article>
          <img id="skills_img" src={java_url} alt="Java Logo" />
          <p id="skills_text">Java</p>
        </article>
        <article>
          <img id="skills_img" src={js_url} alt="Javascript Logo" />
          <p id="skills_text">JavaScript</p>
        </article>
        <article>
          <img id="skills_img" src={kotlin_url} alt="Kotlin Logo" />
          <p id="skills_text">Kotlin</p>
        </article>
        <article>
          <img id="skills_img" src={react_url} alt="React.JS Logo" />
          <p id="skills_text">React JS</p>
        </article>
        <article>
          <img id="skills_img" src={html_url} alt="HTML Logo" />
          <p id="skills_text">HTML</p>
        </article>
        <article>
          <img id="skills_img" src={css_url} alt="CSS Logo" />
          <p id="skills_text">CSS</p>
        </article>
        <article>
          <img id="skills_img" src={mysql_url} alt="MySQL Logo" />
          <p id="skills_text">MySQL</p>
        </article>
        <article>
          <img id="skills_img" src={restful_url} alt="Restful API Logo" />
          <p id="skills_text">RESTful API</p>
        </article>
        <article>
          <img id="skills_img" src={springboot_url} alt="Spring Boot Logo" />
          <p id="skills_text">Spring Boot</p>
        </article>
        <article>
          <img id="skills_img" src={javafx_url} alt="JavaFX Logo" />
          <p id="skills_text">JavaFX</p>
        </article>
        <article>
          <img id="skills_img" src={github_url} alt="Github Logo" />
          <p id="skills_text">Github</p>
        </article>
        <article>
          <img id="skills_img" src={agile_url} alt="Agile Logo" />
          <p id="skills_text">Agile Method</p>
        </article>
        <article>
          <img id="skills_img" src={trello_url} alt="Trello Logo" />
          <p id="skills_text">Trello</p>
        </article>
        <article>
          <img id="skills_img" src={vscode_url} alt="VS Code Logo" />
          <p id="skills_text">VS Code</p>
        </article>
        <article>
          <img id="skills_img" src={eclipse_url} alt="Eclipse Logo" />
          <p id="skills_text">Eclipse</p>
        </article>
        <article>
          <img id="skills_img" src={android_url} alt="Android Studio Logo" />
          <p id="skills_text">Android Studio</p>
        </article>
      </div>
    </>
  );
}

export default Skills;
