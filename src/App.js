// import Navbar from './Navbar';
// import {useState} from 'react';
// import './App.css';

// function App() {
//   const [count, setCount]= useState(0)
//   const [text, setText] = useState("")
//   const [age, setAge] = useState(".")
//   return (
//     <div className="App">
//       <h1>Ram Ram.This is my first React App! </h1>
//       <Navbar title="keshav ka navbar"></Navbar>
//       <h2>Mera Counter : {count}</h2>
//       <button onClick={()=> setCount(count + 1)}>Value Badhao</button>
//       <h2>{text}</h2>
//       <input type="text" placeholder="ram ram" value={text}
//       onChange={(event)=>setText(event.target.value)}/>
//       <h3>{age}</h3>
//       <input type="number" placeholder="age" value={age}
//       onChange={(event)=>setAge(event.target.value)}/>
//       <p> kr gya aam react ho gya setup complete</p>
//     </div>
//   );
// }

// export default App;

// topic- conditional rendering  (if else lgatae the js me uski jagha react me ye lgatae h )


// import Navbar from './Navbar';
// import {useState} from 'react';
// import './App.css';

// function App() {
//   const [count, setCount]= useState(0)
//   const [text, setText] = useState("")
//   const [age, setAge] = useState("")
//   return (
//     <div className="App">
//       <h1>Ram Ram.This is my first React App! </h1>
//       <Navbar title="keshav ka navbar"></Navbar>
//       <h2>Mera Counter : {count}</h2>
//       <button onClick={()=> setCount(count + 1)}>Value Badhao</button>
//       <h2>{text}</h2>
//       <input type="text" placeholder="ram ram" value={text}
//       onChange={(event)=>setText(event.target.value)}/>
//       <h3>{age}</h3>
//       <input type="number" placeholder="age" value={age}
//       onChange={(event)=>setAge(event.target.value)}/>
//       {age >=18 ? (
//         <h3 style={{color: 'green' }}>you can vote</h3>
//       ):(
//         <h3 style={{ color: 'red'}}>you cannot vote</h3>
//       )}
//       <p> kr gya aam react ho gya setup complete</p>
//     </div>
//   );
// }

// export default App;


// topic- list rendering(.map)


import Navbar from './Navbar';
import {useState} from 'react';
import './App.css';

// function App() {
//   const [count, setCount]= useState(0)
//   const [text, setText] = useState("")
//   const [age, setAge] = useState("")
//   const subject = ["history", "geography","polity", "economy", "general science"]
//   return (
//     <div className="App">
//       <h1>Ram Ram.This is my first React App! </h1>
//       <Navbar title="keshav ka navbar"></Navbar>
//       <h2>Mera Counter : {count}</h2>
//       <button onClick={()=> setCount(count + 1)}>Value Badhao</button>
//       <h2>{text}</h2>
//       <input type="text" placeholder="ram ram" value={text}
//       onChange={(event)=>setText(event.target.value)}/>
//       <h3>{age}</h3>
//       <input type="number" placeholder="age" value={age}
//       onChange={(event)=>setAge(event.target.value)}/>
//       {age >=18 ? (
//         <h3 style={{color: 'green' }}>you can vote</h3>
//       ):(
//         <h3 style={{ color: 'red'}}>you cannot vote</h3>
//       )}
//       <h3>My Subject List</h3>
//       <ol>
//         {subject.map((sub, index)=>(
//           <li key={index}>{sub}</li>
//         ))}
//       </ol>
//       <p> kr gya aam react ho gya setup complete</p>
//     </div>
//   );
// }

// export default App;


              // saturaday practise


              // function App(){
              //   const [task, setTask] = useState ("")
              //   const [todos, setTodos] = useState([])
              //   const addTask = () => {
              //     if (task === ""){
              //       return ;
              //     }
              //     setTodos([...todos, task])
              //     setTask("")
              //   }
              //   return (
              //     <div className="App">
              //       <h1>Mera Aaj Ka Plan</h1>
              //       <input type="text" placeholder="kya krna h aaj?"
              //       value={task}
              //       onChange={(e)=> setTask(e.target.value)}/>
              //       <button onClick={addTask}>Kaam Add Kar</button>
              //       {todos.length === 0 ? (
              //         <h3 style={{ color: 'green'}}>aaj no work</h3>
              //       ) : (
              //         <ol>
              //           {todos.map((item,index)=> (
              //             <li key={index}>{item}</li>
              //           ))}
              //         </ol>
              //       )}
              //     </div>
              //   )
              // }
              // export default App;


