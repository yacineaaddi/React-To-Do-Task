import { useState } from "react";

const Input = ({ noteList, setNoteList }) => {
  const [input, setInput] = useState("");
  const handleAddNote = (e) => {
    e.preventDefault();
    setNoteList([...noteList, input]);
    setInput("");
    
  };
  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input className="border rounded-lg py-1.5 px-2.5 px-2"
          type="text"
          placeholder="add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="bg-violet-400 text-white py-1.5 px-3 rounded-lg hover:opacity-70 font-semibold" onClick={handleAddNote}>ADD</button>
      </form>
    </>
  );
};

export default Input;
