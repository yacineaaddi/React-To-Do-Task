const Board = ({ Note, index, noteList, setNoteList }) => {
  const DeleteNote = () => {
    let removeIndex = noteList.indexOf(Note);
    noteList.splice(removeIndex, 1);
    console.log(index);
    console.log(removeIndex);
    setNoteList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
    console.log(noteList);
  };
  return (
    <>
      <div className="max-w-md rounded-xl flex flex-col items-center justify-start border text-center text-lg pt-3 pb-4 px-4">
        <p>{Note}</p>
        <button
          onClick={DeleteNote}
          className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
