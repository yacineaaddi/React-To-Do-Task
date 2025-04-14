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

    </>
  );
};
