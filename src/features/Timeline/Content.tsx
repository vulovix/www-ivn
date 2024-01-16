import { useState } from "react";
import { RiCamera2Line, RiMusic2Line } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { Attachment, AttachmentType, Category } from "./types";

export const Content = ({
  description,
  categories,
  attachments,
}: {
  description: React.ReactNode;
  categories: Category[];
  attachments?: Attachment[];
}): JSX.Element => {
  const [showImage, setShowImage] = useState(false);
  const renderAttachmentIcon = (attachment: Attachment, index: number) => {
    switch (attachment.type) {
      case AttachmentType.Image:
        return (
          <button
            title="Photos"
            onClick={() => setShowImage(!showImage)}
            key={index}
            className="timeline__item-category"
          >
            <RiCamera2Line />
          </button>
        );
      case AttachmentType.URL:
        return attachment.value.map((attachment) => (
          <a
            title="Website URL"
            key={index}
            className="timeline__item-category"
            target="_blank"
            rel="noreferrer"
            href={attachment}
          >
            <TbWorldWww />
          </a>
        ));
      case AttachmentType.Audio:
        return (
          <button key={index} className="timeline__item-category">
            <RiMusic2Line />
          </button>
        );
      default:
        return null;
    }
  };

  const imageAttachments =
    attachments?.find((attachment) => attachment.type === AttachmentType.Image)
      ?.value || [];

  const renderImageAttachments = imageAttachments.map((img, imgIndex) => (
    <img
      src={img}
      alt={`Attachment ${imgIndex}`}
      key={`${imgIndex}-${imgIndex}`}
      className={showImage ? "image-show" : "image-hide"}
    />
  ));

  return (
    <div className="timeline__item-pub">
      {description}
      <figure
        className={`timeline__item-attachments ${
          imageAttachments?.length === 1 ? "single" : ""
        } ${showImage ? "show" : "hide"}`}
      >
        {renderImageAttachments}
      </figure>

      <div className="timeline__item-categories">
        {categories.map((category) => (
          <a
            key={category.slug}
            title="Category"
            className="timeline__item-category"
            target="_blank"
            rel="noreferrer"
            href={`https://oaza.dev/categories/${category.slug}`}
          >
            {category.name}
          </a>
        ))}
        {attachments?.map(renderAttachmentIcon)}
      </div>
    </div>
  );
};
