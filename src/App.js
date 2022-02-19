import "./App.css";
import SongComponent from "./components/SongComponent";
import SongDetail from "./components/SongDetail";
import { chooseSong1, chooseSong2, chooseSong3 } from "./store/action";
import { store } from "./store/store";
import { useEffect } from "react";

function App() {
   useEffect(() => {
     console.log(store)
   }, [])
  return (
    <div className="App">
      <div className="container">
        <SongComponent song="Picture Perfect" /><button onClick={() => store.dispatch(chooseSong1())}>SELECT</button>
        <SongComponent song="Your power" /><button onClick={() => store.dispatch(chooseSong2())}>SELECT</button>
        <SongComponent song="Hear me calling" /><button onClick={() => store.dispatch(chooseSong3())}>SELECT</button>
      </div>
      <SongDetail/>
    </div>
  );
}
export default App;
