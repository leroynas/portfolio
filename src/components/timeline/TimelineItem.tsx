import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `relative pb-10 ml-6 -tranzinc-y-4 last:pb-0`,
  avatar: `absolute -left-8 top-5 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-white`,
  container: `rounded-lg border border-zinc-200 bg-white p-4 shadow-sm`,
  heading: `items-center justify-between sm:flex mb-4 last:mb-0`,
  meta: `block mb-1 text-sm font-normal text-zinc-400 sm:order-last sm:mb-0`,
  title: `flex text-md font-semibold`,
  content: `mt-2`,
};

interface TimelineItemProps {
  title: string;
  meta?: string;
  children?: ReactNode;
}

const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  title,
  meta,
  children,
}) => (
  <li className={className.root}>
    <span className={className.avatar} />

    <div className={className.container}>
      <div className={className.heading}>
        {meta && <span className={className.meta}>{meta}</span>}

        <div className={className.title}>{title}</div>
      </div>

      {children && <div className={className.content}>{children}</div>}
    </div>
  </li>
);

export default TimelineItem;
