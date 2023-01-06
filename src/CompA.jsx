import React,{Component} from "react"

class CompA extends Component {

  constructor(props){
    super(props);
    this.state={
      item: [],
    isLoaded: false,
    }
  }
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoaded:true,
      items: json,
      
    })
  })
}
  render(){
    var { isLoaded, items} = this.state;
    if(!isLoaded){
      return(
        <h1>Loading..........</h1>
      )
    }
    else{
       return(
      <div>
        {items.map(item=>(
        <li key={item.id}>
        NAME: {item.name} ||| Email: {item.email}
        </li>
        
        ))}
      </div>
    )
    }
   
  }
}
export default CompA