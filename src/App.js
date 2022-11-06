import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Dhaka" Specialty="Division"></District>
      <District name="Khulna" Specialty="Division" ></District>
      <District name="Sylhet" Specialty="Division" ></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body} ></Post>)
      }

    </div>
  )
}

function Post (props){
  return(
    <div style={{backgroundColor: 'lightblue', margin: '25px', border: '4px solid black' }}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'skyblue',
  margin: '20px',
  padding: '10px',
  borderRadius: '10px'
}

function District(props){
  const [Power, setPower] = useState(1);
  const boostPower = () =>{
    const newPower = Power * 2;
    setPower(newPower);
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.Specialty}</p>
      <h4>Power: {Power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}

export default App;
