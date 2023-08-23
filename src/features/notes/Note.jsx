import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";
import { FaGlasses, FaPenSquare } from "react-icons/fa";

const Note = ({ noteId }) => {
  const note = useSelector((state) => selectNoteById(state, noteId));
  console.log(note);

  // const pal = useSelector((state) => selectAllNotes(state));
  // console.log(pal);

  const navigate = useNavigate();

  if (note) {
    const created = new Date(note.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(note.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dash/notes/${noteId}`);

    return (
      <tr onClick={() => handleEdit()} className="note-list-row">
        <td className="note-status">
          {note.completed ? (
            <span className="note__status--completed">Completed</span>
          ) : (
            <span className="note__status--open">Open</span>
          )}
        </td>
        <td className="note-created">{created}</td>
        <td className="note-updated">{updated}</td>
        <td className="note-title">{note.title}</td>
        <td className="note-username">{note.username}</td>
        <td className="note-edit">
          <button className="icon-button-edit" onClick={handleEdit}>
            <FaGlasses />
          </button>
        </td>
      </tr>
    );
  } else {
    return null;
  }
};

export default Note;
