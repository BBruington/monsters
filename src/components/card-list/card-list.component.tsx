// import { Component } from 'react';
import { Monster } from '../../App';
import Card from '../card/card.component'
import './card-list.styles.css';

type CardListProps = {
    monsters: Monster[]
}

// a compnent must have only one parent element
                //(props, forwardRef) forwardRef very rare to use
const Cardlist = ({ monsters } : CardListProps) => ( 
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster} />
        })}
    </div>
);

// class Cardlist extends Component { 
//     render(){
//         const {monsters} =this.props;
//         return(
//     <div className='card-list'>
//         {monsters.map((monster) => {
//             return <Card monster={monster} />
//         })}
//     </div>
//     )
// }
// }

export default Cardlist;


