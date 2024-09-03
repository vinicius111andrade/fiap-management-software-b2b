import React from 'react';


const teamMembers = [
  {
    name: "Henrique Franco da Paz",
    image: "/src/assets/img/henrique_franco.png",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Rodrigo Calado",
    image: "/src/assets/img/rodrigo_calado.png",
    github: "https://github.com/caladoRo",
    linkedin: "https://www.linkedin.com/in/caladoro/"
  },
  {
    name: "Ana Julia de Oliveira Claudino",
    image: "/src/assets/img/ana_julia.png",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Vinicius Andrade",
    image: "/src/assets/img/vinicius_andrade.png",
    github: "https://github.com/vinicius111andrade",
    linkedin: "https://www.linkedin.com/in/vin%C3%ADcius-de-melo-andrade-bb643a66/"
  },
  {
    name: "Vitoria de Farias",
    image: "/src/assets/img/vitoria_farias.png",
    github: "https://github.com/vickyeqq",
    linkedin: "https://www.linkedin.com/in/vitorialana/"
  }
];

const TeamMembers = () => {
  return (

    <div className="team-members-container">
      <h1 className="developers-title">Desenvolvedores</h1>
      <div className="team-members">

        {teamMembers.map((member, index) => (
          <div key={index} className="member">
            <img src={member.image} alt={member.name} className="member-image" />
            <p className="member-name">{member.name}</p>
            <div className="member-links">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="member-link">
                <img src="/src/assets/img/github_logo.png" alt="GitHub" className="link-icon" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link">
                <img src="/src/assets/img/linkedin_logo.png" alt="LinkedIn" className="link-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;