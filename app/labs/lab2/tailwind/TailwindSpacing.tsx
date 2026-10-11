
export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="text-3xl">Margin</h2>
      <div className="bg-blue-200 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>
      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>

      <h2 className="text-3xl mt-8">Padding</h2>
      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4, and bottom padding of 8.
      </div>
      <div className="bg-green-200 p-6">
        This div has padding all around of 6.
      </div>

      <div className="bg-blue-200 pt-8 pb-4 ps-6 pe-2 mt-4">
        My spacing example with different padding on each side.
      </div>

      <div
        id="wd-ai-spacing"
        className="bg-purple-200 mt-6 ps-8 pb-4"
      >
        AI spacing example with top margin, start padding, and bottom padding.
      </div>
    </div>
  );
}
