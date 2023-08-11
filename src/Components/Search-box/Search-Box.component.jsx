import { Component } from "react";
import '../Search-box/Search-Box.component.style.css'
class SearchBox extends Component
{
    render()
    {
        return (
            <input className={`Search-box ${this.props.name}`} type="Search" 
            placeholder={this.props.placeholder}
            onChange={this.props.onchangeHandeller}/>
        )
    }
}
export default SearchBox