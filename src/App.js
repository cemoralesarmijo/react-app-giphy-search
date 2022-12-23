// import {useState} from 'react'
import  { Link, Route } from 'wouter'
import './App.css'
// import Giphy from './components/Giphy'
import ListOfGiphy from './components/ListOfGiphy'
// import getGiphys from './services/get_giphys'
 
function App() {
  // const [ keywordValue, setKeyword] = useState('mugiwara')

  return (
    <div className="App">
      <h1>Giphy app</h1>
      <section className="App-content">
      <Link to="/giphy/luffy">luffy giphy</Link>
      <Link to="/giphy/rocky">rocky giphy</Link>
      <Link to="/giphy/hunterxhunter">hunterxhunter giphy</Link>
      <Route 
        component={ListOfGiphy}
        path='/giphy/:keyword'
      />
      <ListOfGiphy />
        {/* <button onClick={ () =>  setKeyword('ussop')}>
          Cambiar giphy
        </button> 
        <ListOfGiphy keyword={keywordValue} /> */}

      </section>
    </div>
  )
}

export default App
