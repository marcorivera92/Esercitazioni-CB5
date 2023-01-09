import "./button.css";

export function Button(props) {
  const {
    className = "",
    children = "no children",
    variant = "none",
    ...otherAttributes
  } = props;

  return (
    <button
      className={`btn btn--variant-${variant} ${className}`}
      {...otherAttributes}
    >
      {" "}
      {children}
    </button>
  );
}
