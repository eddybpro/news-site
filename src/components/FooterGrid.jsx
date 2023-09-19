import "./FooterGrid.css";
import { data } from "../data";
import FooterGridEl from "./FooterGridEl";

function FooterGrid() {
  return (
    <div className="FooterGrid" id="categories">
      {data.map((el) => (
        <FooterGridEl key={el.id} {...el} />
      ))}
    </div>
  );
}
export default FooterGrid;
