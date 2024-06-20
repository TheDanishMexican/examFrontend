import Participant from '../interfaces/Participant'

export default function ParticipantItem({
    participant,
}: {
    participant: Participant
}) {
    return (
        <div>
            <h2>{participant.name}</h2>
            <p>{participant.age}</p>
            <p>{participant.club}</p>
            <p>{participant.gender}</p>
        </div>
    )
}
