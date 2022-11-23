const ce = (el) => document.createElement(el);

const qs = (el) => document.querySelector(el);

const GET = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export { ce, qs, GET };
