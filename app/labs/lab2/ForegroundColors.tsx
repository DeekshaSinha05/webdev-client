
export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>

      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">
          this text is green
        </span>
      </p>

      <p className="wd-fg-color-blue">
        My interest in distributed systems and AI has shown me how
        important web development is in making complex technologies
        accessible to users.{" "}
        <span className="wd-fg-color-green">
          I&apos;m excited to explore how web development brings
          different technologies together to create meaningful
          user experiences.
        </span>
      </p>

      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This paragraph demonstrates blue text with{" "}
        <span className="wd-fg-color-black">
          a black nested span.
        </span>
      </p>
    </div>
  );
}
