
import { useState } from 'react';

import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component'
// import logo from './logo.svg';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('') // [value, setValue]
  console.log({searchField});

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();        
    setSearchField(searchFieldString)
    };
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolordex</h1>
      <SearchBox 
      className='monsters-search-box'
      onChangeHandler={onSearchChange} 
      placeholder='search monsters'
      />
      
      {/* 
      // <CardList monsters={filteredMonsters} /> */}
    </div>
  )
}







// import { Component } from 'react'; *for class app*


// class App extends Component {
//   //constructor object is in charge of creating the object
//   //for the class is in and is needed for a class to work.
//   //it sets the value of -this- to the object
//   //the constructor always comes first in a class
//   constructor() {
//     super();

//   this.state = {
//     monsters: [],
//     searchField: ''
    
//   };
//   console.log('Constructor 1');
//   }

//   // whenever there is a class component that needs to leverage
//   // some api call to get data to display the  appropriate ui
//   // use the componentDidMount()

//   componentDidMount() {
//     console.log('componentDidMount 3');
//     fetch('http://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then( (users) => this.setState(() => {
//         return {monsters: users}
//       },
//        () => {
//          console.log(this.state); //use this not monsters
//        }
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();        
//     this.setState(() => {
//         return {searchField};
//     });          
//   }

//   render() {
//     console.log('Render 2');
    
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//     <div className='App'>
//       <h1 className='app-title'>Monsters Rolordex</h1>
//       <SearchBox 
//       className='monsters-search-box'
//       onChangeHandler={onSearchChange} 
//       placeholder='search monsters'
//       />
//       <CardList monsters={filteredMonsters} />
//     </div>
//     );
//   }
 
// }

export default App;
