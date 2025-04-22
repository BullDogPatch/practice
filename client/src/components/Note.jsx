const Note = ({ note, toggleInportance }) => {
  const label = note.important ? 'Make not important' : 'Important';
  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleInportance}>{label}</button>
    </li>
  );
};

export default Note;
