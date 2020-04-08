import React, { Component } from "react";
import ReactDom from 'react-dom';

// class Pagination extends Component {
//   constructor() {
//       super();
//       this.state = {
//           names: ['Ala', 'Ala', 'gvhgh', 'Ala', 'jhfhf', 'rfdfd', 'esesf', 'Ala', 'khjh', 'Ala'],
//           currentPage: 1,
//           itemsPerPage: 3

//       }
//   }

//   handleClick = (event, i) => {
//     this.setState({
//       currentPage: i
//     })
//   }

//   render() {

//       const { names, currentPage, itemsPerPage } = this.state;

//       const indexOfLast = currentPage * itemsPerPage;
//       const indexOfFirst = indexOfLast - itemsPerPage;
//       const currentNames = names.slice(indexOfFirst, indexOfLast);
      

//       const elements = currentNames.map((item, i) => {
//           return <li key={i}>{item}</li>
//       })

//       const pageNumbers = [];

//       for (let i=1; i <= Math.ceil(names.length/itemsPerPage);i++) {
//           const element = <li key={i} onClick={e=>this.handleClick(e,i)}> {i} </li>
//           pageNumbers.push(element)
//       }

      
//       return <section>
//           <ul className='names'>
//               {elements}
//           </ul>
          
//           <ul className='numbers'>
//               {pageNumbers}
//           </ul>
//       </section>
//   }
// }