
const Mix = "Mix";



//REDUCER
const defaultState={
  alt: ["kkkkkkkkkkkkk",
  "We can do it!.",
  "We can?...",
  "IDK",
  "I think we can"],
  aut: [
    "me",
    "your mom",
    "messi",
    "ronaldo",
    "yisos"
  ],

}

const aleatorioReducer=(state = defaultState, action) =>{ 
 switch(action.type){
   case Mix: 
     return{
      alt: state.alt,
      aut: state.aut
     }
   default: return state
 }
} 

export {Mix}

export default aleatorioReducer