import  { Link, Route } from 'wouter'
import './App.css'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src="./logo.png" />
          </figure>
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResult}
          path="/search/:keyword"
        />
        <Route
          component={Detail}
          path="/detail/:id"
        />
      </section>
    </div>
  )
}

export default App
