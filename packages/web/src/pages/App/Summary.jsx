export default function Summary() {
  return (
    <>
      <div className="rounded-lg bg-white my-10 mx-[2%]">
        <div>
          <h2 className="text-5xl font-bold flex justify-start ml-[4%] pt-10 text-secondary">
            Tax Reduction
          </h2>
          <hr className="mx-[4%] my-4 h-0.5 w-[10%] border-t-0 bg-secondary opacity-100" />
        </div>
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
      </div>
    </>
  );
}
