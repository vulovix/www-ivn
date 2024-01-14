import { useState } from "react";
import { RiCamera2Line, RiMusic2Line } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";

interface Category {
  name: string;
  slug: string;
}
interface Attachment {
  type: "image" | "audio" | "url";
  value: string | Array<string>;
}
export const BlogContent = (props: {
  description: string;
  image: string;
  categories: Array<Category>;
  attachments: Array<Attachment> | undefined;
}): JSX.Element => {
  const [showImage, setShowImage] = useState(false);
  const imageAttachment: Attachment | undefined = props.attachments?.find(
    (attachment) => attachment.type === "image"
  );
  const imageAssets = imageAttachment
    ? {
        ...imageAttachment,
        value:
          typeof imageAttachment.value === "string"
            ? [imageAttachment.value]
            : imageAttachment.value,
      }
    : undefined;

  return (
    <div className="timeline__item-pub">
      {/* {props.image ? (
        <figure>
          <img src={props.image} />
        </figure>
      ) : (
        <></>
      )} */}
      {props.description}

      <figure
        className={`timeline__item-attachments ${
          imageAssets?.value.length === 1 ? "single" : ""
        } ${showImage ? "show" : "hide"}`}
      >
        {imageAssets?.value.map((imageLink, index) => {
          return (
            <img
              className={showImage ? "image-show" : "image-hide"}
              key={index}
              src={imageLink}
              alt={`Attachment`}
            />
          );
        })}
      </figure>

      <div className="timeline__item-categories">
        {props.categories.map((c) => (
          <a
            key={c.slug}
            title="Category"
            className="timeline__item-category"
            target="_blank"
            rel="noreferrer"
            href={`https://oaza.dev/categories/${c.slug}`}
          >
            {/* <RiHashtag /> */}
            {c.name}
          </a>
        ))}
        {props.attachments?.map((attachment, index) => {
          if (attachment.type === "image") {
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
          }
          if (attachment.type === "url") {
            return (
              <a
                title="Website URL"
                key={index}
                className="timeline__item-category"
                target="_blank"
                href={attachment.value.toString()}
                rel="noreferrer"
              >
                <TbWorldWww />
              </a>
            );
          }
          if (attachment.type === "audio") {
            return (
              <button key={index} className="timeline__item-category">
                <RiMusic2Line />
              </button>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
};
