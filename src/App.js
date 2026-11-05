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

function App() {
  const [count, setCount]= useState(0)
  const [text, setText] = useState("")
  const [age, setAge] = useState("")
  const subject = ["history", "geography","polity", "economy", "general science"]
  return (
    <div className="App">
      <h1>Ram Ram.This is my first React App! </h1>
      <Navbar title="keshav ka navbar"></Navbar>
      <h2>Mera Counter : {count}</h2>
      <button onClick={()=> setCount(count + 1)}>Value Badhao</button>
      <h2>{text}</h2>
      <input type="text" placeholder="ram ram" value={text}
      onChange={(event)=>setText(event.target.value)}/>
      <h3>{age}</h3>
      <input type="number" placeholder="age" value={age}
      onChange={(event)=>setAge(event.target.value)}/>
      {age >=18 ? (
        <h3 style={{color: 'green' }}>you can vote</h3>
      ):(
        <h3 style={{ color: 'red'}}>you cannot vote</h3>
      )}
      <h3>My Subject List</h3>
      <ol>
        {subject.map((sub, index)=>(
          <li key={index}>{sub}</li>
        ))}
      </ol>
      <p> kr gya aam react ho gya setup complete</p>
    </div>
  );
}

export default App;
