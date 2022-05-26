import { Component } from 'react';

import Card from '../card/card.component'
import './card-list.styles.css';

// a compnent must have only one parent element
class Cardlist extends Component {
    render() {
        const { monsters } = this.props;

        return ( 
        <div className='card-list'>
            {monsters.map((monster) => {
                return (
               <Card monster={monster}/>
                )
            })}
        </div>
        )
    }
}

export default Cardlist;


