export function Button() {
  const log = () => {
    console.log("Clicked!");
  };

  return (
    <button className="btn" onClick={log}>
      Click here
    </button>
  );
}
