import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ParticipantsPage from './pages/ParticipantsPage'
import DisciplinesPage from './pages/DisciplinesPage'
import ResultsPage from './pages/ResultsPage'
import NavBar from './components/NavBar'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/participants" element={<ParticipantsPage />} />
                <Route path="/disciplines" element={<DisciplinesPage />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </>
    )
}

export default App
