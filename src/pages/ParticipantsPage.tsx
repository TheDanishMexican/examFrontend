import { useState } from 'react'
import ParticipantDialog from '../components/AddParticipantDialog'
import ParticipantList from '../components/ParticipantList'
import '../styling/participantPage.css'
import { Fade } from '@mui/material'

export default function ParticipantsPage() {
    const [dialogOpen, setDialogOpen] = useState(false)

    function toggleDialog() {
        setDialogOpen((prev: boolean) => !prev)
    }

    return (
        <>
            {dialogOpen && (
                <div
                    className="greyed-out-overlay"
                    onClick={toggleDialog}
                ></div>
            )}
            <Fade in={true} timeout={1000}>
                <div className="participants-page-container">
                    <h1 className="participants-page-header">Participants</h1>
                    <div className="participants-page-menu">
                        <button
                            onClick={toggleDialog}
                            className="simple-button"
                        >
                            Add a participant
                        </button>
                        <input
                            className="participant-search-input"
                            type="text"
                            placeholder="Search for participant"
                        />
                    </div>
                    <ParticipantList />
                    <ParticipantDialog
                        isOpen={dialogOpen}
                        toggleDialog={toggleDialog}
                    />
                </div>
            </Fade>
        </>
    )
}
