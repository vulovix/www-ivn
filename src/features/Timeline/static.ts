import { Month, Timestamp } from "../../utils/date";
import { Attachment, AttachmentType } from "./types";

export const attachments: Record<string, Array<Attachment>> = {
  Copylot: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/kfxkpqgmkpa9ptulfg3d.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://copylot.dev"],
    },
  ],
  Oaza: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/mpfqokvusn5nfjl8cpku.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://oaza.dev"],
    },
  ],
  Pluton: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/z3pb47fku7zjj3u73qy7.png",
        "https://res.cloudinary.com/komplexica/image/upload/hhvygotenpstofbvrs7p.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://pluton.rs"],
    },
  ],
  MindHub: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/tujyeqja7p9smt2qllhm.png",
        "https://res.cloudinary.com/komplexica/image/upload/o4gyezjflci0zshpfcc1.png",
        "https://res.cloudinary.com/komplexica/image/upload/g3wjrt4xbkzss5cdz3ka.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://mindhub.dev"],
    },
  ],
  cryptograph: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/r7cnjvwkmir1cg3eiiw9.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://76yc3r.csb.app"],
    },
  ],
  annoUIng: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/xceiqbxoi8il8wj6oogi.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://qx6ypq.csb.app"],
    },
  ],
  Wishlist: [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/xfxdqf52ews7wm2pbohy.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://wishlists.dev"],
    },
  ],
  "Crystal Cocktail Bar": [
    {
      type: AttachmentType.Image,
      value: [
        "https://res.cloudinary.com/komplexica/image/upload/vne5ace3ue4ejmfrorb2.png",
        "https://res.cloudinary.com/komplexica/image/upload/r7b5hdgusnqyalbeuky4.png",
      ],
    },
    {
      type: AttachmentType.URL,
      value: ["https://ivanreacts-9ae4b.firebaseapp.com"],
    },
  ],
};

export const timeline = [
  {
    title: "Copylot",
    date: Timestamp(8, Month.February, 2024),
    content: () =>
      "A tool for making and sharing bits of code with friends and coworkers.",
  },
  {
    title: "Oaza",
    date: Timestamp(27, Month.August, 2023),
    content: () =>
      "Sharing stories about the tools I create and capturing day-to-day moments of learning and knowledge growth.",
  },
  {
    title: "annoUIng",
    date: Timestamp(31, Month.July, 2023),
    content: () => `React Components Library with a bad UI/UX.`,
  },
  {
    title: "cryptograph",
    date: Timestamp(30, Month.July, 2023),
    content: () => `The effect of deciphering textual content.`,
  },
  {
    title: "Wishlist",
    date: Timestamp(23, Month.November, 2020),
    content: () => `Instantly visualize your links as delightful wishes.`,
  },
  {
    title: "Crystal Cocktail Bar",
    date: Timestamp(15, Month.August, 2017),
    content: () =>
      `My very first React app that went live! 🍻 🎉 \n I'm so proud of this project! 🥳`,
  },
];
