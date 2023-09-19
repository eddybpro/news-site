import PropTypes from "prop-types";

import "./FooterGridEl.css";

function FooterGridEl(props) {
  const { id, title, image, desc } = props;

  return (
    <div className="FooterGridEl">
      <div className="FooterGridEl-ImgBox">
        <img src={image} alt={title} />
      </div>
      <div className="FooterGridEl-TxtBox">
        <h2 className="FooterGridEl-TxtBox-Title">{id}</h2>
        <h3 className="FooterGridEl-TxtBox-SubTitle">{title}</h3>
        <p className="FooterGridEl-TxtBox-Desc">{desc}</p>
      </div>
    </div>
  );
}

FooterGridEl.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
};
export default FooterGridEl;
