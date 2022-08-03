import './App.css';
import {useState , useEffect} from 'react';
import logo from './image/logo.png';
import chuck from './image/chuck.png';
import Header from './Header/Header.js';
function App(){
  const [Categories , setCategories] = useState([]);
  const [frase , setFrase] = useState('');
  const [buttonClass , setButton] = useState('standart');
  useEffect(()=>{
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data)
      });  
  }, []);
  function Quote(category){
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => {
    return response.json();
    })
  .then((data) => {
    setFrase(data.value)
  });
  }
  function QuoteRandom(){
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => {
    return response.json();
    })
  .then((data) => {
    setFrase(data.value)
  });
  }
  const CategoriesItems = Categories.map((category, index)=>
  <div key={index}>
    <button className={buttonClass} onClick={Quote.bind(null , category)}>
      {category}
    </button> 
  </div>);
  console.log(Categories)
    return(
      <div className= 'App'>
        <Header/>
        <div className="body">
          <h1>Categories</h1>
          <div className="buttons">
            <div className="categories">
              {CategoriesItems}
              <button onClick={QuoteRandom}>
                random
              </button>
            </div>
          </div>
          <img src={chuck} alt="ChuckBody" height="300px" width="190px"/>
          <div className="quote">
            <div className="frase">
              {frase}
            </div>
          </div>   
        </div>  
      </div>
    )
  }

export default App;
