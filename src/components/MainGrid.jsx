import FooterGrid from "./FooterGrid";
import "./MainGrid.css";
import HeroImgM from "../assets/image-web-3-mobile.jpg";
import HeroImgD from "../assets/image-web-3-desktop.jpg";

function MainGrid() {
  return (
    <main>
      <div className="Grid">
        <div className="Grid-ImgBox">
          <picture>
            <source media="(max-width:768px)" srcSet={HeroImgM} />
            <source media="(min-width:769px)" srcSet={HeroImgD} />
            <img src={HeroImgM} alt="web-3" />
          </picture>
        </div>

        <div className="Grid-Title">
          <strong>The Bright Future of Web 3.0? </strong>
        </div>
        <div className="Grid-Info">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>read more</button>
        </div>
        <div className="Grid-NewBox" id="new">
          <h1 className="Grid-NewBox-Title">new</h1>
          <ul className="Grid-NewBox-List">
            <li>
              <h2>Hydrogen VS Electric Cars</h2>
              <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
            </li>
            <li>
              <h2>The Downsides of AI Artistry</h2>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </li>
            <li>
              <h2>Is VC Funding Drying Up?</h2>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <FooterGrid />
    </main>
  );
}
export default MainGrid;
