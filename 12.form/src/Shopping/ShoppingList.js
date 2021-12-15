import React,{Component} from 'react'
import ShoppingListForm from './ShoppingListForm'
import {v1 as uuid} from 'uuid';

class ShoppingList extends Component {
   constructor(props){
       super(props)
       this.state = {
           items: [
               {name: 'Milk', qty: '2 gallons', id: uuid()},
               {name: 'Bread', qty: '2 loaves', id: uuid()}
           ]
       }
       this.addItem = this.addItem.bind(this)
   }
   addItem(item){
       let newItem = { ...item, id:uuid() }
       this.setState(state =>({
            items: [...state.items, newItem]
        }))
   }
    render(){
        return(
            <div>
              <ul>
                  {this.state.items.map( item => (
                      <li key={item.id}> 
                          {item.name}: {item.qty}
                      </li>
                  ))}
              </ul>
              <ShoppingListForm addItem={this.addItem}/>

            </div>
        )
    }
}

export default ShoppingList