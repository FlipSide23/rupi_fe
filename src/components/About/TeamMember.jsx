import React from 'react';
import { teamMembers } from './data/team';

const TeamMember = ({ member = teamMembers[0].members[0] }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="flex flex-col bg-white/30 backdrop-blur border-white border absolute min-h-[200px] py-8 px-4 bottom-4 left-4 right-4"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold text-white">
            {member.name}
          </h2>
          <p className="text-lg text-white">{member.position}</p>

          <div className="mt-4 md:mt-6 flex flex-wrap items-center space-x-3">
            {member.social.map((media, index) => (
              <a
                key={media.name}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-2 rounded-full hover:bg-green-401"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default TeamMember;
