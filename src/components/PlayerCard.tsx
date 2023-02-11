import React from 'react';

interface Props {
  name: string;
  wiki: string;
}

const PlayerCard: React.FC<Props> = ({ name, wiki }) => {
  return (
    <div>
      <a href={wiki} target="_blank">
        {name}
      </a>
    </div>
  );
};

export default PlayerCard;