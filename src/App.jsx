
import './App.css'
import Home from './Home/Home'
import ContainerPoke from './components/ContainerPoke/ContainerPoke'
import Navbar from './components/Navbar/Navbar'
import Wrap from './components/Wrap/Wrap'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
// <Wrap/>

  return (
    <>
    
    <BrowserRouter>
    <GlobalStyles></GlobalStyles>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/todoList' element={<Wrap/>}/>
        <Route path='/pokePage' element={<ContainerPoke/>}/>
      </Routes>
    </BrowserRouter>
    </>
) 
 }
export default App
