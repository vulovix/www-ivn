import React from "react";
import { TimelineRecord } from "./constants";

interface TimelineItemProps {
  record: TimelineRecord;
  localeCode: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ record, localeCode }) => {
  const Content =
    typeof record.content === "string" ? record.content : <record.content />;
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
      <a className="timeline__item-link" href="#">
        {record.title}
      </a>
      <br />
      <small className="timeline__item-pub">{Content}</small>
    </li>
  );
};

export default TimelineItem;