//               function App (){
//                 const[text, setText] = useState ("")
//                 const limit = 10
//                 const handlePost = () => {
// alert("tweet post ho gya")
// setText("")
//                 }
//                 return (
//                   <div className="App">
//                     <h2>Twitter Post Banao</h2>
//                     <textarea 
//                     rows="1"
//                     cols="40"
//                     placeholder="kya chl rha h"
//                     value={text}
//                     onChange={(e)=> setText(e.target.value)}/>
//                     <h4>Chracters: {text.length}</h4>
//                     {text.length > limit ? (
//                       <p style={{ color: 'red', fontWeight: 'bold'}}>limit cross ho gyi text chote kr</p>
//                     ) : (
//                       <button onClick={handlePost}>post kr do</button>
//                     )}
//                   </div>
//                 )
//               }
              // export default App;


// function App () {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const toggleFollow = () => {
//     setIsFollowing(!isFollowing);
//   }
//   return (
//     <div className="App" style={{marginTop: '50px'}}>
//       <h2>Instagram Profile</h2>
//       <h3>@keshav tewatia</h3>
//       <button onClick={toggleFollow}
//       style={{
//         backgroundColor: isFollowing ? 'black' : '0095f6',
//         color: isFollowing ? 'green' : 'red',
//         padding: '10px 20px',
//         border:'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         fontWeight: 'bold'
//       }}>
//       {isFollowing ? "Following" : "Follow"}</button>
//     </div>
//   )
// }


//  dark mode Project

// function App(){
//   const[isDarkMode, setIsDarkMode] = useState(false)
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode)
//   }
//   return(
//     <div tyle={{
//       backgroundColor: isDarkMode ? '#121212' : '#ffffff', // Kala ya Safed
//       color: isDarkMode ? '#ffffff' : '#000000',           // Text Safed ya Kala
//       minHeight: '100vh',                                  // Poori screen cover karne ke liye
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       transition: 'all 0.3s ease'                          // Smooth change ke liye
//     }}>
//       <h1>{isDarkMode ? 'Dark Mode ON 🌙' : 'Light Mode ON ☀️'}</h1>
//       <button onClick={toggleTheme}
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           cursor: 'pointer',
//           backgroundColor: isDarkMode ? '#ffffff' : '#000000',
//           color: isDarkMode ? '#000000' : '#ffffff',
//           border: 'none',
//           borderRadius: '5px',
//           marginTop: '20px'
//         }}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</button>
//     </div>
//   )
// }
// export default App;

//  topic- props

// function UserCard(props){
//   return(
//     <div style={{
//       border: '2px solid #0095f6',
//       margin:'10px',
//       padding: '10px',
//       borderRadius: '8px'
//     }}> <h2>Name : {props.name}</h2>
//     <p>Work:{props.role}</p></div>
//   )
// }
// function App(){
//   return(
//   <div style={{padding:'30px'}}>
//     <h1>IT Company Team</h1>
//     <UserCard name ="Keshav Tewatia" role="React Developer" />
//     <UserCard name ="Rahul Sharma" role="Backend Deveeloper" />
//     <UserCard name ="Priya singh" role="UI/UX Designer" />
//       </div>
//   )
// }
// export default App;

// 2 exapmle
function MainCard(probb){
  return(
    <div style={{
      border:'2px solid blue',
      padding: '8px',
margin:'8px',
borderRadius: '8px',
backgroundColor:' black'
    }}>
      <h4 style={{color:'yellow'}}>Name:{probb.name}</h4>
      <p style={{color:'yellow'}}>Work:{probb.work}</p>
    </div>
  )
}
function App(){
  return(
    <div style={{padding:'30px'}}>
      <h3 style={{textAlign:'center', color:'red'}}>DEVELOPER NAME AND WORK</h3>
      <MainCard name="Ashavni Singh" work="UI/IX Designer"/>
      <MainCard name="Ritu Gupta" work="Backend Developer"/>
      <MainCard name="Shalu Sharma" work="Software Developer"/>
      <MainCard name="Anjali Dubey" work="Full Stack Developer"/>
          </div>
  )
}
export default App;