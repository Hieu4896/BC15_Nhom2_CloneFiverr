import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Components/homeHeader/homeCarousel.css";
import { NavLink } from "react-router-dom";
import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import {
  EffectFade,
  Navigation,
  Pagination,
  EffectCube,
  Autoplay,
} from "swiper";

export default function HomeDesktop() {
  let carousel1 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-1-900-x1.png";
  let carousel2 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203043/bg-hero-2-900-x1.png";
  let carousel3 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783973/bg-hero-3-900-x1.png";
  let carousel4 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049964/bg-hero-4-900-x1.png";
  let carousel5 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-5-900-x1.png";
  const arrHeroCarousel = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
  ];
  let [filteredData, setFilteredData] = useState([]);
  let [wordEntered, setWordEntered] = useState("");

  let { congViecTheoTen } = useSelector(
    (rootReducer) => rootReducer.HomeReducer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiDanhSachCongViecTheoTen();
    dispatch(action);
  }, []);
  const handleChangeInput = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = congViecTheoTen.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const renderCongViec = () => {
    if (filteredData.length != 0) {
      return filteredData.slice(0, 15).map((prop, index) => {
        return (
          <NavLink className="aStyleSearchbar" to="/homeheader">
            <li className="liStyleSearchbar" key={index}>
              {prop.name}
            </li>
          </NavLink>
        );
      });
    } else {
      return "";
    }
  };

  return (
    <div className="hero-background">
      <Swiper
        modules={[EffectCube, Navigation, Pagination, Autoplay]}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 1,
          shadowScale: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 0,
        }}
      >
        {arrHeroCarousel.map((i, el) => {
          return (
            <SwiperSlide style={{ width: "100%", height: "100%" }}>
              <img
                src={i}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="header">
        <h1>
          <span>Find the perfect freelance services for your business</span>
        </h1>
        <div className="search-bar">
          <form className="formInput">
            <input
              type="text"
              className="searchInput"
              placeholder='Try " Design "'
              onChange={handleChangeInput}
              value={wordEntered}
            />
            {wordEntered !== "" ? (
              <button
                style={{ border: "none", outline: "none", background: "none" }}
                onClick={clearInput}
              >
                <i class="fas fa-backspace"></i>
              </button>
            ) : (
              ""
            )}
            <button className="btn btn-success text-white buttonInput">
              Search
            </button>
          </form>
          <ul
            className={
              filteredData != 0 ? "search-bar-panel active" : "search-bar-panel"
            }
          >
            {renderCongViec()}
          </ul>
          <div class="popular">
            Popular:{" "}
            <ul>
              <li>
                <a class="text-body-2">Website Design</a>
              </li>
              <li>
                <a class="text-body-2">WordPress</a>
              </li>
              <li>
                <a class="text-body-2">Logo Design</a>
              </li>
              <li>
                <a class="text-body-2">NFT Art</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
