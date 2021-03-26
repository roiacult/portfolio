import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "android_skill", content: "Android Developement (kotlin & java)", porcentage: "90%", value: "90" },
        { id: "web_frontend_skill", content: "Web Front-End Developement (HTML & CSS & JS)", porcentage: "70%", value: "70" },
        {
          id: "react_skill",
          content: "ReactJS framework",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "80%",
          value: "80"
        },
        { id: "django_skill", content: "Django Framework", porcentage: "80%", value: "80" },
        { id: "ai_skill", content: "AI & Machine Learning", porcentage: "60%", value: "60" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is BENAHMED DJAWED, Higher school of computer science student (école supérieur en informatique) and an android and web developper, with more than 3 years of experience."
        },
        {
          id: "second-p-about",
          content:
            "Excellent reputation for resolving problems, improving customer satisfaction, and driving overall operational improvements"
        },
        {
          id: "third-p-about",
          content:
            "Eager to contribute to team success through hard work, attention to detail and excellent organizational skills."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
