import './App.css'
import { Outlet } from 'react-router-dom'
import { EscolherCadastro } from './components/escolher-cadastro'

function App() {

  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
