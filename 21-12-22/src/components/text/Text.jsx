const textVariant = {
  body: `text-md`,
  title: `text-xl`,
};

export const Text = (props) => {
  const { as = "div", children, variant = "body", ...otherAttributes } = props;

  const Element = as;

  return (
    <Element
      className={`Text ${textVariant[variant] ?? ""}`}
      {...otherAttributes}
    >
      {children}
    </Element>
  );
};
