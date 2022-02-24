import React, { FunctionComponent, ReactNode } from 'react';

import Text, { TextSizes } from '../common/text/Text';

const className = {
  root: `relative pb-10 ml-6 -translate-y-4 last:pb-0`,
  avatar: `absolute -left-8 top-5 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-white dark:ring-zinc-900`,
  container: `rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900  p-4 shadow-sm opacity-0 animate-slide-in`,
  heading: `items-center justify-between sm:flex mb-4 last:mb-0`,
  meta: `block mb-1 text-sm font-normal text-zinc-400 sm:order-last sm:mb-0`,
  title: `flex text-md font-semibold`,
  content: `mt-2`,
};

interface TimelineItemProps {
  index?: number;
  title: string;
  meta?: string;
  children?: ReactNode;
}

const TIMELINE_ANIMATION_DELAY = 250;

const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  index = -1,
  title,
  meta,
  children,
}) => {
  const animationDelay = `${index * TIMELINE_ANIMATION_DELAY}ms`;

  return (
    <li className={className.root}>
      <span className={className.avatar} />

      {index !== -1 && (
        <div className={className.container} style={{ animationDelay }}>
          <div className={className.heading}>
            {meta && <span className={className.meta}>{meta}</span>}

            <Text size={TextSizes.Large} bold>
              {title}
            </Text>
          </div>

          {children && <div className={className.content}>{children}</div>}
        </div>
      )}
    </li>
  );
};

export default TimelineItem;
