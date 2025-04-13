import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [noteList, setNoteList] = useState([]);
  console.log(noteList);
  console.log(typeof noteList);
  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl text-semibold">To Do Tasks</h1>
        <Input noteList={noteList} setNoteList={setNoteList} />
      </div>
      <div className=" flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {noteList.map((Note, index) => (
          <Board
            key={index}
            index={index}
            Note={Note}
            noteList={noteList}
            setNoteList={setNoteList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
