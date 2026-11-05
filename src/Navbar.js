// topic- custom components and import/export

// function Navbar(){
//     return(
//         <div style={{backgroundColor: 'black' , color: 'white',padding: '10px'}}>
//             <h2>Mera Pehla Navbar</h2>
//         </div>
//     )
// }
export default Navbar

// topic - data handling -- state and props
// function Navbar(props){
//     return(
//         <div style={{backgroundColor: 'black' , color: 'white',padding: '10px'}}>
//             <h2>{props.title}</h2>
//         </div>
//     )
// }


// topic- prop destructuring

function Navbar({title}){
    return(
        <div style={{backgroundColor: 'black' , color: 'white',padding: '10px'}}>
            <h2>{title}</h2>
        </div>
    )
}