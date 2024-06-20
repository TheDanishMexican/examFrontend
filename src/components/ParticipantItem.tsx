import Participant from '../interfaces/Participant'

export default function ParticipantItem({
    participant,
}: {
    participant: Participant
}) {
    return (
        <div className="participant-item-container">
            <h2>{participant.name}</h2>
            <p>{participant.age}</p>
            <p>{participant.club}</p>
            <p>{participant.gender}</p>
            <h3>Disciplines</h3>
            <ul>
                {participant.disciplines.map((discipline) => (
                    <li key={discipline.id}>{discipline.name}</li>
                ))}
            </ul>
        </div>
    )
}
