import React from "react";
import { TimelineRecord } from "./constants";

interface TimelineItemProps {
  record: TimelineRecord;
  localeCode: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ record, localeCode }) => {
  const Content =
    typeof record.content === "string" ? (
      <div className="timeline__item-pub">{record.content}</div>
    ) : (
      <record.content />
    );
  const DRaw = new Date(record.date);
  const formattedDate = DRaw.toLocaleDateString(localeCode, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className="timeline__item">
      <time className="timeline__item-time" dateTime={DRaw.toISOString()}>
        {formattedDate}
      </time>
      <br />
      <a
        className="timeline__item-link"
        target={record.url?.startsWith("https://") ? "_blank" : undefined}
        href={record.url}
      >
        {record.title}
      </a>
      <br />
      {Content}
    </li>
  );
};

export default TimelineItem;
