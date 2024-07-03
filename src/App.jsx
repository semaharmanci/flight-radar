import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions";
import Modal from "./components/Modal";

function App() {
  const [isMapView, setIsMapView] = useState(true);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
  }, []);
  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Harita Görünümü
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={!isMapView ? "active" : ""}
        >
          Liste Görünümü
        </button>
      </div>
      {isMapView ? <MapView setDetailId={setDetailId} /> : <ListView setDetailId={setDetailId} />}
     
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
}

export default App;
