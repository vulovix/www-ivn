import React from "react";
import { TimelineRecord } from "./types";

interface TimelineItemProps {
  record: TimelineRecord;
  localeCode: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ record, localeCode }) => {
  const date = new Date(record.date);
  const formattedDate = date.toLocaleDateString(localeCode, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <li className="timeline__item">
      <time className="timeline__item-time" dateTime={date.toISOString()}>
        {formattedDate}
      </time>
      <a
        className="timeline__item-link"
        target={record.url?.startsWith("https://") ? "_blank" : undefined}
        rel="noreferrer"
        href={record.url}
      >
        {record.title}
      </a>
      {<record.content />}
    </li>
  );
};

export default TimelineItem;
