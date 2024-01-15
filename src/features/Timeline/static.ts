import { Month, Timestamp } from "../../utils/date";

export const attachments: Record<
  string,
  Array<{ type: string; value: Array<string> | string }>
> = {
  // https://www.canva.com/design/DAF53ls2aBs/WnJpaF3Cm9PykoovGUFyww/watch?utm_content=DAF53ls2aBs&utm_campaign=designshare&utm_medium=link&utm_source=editor
  Oaza: [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/mpfqokvusn5nfjl8cpku.png",
      ],
    },
    {
      type: "url",
      value: "https://oaza.dev",
    },
  ],
  Pluton: [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/z3pb47fku7zjj3u73qy7.png",
        "https://res.cloudinary.com/komplexica/image/upload/hhvygotenpstofbvrs7p.png",
      ],
    },
    {
      type: "url",
      value: "https://pluton.rs",
    },
  ],
  MindHub: [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/tujyeqja7p9smt2qllhm.png",
        "https://res.cloudinary.com/komplexica/image/upload/o4gyezjflci0zshpfcc1.png",
        "https://res.cloudinary.com/komplexica/image/upload/g3wjrt4xbkzss5cdz3ka.png",
      ],
    },
    {
      type: "url",
      value: "https://mindhub.dev",
    },
  ],
  cryptograph: [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/r7cnjvwkmir1cg3eiiw9.png",
      ],
    },
    {
      type: "url",
      value: "https://76yc3r.csb.app",
    },
  ],
  annoUIng: [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/xceiqbxoi8il8wj6oogi.png",
      ],
    },
    {
      type: "url",
      value: "https://qx6ypq.csb.app",
    },
  ],
  Wishlist: [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/xfxdqf52ews7wm2pbohy.png",
      ],
    },
    {
      type: "url",
      value: "https://wishlists.dev",
    },
  ],
  "Crystal Cocktail Bar": [
    {
      type: "image",
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/vne5ace3ue4ejmfrorb2.png",
        "https://res.cloudinary.com/komplexica/image/upload/r7b5hdgusnqyalbeuky4.png",
      ],
    },
    {
      type: "url",
      value: "https://ivanreacts-9ae4b.firebaseapp.com",
    },
  ],
};

