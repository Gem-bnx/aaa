import React from "react";
import "./style.scss";
import icon2 from "../../assets/images/calendar.svg";
import icon1 from "../../assets/images/location.svg";

import { Location } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationPin,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <div className="searchbar">
      <div className="searchbar__left">
        <div>
          <img src={icon1} alt="hi" className="searchbar__icon"></img>
          <input type="text" placeholder="Nơi xuất phát"></input>
        </div>
        <div>
          <img src={icon1} alt="hi" className="searchbar__icon"></img>
          <input type="text" placeholder="Nơi xuất đến"></input>
        </div>
        <div>
          <img src={icon2} alt="hi" className="searchbar__icon"></img>
          <input type="date" placeholder="Ngày đi"></input>
        </div>
      </div>
      <button>Tìm kiếm</button>
    </div>
  );
}

export default SearchBar;
