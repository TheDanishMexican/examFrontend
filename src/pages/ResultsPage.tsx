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
import EditResultDialog from '../components/EditResultDialog'

export default function ResultsPage() {
    const [results, setResults] = useState<Result[]>([])
    const [disciplines, setDisciplines] = useState<Discipline[]>([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [participants, setParticipants] = useState<Participant[]>([])
    const [triggerUpdate, setTriggerUpdate] = useState(false)
    const [selectedResult, setSelectedResult] = useState<Result | null>(null)

    function handleEditResult(result: Result | null) {
        setSelectedResult(result)
        toggleEditDialog()
    }

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
    }, [triggerUpdate])

    function toggleDialog() {
        setDialogOpen((prev: boolean) => !prev)
    }

    function toggleEditDialog() {
        setEditDialogOpen((prev: boolean) => !prev)
    }

    return (
        <>
            {' '}
            {(dialogOpen && (
                <div
                    className="greyed-out-overlay"
                    onClick={toggleDialog}
                ></div>
            )) ||
                (editDialogOpen && (
                    <div
                        className="greyed-out-overlay"
                        onClick={toggleEditDialog}
                    ></div>
                ))}
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
                    <ResultList
                        results={results}
                        handleEditResult={handleEditResult}
                    />
                </div>
            </Fade>
            <AddResultDialog
                dialogOpen={dialogOpen}
                toggleDialog={toggleDialog}
                disciplines={disciplines}
                participants={participants}
                onUpdate={() => setTriggerUpdate((prev) => !prev)}
            />
            <EditResultDialog
                selectedResult={selectedResult}
                editDialogOpen={editDialogOpen}
                toggleEditDialog={toggleEditDialog}
                disciplines={disciplines}
                onUpdate={() => setTriggerUpdate((prev) => !prev)}
            />
        </>
    )
}
