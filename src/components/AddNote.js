import React,{useContext,useState} from 'react';
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
      
      const context = useContext(noteContext);
      const {addNote} = context;
      const [note,setNote] = useState({title:"",description:"",tag:""})
      const handleClick = (e) =>{
            e.preventDefault();
            addNote(note.title , note.description , note.tag)
            setNote({title:"",description:"",tag:""})
      }
      const onChange = (e) =>{
            setNote({...note, [e.target.name]:e.target.value}) //whenever it changes the value in the field then the perticular named for the specific work.
      }
  return (
    <div>
      <div className="container">
      <form>
        <h2 className="my-3">Add a note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control"value={note.title} name="title" id="title" placeholder="Enter the title (minimum 5 characters)" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control"value={note.description} id="description" placeholder="Enter the description (minimum 5 characters)" name="description" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control"value={note.tag} id="tag" placeholder="Enter the tag (minimum 5 characters)" name="tag" onChange={onChange} minLength={5} required/>
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
      </form>
    </div>
    </div>
  )
}

export default AddNote