export const timeline = [
  {
    title: "Oaza",
    date: Timestamp(27, Month.August, 2023),
    content:
      "Sharing stories about the tools I create and capturing day-to-day moments of learning and knowledge growth.",
    // url: "https://oaza.dev",
  },
  {
    title: "annoUIng",
    date: Timestamp(31, Month.July, 2023),
    content: `React Components Library with a bad UI/UX.`,
    // url: "https://www.npmjs.com/package/@localxost/annouing",
  },
  {
    title: "cryptograph",
    date: Timestamp(30, Month.July, 2023),
    content: `The effect of deciphering textual content.`,
    // url: "https://www.npmjs.com/package/@localxost/cryptograph",
  },
  {
    title: "Wishlist",
    date: Timestamp(23, Month.November, 2020),
    content: `Instantly visualize your links as delightful wishes.`,
  },
  {
    title: "Crystal Cocktail Bar",
    date: Timestamp(15, Month.August, 2017),
    content: `My very first React app that went live! 🍻 🎉 \n I'm so proud of this project! 🥳`,
    // url: "https://ivanreacts-9ae4b.firebaseapp.com",
  },
  // //   {
  // //     date: Timestamp(31, Month.December, 2023),
  // //     title: "Year of Love",
  // //     content: "",
  // //   },
  // {
  //   date: Timestamp(4, Month.January, 2023),
  //   title: "Oasis 5",
  //   content: "",
  // },
  // {
  //   date: Timestamp(16, Month.October, 2022),
  //   title: "Oasis 4",
  //   content: "",
  // },
  // {
  //   date: Timestamp(18, Month.September, 2022),
  //   title: "Oasis 3",
  //   content: "",
  // },
  // {
  //   date: Timestamp(17, Month.September, 2022),
  //   title: "Oasis 2",
  //   content: "",
  // },
  // {
  //   date: Timestamp(24, Month.July, 2022),
  //   title: "Oasis 1",
  //   content: "",
  // },
  // {
  //   date: Timestamp(19, Month.September, 2022),
  //   title: "Energy 3",
  //   content: "",
  // },
  // {
  //   date: Timestamp(22, Month.May, 2022),
  //   title: "Energy 2",
  //   content: "",
  // },
  // {
  //   date: Timestamp(3, Month.May, 2022),
  //   title: "Energy 1",
  //   content: "",
  // },
  // {
  //   date: Timestamp(10, Month.May, 2022),
  //   title: "Aura 3",
  //   content: "",
  // },
  // {
  //   date: Timestamp(5, Month.May, 2022),
  //   title: "Aura 2",
  //   content: "",
  // },
  // {
  //   date: Timestamp(1, Month.May, 2022),
  //   title: "Aura 1",
  //   content: "",
  // },
  // {
  //   date: Timestamp(23, Month.May, 2022),
  //   title: "Oasis",
  //   content: "Solo composed melodies",
  // },
  // {
  //   date: Timestamp(1, Month.May, 2022),
  //   title: "Aura",
  //   content: "A mixture of solo composed melodies with existing sounds",
  // },
  // {
  //   date: Timestamp(23, Month.December, 2022),
  //   title: "Energy",
  //   content: "Existing sounds composed together",
  // },
  // {
  //   date: Timestamp(31, Month.December, 2022),
  //   title: "Year of Music",
  //   content:
  //     "In 2022, I ventured into music production, mastered a versatile mixing and composing app, wrote a few lyrics, crafted a few melodies, and confidently produced three full-length albums.",
  // },
  // {
  //   date: Timestamp(7, Month.May, 2022),
  //   title: "Music Producer",
  //   content: `I started producing music, with a lot of inspiration and the will to fit
  //     rhythms and melodies into my unique compositions.`,
  // },
  // //   {
  // //     date: Timestamp(27, Month.July, 2023),
  // //     title: "v3.1",
  // //     content: `75`,
  // //   },
  // //   {
  // //     date: Timestamp(21, Month.November, 2021),
  // //     title: "v3.0",
  // //     content: `117`,
  // //   },
  // {
  //   date: Timestamp(10, Month.March, 2021),
  //   title: "Public Writing",
  //   content: `Starting a blog, I'm now putting pen to digital paper to express my ideas
  //     and stories with the world.`,
  // },
  // {
  //   date: Timestamp(4, Month.February, 2019),
  //   title: "React Developer",
  //   content: `Chasing innovation, our protagonist switched gears, embracing the reactive
  //     charm of React and taking advantage of new opportunities at another
  //     company.`,
  // },
  // {
  //   date: Timestamp(10, Month.April, 2018),
  //   title: "Angular Developer",
  //   content: `First job, first commit: an Angular developer was born.`,
  // },
  // {
  //   date: Timestamp(27, Month.January, 2018),
  //   title: "Graduated College",
  //   content: `Full of excitement, diploma in hand and eyes set on the horizon of my
  //     career, I've closed the chapter on my college journey.`,
  // },
  // //   {
  // //     date: Timestamp(1, Month.November, 2016),
  // //     title: "v2.1",
  // //     content: `75`,
  // //   },
  // //   {
  // //     date: Timestamp(1, Month.January, 2016),
  // //     title: "v2.0",
  // //     content: `104`,
  // //   },
  // {
  //   date: Timestamp(1, Month.October, 2014),
  //   title: "College",
  //   content: `Fuelled by a newfound passion for technology, I enrolled in an IT college
  //     to master software development and engineer solutions for tomorrow's
  //     digital challenges.`,
  // },
  // //   {
  // //     date: Timestamp(1, Month.August, 2014),
  // //     title: "v1.1",
  // //     content: `85`,
  // //   },
  // //   {
  // //     date: Timestamp(1, Month.March, 2014),
  // //     title: "v1.0",
  // //     content: `104`,
  // //   },
  // {
  //   date: Timestamp(1, Month.September, 2010),
  //   title: "High School",
  //   content: `I began my adventure at an IT-oriented high school, learning the basics of
  //     programming algorithms.`,
  // },
  // {
  //   date: Timestamp(1, Month.September, 2006),
  //   title: "Music School",
  //   content: `A clarinet caught my eye and spoke to me in soft tones of oriental music,
  //     pulling me into a world of rhythm and harmony.`,
  // },
  // {
  //   date: Timestamp(1, Month.September, 2002),
  //   title: "Primary School",
  //   content: `I stepped into the world of education with a backpack larger than my
  //     dreams, ready to write my first letters on the empty page of life.`,
  // },
  // {
  //   date: Timestamp(26, Month.June, 1995),
  //   title: "Day of birth",
  //   content: `The moment I emitted my first cry to the world, my family celebrated the
  //     arrival of a new member.`,
  // },
];
