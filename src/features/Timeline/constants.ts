import { Month, Timestamp } from "../../utils/date";
import {
  AngularDeveloper,
  Birth,
  College,
  GraduateCollege,
  HighSchool,
  MeV2,
  MidiKeyboard,
  MusicProducer,
  MusicSchool,
  PrimarySchool,
  PublicWriting,
  ReactDeveloper,
} from "./components";

export interface TimelineRecord {
  date: Date;
  title: string;
  content: string | React.FC;
}

export const getTimeline = (): TimelineRecord[] => {
  const timeline: TimelineRecord[] = [
    {
      date: Timestamp(7, Month.May, 2022),
      title: "Music Producer",
      content: MusicProducer,
    },
    {
      date: Timestamp(21, Month.November, 2021),
      title: "Me v2.0",
      content: MeV2,
    },
    {
      date: Timestamp(10, Month.March, 2021),
      title: "Public Writing",
      content: PublicWriting,
    },
    {
      date: Timestamp(4, Month.February, 2019),
      title: "React Developer",
      content: ReactDeveloper,
    },
    {
      date: Timestamp(10, Month.April, 2018),
      title: "Angular Developer",
      content: AngularDeveloper,
    },
    {
      date: Timestamp(27, Month.January, 2018),
      title: "Graduated College",
      content: GraduateCollege,
    },
    {
      date: Timestamp(1, Month.October, 2014),
      title: "College",
      content: College,
    },
    {
      date: Timestamp(1, Month.September, 2010),
      title: "High School",
      content: HighSchool,
    },
    {
      date: Timestamp(1, Month.September, 2006),
      title: "Music School",
      content: MusicSchool,
    },
    {
      date: Timestamp(1, Month.September, 2002),
      title: "Primary School",
      content: PrimarySchool,
    },
    {
      date: Timestamp(26, Month.June, 1995),
      title: "Day of birth",
      content: Birth,
    },
  ];
  return timeline.sort((a, b) => b.date.getTime() - a.date.getTime());
};
