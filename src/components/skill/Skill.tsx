import React, { FunctionComponent } from 'react';

import Text from '../common/text/Text';

const className = {
  root: `flex justify-between items-center`,
  bar: `w-36 h-2 rounded-sm bg-zinc-200`,
  indicator: `h-2 rounded-sm bg-blue-500 animate-increase`,
};

interface SkillProps {
  title: string;
  alpha: number;
}

const Skill: FunctionComponent<SkillProps> = ({ title, alpha }) => (
  <div className={className.root}>
    <Text bold>{title}</Text>

    <div className={className.bar}>
      <div style={{ width: `${alpha * 100}%` }}>
        <div className={className.indicator} />
      </div>
    </div>
  </div>
);

export default Skill;
