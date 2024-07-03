import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, isError, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <div>
        <img src="/public/plane-logo.png" alt="" />
        <h3>Flight Radar</h3>
      </div>
      <p>
        {
        isLoading ? "Ucuslar Hesaplaniyor" : isError ? "Üzgünüz bir hata olustu." : flights.length + " Ucus bulundu."
        }
        </p>
    </header>
  );
};

export default Header;
