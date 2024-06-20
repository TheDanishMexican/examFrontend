import { Fade } from '@mui/material'
import '../styling/resultsPage.css'
import {
    fetchDisciplines,
    fetchParticipants,
    fetchResults,
} from '../services/fetchUtils'
import { useEffect, useState } from 'react'
import ResultList from '../components/ResultList'
import Result from '../interfaces/Result'
import AddResultDialog from '../components/AddResultDialog'
import Discipline from '../interfaces/Discipline'
import Participant from '../interfaces/Participant'

export default function ResultsPage() {
    const [results, setResults] = useState<Result[]>([])
    const [disciplines, setDisciplines] = useState<Discipline[]>([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [participants, setParticipants] = useState<Participant[]>([])

    async function fetchItems() {
        const response = await fetchResults()
        const response2 = await fetchDisciplines()
        const response3 = await fetchParticipants()
        setResults(response)
        setDisciplines(response2)
        setParticipants(response3)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    function toggleDialog() {
        setDialogOpen((prev: boolean) => !prev)
    }

    return (
        <>
            {' '}
            {dialogOpen && (
                <div
                    className="greyed-out-overlay"
                    onClick={toggleDialog}
                ></div>
            )}
            <Fade in={true} timeout={1000}>
                <div className="results-page-container">
                    <h1 className="participants-page-header">Results</h1>
                    <div className="participants-page-menu">
                        <button
                            onClick={toggleDialog}
                            className="simple-button"
                        >
                            Add a result
                        </button>
                        <input
                            className="participant-search-input"
                            type="text"
                            placeholder="Search for result"
                        />
                    </div>
                    <ResultList results={results} />
                </div>
            </Fade>
            <AddResultDialog
                dialogOpen={dialogOpen}
                toggleDialog={toggleDialog}
                disciplines={disciplines}
                participants={participants}
            />
        </>
    )
}
