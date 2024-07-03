import axios from "axios";
import React, { useEffect, useState } from "react";
import { dOptions } from "../constants";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";
import formatDate from "../utils/formatDate";

const Modal = ({ detailId ,close }) => {
  const dispatch = useDispatch();
  const [d, setDetail] = useState(null);
  useEffect(() => {
    setDetail(null)
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        dOptions
      )
      .then((res) => {
        setDetail(res.data);

        dispatch(setPath(res.data.trail));
      });
  }, [detailId]);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button onClick={close} style={{ background: "#1a1a1a", color: "white" }}>X</button>
        </div>
        {!d ? (
          <div className="loader-wrapper">
            <div className="loader">
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>
              <span>Kuyruk Kodu</span>
              <span>{d.aircraft.registration}</span>
            </p>
            {d.aircraft.images ? (
              <img
                src={
                  d.aircraft.images?.large
                    ? d.aircraft.images.large[0].src
                    : d.aircraft.images.thumbnails[0].src
                }
                alt=""
              />
            ) : (
              <p>Fotograf Bulunamadi</p>
            )}
            <p>
              <span>Sirket: </span>
              <span>{d.airline?.short}</span>
            </p>
            <p>
              <span>Kalkis: </span>
              <a href={d.airport?.origin?.website} target="_blank">
                {d.airport?.origin?.name}
              </a>
            </p>
            <p>
              <span>Iniş: </span>
              <a href={d.airport?.destination?.website} target="_blank">
                {d.airport?.destination?.name}
              </a>
            </p>
            <p>
              <span>Kalkis Zamani: </span>
              <span>
                {d.time?.scheduled?.departure > 0
                  ? formatDate(d.time?.scheduled?.departure)
                  : "Bilinmiyor"}
              </span>
            </p>
            <p>
              <span>İniş Zamani: </span>
              <span>
                {d.time?.scheduled?.departure > 0
                  ? formatDate(d.time?.scheduled?.arrival)
                  : "Bilinmiyor"}
              </span>
            </p>

            <p className={d.status?.icon}>
              <span>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
