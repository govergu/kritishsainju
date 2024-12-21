const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 60 },
  { name: "React", level: 50 },
  { name: "UI/UX", level: 40 },
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <span>{skill.name}</span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
      <a href="My_Resume.pdf" target="blank">
        View Resume
      </a>
    </div>
  );
};

export default Skills;
