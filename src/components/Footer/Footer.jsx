import "./footer.scss"
import designSvg from "../../assets/design.svg"

function Footer() {

  return (
    <div className="footer-div">
      <div className="anth">
    <a
      href="https://github.com/Franseck"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <h2 className="brand">{"Anthony"}</h2>
    </a>
    <img
      src={designSvg}
      alt="design"
      style={{ width: "40px", margin: "0  25px 0 10px" }}
    />
    <span>Copyright FC</span>
</div>
    <div className="last">
    <h3>Made by Seckin</h3>
  </div>
  </div>
  )
}

export default Footer