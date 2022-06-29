import React from 'react'
import { Link } from 'react-router-dom';
import img from "../assets/img4.jpeg";

const Card = () => {
  return (
    <div className="blogCard">
      <div className="cardImg">
        <img src={img} alt="" />
      </div>
      <div className="cardDetails">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/blog/Lorem-ipsum-dolor-sit-amet"
        >
          <h3 className="cardTitle">
            Lorem ipsum dolor sit amet, cons ectetur adipiscing
          </h3>
        </Link>
        <h5 className="cardDescription">
          Etiam ultrices pretium lorem, laoreet rhoncus dui diam pharetra
          viverra. Proin augue massa, vulputate a risus id, finibus eleifend
          nulla. Etiam molestie lorem ac diam viverra porttitor,ut lacinia sem
          finibus ornare. Aliquam vitae velit tortor.
        </h5>
      </div>
    </div>
  );
}

export default Card