import React from 'react';
import { teamMembers } from './data/team';
import TeamMember from './TeamMember';

const OurTeam = () => {
  const [currentTeam, setCurrentTeam] = React.useState(
    teamMembers[0],
  );
  return (
    <div className="mt-auto flex flex-col items-center w-full bg-white px-8 py-6 md:py-12" data-aos="fade-up">
      <div className="flex flex-col max-w-6xl w-full">
        <h1 className="text-center tracking-wide font-black text-3xl md:text-4xl">
          Meet Our Team
        </h1>
        <p className="max-w-xl text-center mx-auto mt-3 md:mt-4">
          Our philosophy is simple, we work with the most talented
          staff to deliver the best possible outcomes
        </p>

        <div className="my-6 md:my-10 flex items center space-x-3 justify-between overflow-x-auto">
          {teamMembers.map((team, index) => (
            <button
              type="button"
              className={`${
                currentTeam === team
                  ? 'bg-brand-green'
                  : 'bg-brand-green/70'
              } text-white font-semibold px-4 py-3 rounded-md whitespace-nowrap`}
              onClick={() =>
                setCurrentTeam(team)
              }
            >
              {team.group}
            </button>
          ))}
        </div>

        <div className="grid gap-5 gap-x-10 grid-cols sm:grid-cols-2 lg:grid-cols-3">
          {currentTeam.members.map((member, index) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
