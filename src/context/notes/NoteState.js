import { useState } from "react";
import noteContext from "./noteContext"; 
// import { useState } from "react";
// this will provide the all the state of a note
const NoteState = (props) =>{
    const host = "http://localhost:5000"

      const notesInitial = []
      const [notes , setNotes] = useState(notesInitial);
      const getNotes =  async() =>{
        //addnote api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDNmNjUzNDIzNDI5MDY2MmYyZjI3In0sImlhdCI6MTY5NDUxNTA0NX0.INWxbBb-8gXIFmGFvWSVtFYMkAeZOhnw-SK-08TB3sM"
          },
        });
       const json = await response.json();
       setNotes(json)
      }
      
     
      const addNote =async(title,description,tag) =>{
        //addnote api call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDNmNjUzNDIzNDI5MDY2MmYyZjI3In0sImlhdCI6MTY5NDUxNTA0NX0.INWxbBb-8gXIFmGFvWSVtFYMkAeZOhnw-SK-08TB3sM"
          },
          body: JSON.stringify({title,description,tag}), 
        });
        const note =await  response.json(); 
        setNotes(notes.concat(note));
         //add a note
        
      }
      //delete a note
      const deleteNote =async(id) =>{
        //api call for delete a note
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDNmNjUzNDIzNDI5MDY2MmYyZjI3In0sImlhdCI6MTY5NDUxNTA0NX0.INWxbBb-8gXIFmGFvWSVtFYMkAeZOhnw-SK-08TB3sM"
          },
        });
        const json =await response.json();
        console.log(json);
        //delete
        const newNote = notes.filter((note)=>{return note._id !== id});
        setNotes(newNote);
      }
      // edit a note
      const editNote =async (id,title,description,tag ) =>{ 
        //API CALL
        
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDNmNjUzNDIzNDI5MDY2MmYyZjI3In0sImlhdCI6MTY5NDUxNTA0NX0.INWxbBb-8gXIFmGFvWSVtFYMkAeZOhnw-SK-08TB3sM"
          },
          body: JSON.stringify({title,description,tag}), 
        });
        const json = await response.json();
        console.log(json); 

        let newNote = JSON.parse(JSON.stringify(notes))
        //LOGIC TO EDIT IN CLIENT
        for (let index = 0 ; index < newNote.length ; index++){
          const element = newNote[index];
          if(element._id === id){
            newNote[index].title = title;
            newNote[index].description = description;
            newNote[index].tag = tag;
            break;
          }
        }
        setNotes(newNote);
      }
      return(
            <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
                  {props.children}
            </noteContext.Provider>
      )
}

export default NoteState;


// flow kuch aisa hai ki => noteContext ko kisi b component se call kia jaega but noteContext ka state NoteState.js me fill hoga jaha uski state mentioned hai or changes mentioned hai.