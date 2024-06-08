import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Quiz from "./pages/Quiz/Quiz"
import Result from "./pages/Result/Result"
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
          <Switch>
            <Route path='/' exact>
              <Home></Home>
            </Route>
            <Route path='/Quiz' exact>
              <Quiz></Quiz>
            </Route>
            <Route path='/Result' exact>
              <Result></Result>
            </Route>
          </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
