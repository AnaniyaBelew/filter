import { Component } from "react";
import '../Card-list/cardListStyles.css'
class CardList extends Component
{
    render()
    {
        const {people}=this.props;
        return(
        <div className="card-list">
            {
                people.map(people=>(
                <div className="card-container" key={people.id}>
                    <img alt={people.name} src={`https://robohash.org/${people.id}?set=2`}></img>
                    <h1>{people.name}</h1>
                    <p>{people.email}</p>
                </div>
                ))
            }
        </div>
        );
    }

}
export default CardList