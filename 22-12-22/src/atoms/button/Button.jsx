import "./button.css";

const buttonVariantAlt = {
  red: "color-red",
};

export function Button(props) {
  // const log = () => {
  //   console.log("Clicked!");
  //      };

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
      {children}
    </button>
  );
}
