import React, { FunctionComponent } from 'react';

import Text from '../common/text/Text';

const className = {
  root: `flex justify-between items-center`,
  bar: `w-36 h-2 bg-gray-200`,
  indicator: `h-2 bg-blue-500`,
};

interface SkillProps {
  title: string;
  alpha: number;
}

const Skill: FunctionComponent<SkillProps> = ({ title, alpha }) => (
  <div className={className.root}>
    <Text bold>{title}</Text>

    <div className={className.bar}>
      <div
        className={className.indicator}
        style={{ width: `${alpha * 100}%` }}
      />
    </div>
  </div>
);

export default Skill;
