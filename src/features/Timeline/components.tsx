export const BlogContent = (props: {
  description: string;
  image: string;
}): JSX.Element => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.3fr 0.7fr",
        gap: "0.5rem",
      }}
      className="timeline__item-pub"
    >
      <figure>
        <img src={props.image} />
      </figure>
      {props.description}
    </div>
  );
};
