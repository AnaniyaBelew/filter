import { Component } from "react";
class App extends Component {
  constructor()
  {
    super();
    this.state=
    {
      People:[]
    }
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{return {People:users}},()=>console.log(this.state.People)));
  }
render(){
  return (
    <div className="App">
      <input className="search-box" type="search" placeholder="Search people" onChange={(event)=>
        {
            const searchstr=event.target.value.toLowerCase();
            const filteredPeople= this.state.People.filter((people)=>
            {
                  return (people.name.toLowerCase().includes(searchstr))
            });
            this.setState(()=>{return{People:filteredPeople}})
        }}/>
      {
        this.state.People.map((People)=>
        {
          return(<h1 key={People.id}>{People.name}</h1>)
        })
      }
    </div>
  );
}
}
export default App;
