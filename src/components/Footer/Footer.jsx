import React from "react";
import "./Footer.css";
// import img from "../Footer/image/footer.png";
// import imglow from "../Footer/image/lowFooter.png";
// import imgtop from "../Footer/image/insFace.png";

const Footer = () => {
  return (
    <div className="main-cotnainer">
      <div className="container_footer ">
        <div className="follow">Follow us</div>
        <div className="top-block">
          {/* <img src={imgtop} alt="qwe" width="15%" /> */}
        </div>
        <div className="botom1-block">
          <div className="up-block">
            <ul>
              <li className="first-li">li borgo</li>
              <li>cantina</li>
              <li>vigneti</li>
              <li>ristorante ela</li>
            </ul>
            <ul>
              <li className="first-li">diversamente vila</li>
              <li>storia</li>
              <li>valoria</li>
              <li>filosofia</li>
              <li>ricerca</li>
              <li>famiglia</li>
            </ul>
            <ul>
              <li className="first-li">franciacorta</li>
              <li>territorio</li>
              <li>metodo</li>
            </ul>
            <ul>
              <li className="first-li">shop</li>
              <li>tutti prodotti</li>
              <li>franciacorta</li>
              <li>vini</li>
              <li>grappe</li>
            </ul>
            <ul>
              <li className="first-li">sostenibilta</li>
              <li>ambientale</li>
              <li>sociale</li>
              <li>goals</li>
            </ul>
          </div>
          <div className="bottom-block">
            <ul>
              <li className="first-li">news</li>
              <li>dicono di noi</li>
            </ul>
            <ul>
              <li className="first-li">hospitality</li>
              <li>agriturismo</li>
              <li>visita in cantina</li>
            </ul>
            <ul>
              <li className="first-li">informazioni</li>
              <li>contatti</li>
              <li>awards</li>
            </ul>
            <ul>
              <li className="first-li">help pages</li>
              <li>codici di smaltimento</li>
              <li>termini e condizioni</li>
              <li>privacy policy</li>
            </ul>
            <ul>
              <li className="first-li">social</li>
              <li>instagram</li>
              <li>facebook</li>
            </ul>
          </div>
          <div className="botom-footer">
            <ul>
              <li>PARTNERS</li>
            </ul>
            {/* <div className="footerImg">
              <img src={img} alt="" />
            </div>
            <div className="footerLowImg">
              <img src={imglow} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
