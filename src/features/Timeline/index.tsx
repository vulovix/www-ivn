import React, { useState, useEffect, useRef } from "react";
import TimelineItem from "./Item";
import "./style.css";
import { getTimeline } from "./utils";
import { noop } from "../../utils/operations";
import { TimelineRecord } from "./types";

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<TimelineRecord[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const localeCode = "en-US";

  useEffect(() => {
    const loadTimeline = async function (): Promise<void> {
      const timeline = await getTimeline();
      setTimeline(timeline);
    };
    loadTimeline().then(noop, noop);
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
        rootMargin: "100px",
        threshold: 0,
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
      <ul className="timeline__items">
        {timeline.map((record, index) => (
          <TimelineItem key={index} record={record} localeCode={localeCode} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
