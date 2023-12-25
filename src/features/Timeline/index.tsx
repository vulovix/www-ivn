import React, { useState, useEffect, useRef } from "react";
import TimelineItem from "./Item";
import "./style.css";
import { TimelineRecord, getTimeline } from "./constants";

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<TimelineRecord[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const localeCode = "en-US";

  useEffect(() => {
    setTimeline(getTimeline());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.toggle(
              "timeline__item--in",
              entry.isIntersecting
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline__item");
      items.forEach((item) => observer.observe(item as HTMLElement));
    }

    return () => {
      observer.disconnect();
    };
  }, [timeline]);

  return (
    <div ref={timelineRef} className="timeline">
      {/* <h1>:)</h1> */}
      <ul className="timeline__items">
        {timeline.map((record, index) => (
          <TimelineItem key={index} record={record} localeCode={localeCode} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
