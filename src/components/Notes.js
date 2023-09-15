import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem'
import AddNote from './AddNote';
const Notes = () => {

      const context = useContext(noteContext);
      const { notes, addNote } = context;
      return (
            <>
            {/* <AddNote/> */}
            <div className="row">
                  <h2 className="my-3">Your Notes</h2>
                  {notes.map((notes) => {
                        return <Noteitem key={notes.id} note={notes} />;
                  })}
            </div>
            </>
      )
}

export default Notes
