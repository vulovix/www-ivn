export const BlogContent = (props: {
  description: string;
  image: string;
  categories: Array<any>;
}): JSX.Element => {
  return (
    <div
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "0.3fr 0.7fr",
      //   gap: "0.5rem",
      // }}
      className="timeline__item-pub"
    >
      {props.image ? (
        <figure>
          <img src={props.image} />
        </figure>
      ) : (
        <></>
      )}
      {props.description}
      <div className="timeline__item-categories">
        {/* <a
          className="timeline__item-category"
          target="_blank"
          href={`https://blog.ivn.dev`}
        >
          Blog
        </a> */}
        {props.categories.map((c) => (
          <a
            className="timeline__item-category"
            target="_blank"
            href={`https://blog.ivn.dev/categories/${c.slug}`}
          >
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};
