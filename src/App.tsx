import { Route, Routes } from 'react-router-dom'
import AnimatedComponent from './components/animation/Animated'
import './App.css'
import Main from './routes/Main'
import Boards from './routes/Boards'
// import MainPage from './MainPage'
// import Spring from './components/animation/Spring'
// import AnimeJs from './components/animation/AnimeJs'

// import ReactTransition from './components/animation/ReactTransition'


    export default function App() {
      return (
      <>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/boards' element={<Boards />}/>
        <Route path='/framer' element={<AnimatedComponent />}/>
        {/* <Route path='/spring' element={<Spring />}/>
        <Route path='/anime' element={<AnimeJs />}/> */}
      </Routes>
      </>
  
  )
}