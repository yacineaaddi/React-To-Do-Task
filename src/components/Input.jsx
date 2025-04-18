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

    </>
  );
};

export default Input;