import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function App() {
  const [img, setImg] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";
  const getPhotos = () => {
    axios
      .get(url)
      .then((r) => setImg(r.data.slice(0, 20)))
      .catch();
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="App">
      {img.map((i) => {
        return (
          <LazyLoadImage key={i.url} height="400px" src={i.url} width="400px" />
        );
      })}
    </div>
  );
}

export default App;
