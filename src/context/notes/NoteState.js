import { useState } from "react";
import noteContext from "./noteContext"; 
// import { useState } from "react";
// this will provide the all the state of a note
const NoteState = (props) =>{
      //how it works:- 
      // const s1 = {
      //       "name":"surbhi",
      //       "class":"5b"
      // };
      // // made a usestate
      // const [state, setState] = useState(s1);
      // const update = () => {
      //       setTimeout(() =>{
      //             setState({
      //                   "name" : "sonu",
      //                   "class" : "12a"
      //             })
      //       }, 1000)
      // }
      // Add all the data you want to add as a value in the return function 
      // when ever we wrap a state in this function it will automatically include all the children in the function

      // return (
      //       <noteContext.Provider value = {{state:state, update :update}}>
      //             {props.children} 
      //       </noteContext.Provider>
      // )

      const notesInitial = [
            {
              "_id": "62502d854dfe92d7e7eb40dcc2",
              "user": "65003f6534234290662f2f27",
              "title": "subham singh title 2",
              "description": "subham singh description 2",
              "tag": "subham singh",
              "date": "2023-09-14T09:54:28.856Z",
              "__v": 0
            },
            {
              "_id": "6502d86e0dfe92d77eb40d2cc4",
              "user": "65003f6534234290662f2f27",
              "title": "subham singh title 3",
              "description": "subham singh description 3",
              "tag": "subham singh",
              "date": "2023-09-14T09:54:40.088Z",
              "__v": 0
            },
            {
              "_id": "6502d8672dfee92d77eb40dcc6",
              "user": "65003f6534234290662f2f27",
              "title": "subham singh title 4",
              "description": "subham singh description 4",
              "tag": "subham singh",
              "date": "2023-09-14T09:54:47.877Z",
              "__v": 0
            },
            {
              "_id": "65e02d8267dfe92d77eb40dcc6",
              "user": "65003f6534234290662f2f27",
              "title": "subham singh title 4",
              "description": "subham singh description 4",
              "tag": "subham singh",
              "date": "2023-09-14T09:54:47.877Z",
              "__v": 0
            },
            {
              "_id": "65022d867dfe92d77eb40dcc6",
              "user": "65003f6534234290662f2f27",
              "title": "subham singh title 4",
              "description": "subham singh description 4",
              "tag": "subham singh",
              "date": "2023-09-14T09:54:47.877Z",
              "__v": 0
            },
            
          ]

      const [notes , setNotes] = useState(notesInitial);
      //add a note
      const addNote =(title,description,tag) =>{
        const note = {
          "_id": "6502d867dfee9222d77eb40dcc6",
          "user": "65003f6534234290662f2f27",
          "title": "subham singh title 4",
          "description": "subham singh description 4 [added this note]",
          "tag": "subham singh",
          "date": "2023-09-14T09:54:47.877Z",
          "__v": 0
        }
        setNotes(notes.push(note));
      }
      //delete a note
      const delteNote =() =>{
        
      }
      // edit a note
      const editNote =() =>{
        
      }
      return(
            <noteContext.Provider value={{notes,addNote,delteNote,editNote}}>
                  {props.children}
            </noteContext.Provider>
      )
}

export default NoteState;


// flow kuch aisa hai ki => noteContext ko kisi b component se call kia jaega but noteContext ka state NoteState.js me fill hoga jaha uski state mentioned hai or changes mentioned hai.