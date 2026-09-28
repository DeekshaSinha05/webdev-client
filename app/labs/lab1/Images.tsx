export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>

      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />

      <br />

      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <br />

      <h4>My Image</h4>
      <img
        id="wd-your-image"
        src="/images/neu.jpg"
        width="400px"
        alt="Northeastern University"
      />

      <br />

      <h4>Sample Image</h4>
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"
        width="200px"
        alt="Mountain landscape"
      />
    </div>
  );
}