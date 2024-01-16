import { PropsWithChildren } from "react";

export const enum AttachmentType {
  URL = "url",
  Image = "image",
  Audio = "audio",
}

export interface Category {
  name: string;
  slug: string;
}

export interface Article {
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  createdAt: number;
  categories: Array<Category>;
}

export interface Attachment {
  type: AttachmentType;
  value: Array<string>;
}

export type ContentComponentProps = PropsWithChildren<unknown>;

export type ContentComponent = React.FC<ContentComponentProps>;

export interface TimelineRecord {
  date: Date;
  title: string;
  content: ContentComponent;
  url?: string;
}
