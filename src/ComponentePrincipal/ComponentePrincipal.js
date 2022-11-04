import React from "react"
import { Component } from "react"
import { Helmet } from "react-helmet";

//COMPONENTE



class ComponentePrincipal extends Component{
  constructor(props){
    super(props);
    this.state={
      frases:[
        "kkkkkkkkkkkkk",
        "We can do it!.",
        "We can?...",
        "IDK",
        "I think we can",
        "La libertad está en ser dueños de la propia vida",
        "¿Es el hombre sólo un fallo de Dios, o Dios sólo un fallo del hombre?",
        "La buena conciencia es la mejor almohada para dormir",
      ],
      aut:[
        "me",
    "your mom",
    "messi",
    "ronaldo",
    "yisos",
    "PLATÓN",
    "NIETZSCHE",
    "SÓCRATES",

      ],
      autor:"",
      frasess:""
    }
    this.aleatorio = this.aleatorio.bind(this);
  }


  aleatorio(){
    //Cada vez que se agrega una frase el multiplicador debe ser modificado.
    const form = Math.floor(Math.random()*8);
   this.setState({
    autor: "",
    frasess: "",
    autor: [this.state.aut[form]],
    frasess: [this.state.frases[form]]
   })
  }
  render(){
    
  return(
    <body>
     <head>
              <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
              </head>
    <div id="quote-box" class="container">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      <div class="text-center">
      <h2>{this.state.frasess}</h2>
      </div>
      <div class=" d-flex justify-content-end">
      <h2>{this.state.autor}</h2>
      </div>
     

     <div class="text-center">
     <button onClick={this.aleatorio}>Random!</button>
    <a href="twitter.com/intent/tweet" id="tweet-quote">twittear</a>

    </div>
    </div>
  </body>
  )
 }
}

export default ComponentePrincipal
