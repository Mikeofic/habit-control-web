import './styles/global.css'
import Habit from './components/Habit'

function App() {
  return (
    <>
     <Habit completed={3} />
     <Habit completed={2} />
     <Habit completed={4} />
     <Habit completed={8} />  
    </>
  )
}
export default App
