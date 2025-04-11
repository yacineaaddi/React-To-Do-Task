import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [noteList, setNoteList] = useState([]);
  console.log(noteList);
  console.log(typeof noteList);
  
}

export default App;
