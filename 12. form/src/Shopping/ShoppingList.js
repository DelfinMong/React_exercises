import React,{Component} from 'react'
import ShoppingListForm from './ShoppingListForm'

class ShoppingList extends Component {
   constructor(props){
       super(props)
       this.state = {
           items: [
               {name: 'Milk', qty: '2 gallons'},
               {name: 'Bread', qty: '2 loaves'}
           ]
       }
   }
    render(){
        return(
            <div>
              <ul>
                  {this.state.items.map( item => (
                      <li>
                          {item.name}: {item.qty}
                      </li>
                  ))}
              </ul>
            </div>
        )
    }
}

export default ShoppingList