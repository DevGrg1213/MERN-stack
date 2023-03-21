import React from 'react'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/Navigation/MainNavigation'
import Users from './users/pages/Users'
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/places/new' element={<NewPlace />} />
            
        </Routes>
        </main>
    </Router>
  )
}

export default App