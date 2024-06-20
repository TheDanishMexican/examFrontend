import { useEffect, useState } from 'react'
import Participant from '../interfaces/Participant'
import { fetchParticipants } from '../services/fetchUtils'
import ParticipantItem from './ParticipantItem'

export default function ParticipantList() {
    const [participants, setParticipants] = useState<Participant[]>([])

    async function fetchItems() {
        const data = await fetchParticipants()
        setParticipants(data)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div>
            {participants.map((participant) => (
                <ParticipantItem
                    key={participant.id}
                    participant={participant}
                />
            ))}
        </div>
    )
}
