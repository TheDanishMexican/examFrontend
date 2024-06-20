import ParticipantList from '../components/ParticipantList'
import '../styling/participantPage.css'
import { Fade } from '@mui/material'

export default function ParticipantsPage() {
    return (
        <Fade in={true} timeout={1000}>
            <div className="participants-page-container">
                <h1 className="participants-page-header">Participants</h1>
                <div className="participants-page-menu">
                    <button className="simple-button">Add a participant</button>
                    <input
                        className="participant-search-input"
                        type="text"
                        placeholder="Search for participant"
                    />
                </div>
                <ParticipantList />
            </div>
        </Fade>
    )
}
