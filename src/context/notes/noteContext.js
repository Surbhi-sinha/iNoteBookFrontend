import { createContext } from "react";
// we create a context here using createContext from react component and then imported in the NoteState which is responsible for storing and updating the states of the component.
const noteContext = createContext();

export default noteContext;









// use of context API so basically if we want to use a state from a component2 to other component7 then for using that perticular state we need to pass that state as props from component3 -> component4 -> component5 -> component6 -> component7 and support all the intermediete components do not require that state at all. this  might be hectic in huge projects thus we use  context API which simply stores the state of an element and thus that state can accessed bu just simply importing that context.