export default function Summary() {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </>
  );
}
