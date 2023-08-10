import { Component } from "react";
class App extends Component {
  constructor()
  {
    super();
    this.state=
    {
      People:[],
      searchstr:''
    }
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{return {People:users}},()=>console.log(this.state.People)));
  }
  onSearchChange=(event)=>
  {
      console.log(event.target.value)
      const searchstr=event.target.value.toLowerCase();
      this.setState(()=>{return{searchstr};
    });
  };
render(){
  const filteredPeople= this.state.People.filter((people)=>
  {
        return (people.name.toLowerCase().includes(this.state.searchstr))
  })
  return (
    <div className="App">
      <input className="search-box" type="search" placeholder="Search people" onChange={this.onSearchChange}/>
      {
        filteredPeople.map((People)=>
        {
          return(<h1 key={People.id}>{People.name}</h1>)
        })
      }
    </div>
  );
}
}
export default App;
