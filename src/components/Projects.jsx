export default function Projects() {
  const kotlin_url = new URL("../media/skills/kotlin.png", import.meta.url);
  const android_url = new URL(
    "../media/skills/android_studio.png",
    import.meta.url
  );
  const java_url = new URL("../media/skills/java.png", import.meta.url);
  const html_url = new URL("../media/skills/html5.png", import.meta.url);
  const css_url = new URL("../media/skills/css.png", import.meta.url);
  const js_url = new URL("../media/skills/js.png", import.meta.url);

  const javafx_url = new URL("../media/skills/javafx.png", import.meta.url);

  const opentab_url = new URL("../media/projects/opentab.png", import.meta.url);
  const donwload_url = new URL(
    "../media/projects/download.png",
    import.meta.url
  );
  const github_url = new URL("../media/skills/github.png", import.meta.url);

  const portait_url = new URL("../media/home/profilbild.png", import.meta.url);
  const FoodSearch = new URL(
    "../media/projects/FoodSearch/FoodSearch.png",
    import.meta.url
  );
  const tamplaceholder = new URL(
    "../media/projects/Tamagotchi/Placeholder.gif",
    import.meta.url
  );
  const QrCode = new URL(
    "../media/projects/QrCode/Qr-Code-Website.png",
    import.meta.url
  );

  return (
    <>
      <div className="grid-container">
        <div className="grid-item-1">
          <div className="grid-item-1-content">
            <p>Featured Project</p>
            <h3>Food Search</h3>
            <div className="grid-item-1-text">
              <p className="grid-item-1-p">
                A simple app made with kotlin and android studio. Its a food
                searching app. You can either type och speak what you want to
                search on. It uses an api that have a huge databas on food. I
                may develop further on it in the future.
              </p>
            </div>
            <div>
              <img
                src={android_url}
                alt="AndriodStudio Logo"
                className="project-icon-size"
              />
              <img
                src={kotlin_url}
                alt="Kotlin Logo"
                className="project-icon-size"
              />
              <a href="https://github.com/robingrit/FoodSearch">
                <img
                  src={github_url}
                  alt="Github Logo"
                  className="project-icon-size"
                />
              </a>
            </div>
          </div>
          <div className="grid-item-1-img">
            <img className="grid-item-imagestyle" src={FoodSearch} alt="" />
          </div>
        </div>
        <div className="grid-item-1">
          <div className="grid-item-2-content">
            <p>Featured Project</p>
            <h3>Tamagotchi</h3>
            <div className="grid-item-1-text">
              <p className="grid-item-1-p">
                Project Tamagotchi. It is website made with javascript. It is a
                basic verion of the old pouplar Tamagotchi game I made this when
                i started to learn javascript. It was fun to make and good
                practice project.
              </p>
            </div>
            <div>
              <img
                src={js_url}
                alt="JavaScript Logo"
                className="project-icon-size"
              />
              <img
                src={html_url}
                alt="html Logo"
                className="project-icon-size"
              />
              <img
                src={css_url}
                alt="html Logo"
                className="project-icon-size"
              />
              <div>
                <a
                  target="_blank"
                  href="https://github.com/robingrit/JAVA21-Robin-tamagotchi"
                >
                  <img
                    src={github_url}
                    alt="Github Logo"
                    className="project-icon-size"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://robingrit.github.io/JAVA21-Robin-tamagotchi/"
                >
                  <img
                    src={opentab_url}
                    alt="Github Logo"
                    className="project-icon-size"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item-2-img">
            <img className="grid-item-imagestyle" src={tamplaceholder} alt="" />
          </div>
        </div>
        <div className="grid-item-1">
          <div className="grid-item-1-content">
            <p>Featured Project</p>
            <h3>Qr code Java</h3>
            <div className="grid-item-1-text">
              <p className="grid-item-1-p">
                In this project i utilizes 3 things which are webbsite, Qrcodes
                and a JavaProgram. In the webbsite i have 3 dynmic qr codes. The
                java program makes request from the qr code data base. It then
                parse the data into a javafx gui to display it.
              </p>
            </div>
            <div>
              <img
                src={js_url}
                alt="JavaScript Logo"
                className="project-icon-size"
              />
              <img
                src={html_url}
                alt="html Logo"
                className="project-icon-size"
              />
              <img src={css_url} alt="css Logo" className="project-icon-size" />
              <img
                src={java_url}
                alt="java Logo"
                className="project-icon-size"
              />
              <img
                src={javafx_url}
                alt="html Logo"
                className="project-icon-size"
              />
              <div>
                <a
                  target="_blank"
                  href="https://github.com/robingrit/repository"
                >
                  <img
                    src={github_url}
                    alt="Github Logo"
                    className="project-icon-size"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://robingrit.github.io/QRHemsida2/"
                >
                  <img
                    src={opentab_url}
                    alt="opentab Logo"
                    className="project-icon-size"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item-1-img">
            <img className="grid-item-imagestyle" src={QrCode} alt="" />
          </div>
        </div>
        <h2>Other Noteworthy Projects</h2>
        <div className="flex">
          <div className="card">
            <div className="box">
              <div className="content">
                <a href="https://github.com/robingrit/Tic-Tac-Toe/tree/main/Tic_Toc">
                  <div className="image-Colum">
                    <h2>01</h2>
                    <img src={github_url} alt="Github logo" />
                  </div>
                </a>

                <h3>Tic tac toe</h3>

                <p>Java console program which you can play tic tac toe on</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <a href="https://github.com/robingrit/Tic-Tac-Toe/tree/main/Tic_Toc">
                  <div className="image-Colum">
                    <h2>02</h2>
                    <img src={github_url} alt="portrait of me" />
                  </div>
                </a>
                <h3>Firebase</h3>
                <p>
                  Used Firebase and simple app that get information from
                  database
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <a href="https://github.com/robingrit/-SlutprojectWebservices/tree/main/ExamensUppgift/src/main/java/com/example/demo/Csv">
                  <div className="image-Colum">
                    <h2>03</h2>
                    <img src={github_url} alt="Github logo" />
                  </div>
                </a>
                <h3>Webservices</h3>
                <p>
                  A Java Web Service application, that offers different
                  services, built using Spring Boot and the RestFUL api. These
                  services are; a calculator, a Rock, Paper, Scissors game, a
                  CSV reader and an Image randomizer. Also included is a
                  documentation page for guiding users
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <a href="https://github.com/robingrit/Javawebb">
                  <div className="image-Colum">
                    <h2>04</h2>
                    <img src={github_url} alt="Github logo" />
                  </div>
                </a>
                <h3> Another project with Spring Boot</h3>
                <p>Projects with springboot and restfull api</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <a href="https://github.com/robingrit/JAVA21-AJS-slutprojekt-Robin-Nilsson">
                  <div className="image-Colum">
                    <h2>05</h2>
                    <img src={github_url} alt="Github logo" />
                  </div>
                </a>
                <h3>Webbshop with react</h3>
                <p>
                  Simple Webbshop made with react this was my first project with
                  react i learn alot from making it.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <a href="https://github.com/robingrit/">
                  <div className="image-Colum">
                    <h2>06</h2>
                    <img src={github_url} alt="Github logo" />
                  </div>
                </a>
                <h3>This Webbsite</h3>
                <p>
                  Made in react and Scass I learned to desgin on a new level
                  when i created this webbsite
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
