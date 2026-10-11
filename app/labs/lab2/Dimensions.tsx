
export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>

      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">
          Portrait
        </div>

        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>

        <div className="wd-dimension-square wd-bg-color-red">
          Square
        </div>

        <div className="wd-my-dimension wd-bg-color-blue wd-fg-color-white">
          My example: 120 × 80px
        </div>

        <div
          id="wd-ai-dimension"
          className="wd-ai-dimension wd-bg-color-yellow"
        >
          This is a longer sentence inside a box with a fixed width
          and height.
        </div>
      </div>
    </div>
  );
}
