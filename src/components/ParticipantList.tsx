import { useEffect, useState } from 'react'
import Participant from '../interfaces/Participant'
import { fetchParticipants } from '../services/fetchUtils'
import '../styling/participantList.css'
import EditIcon from '@mui/icons-material/Edit'
import EditParticipantDialog from './EditParticipantDialog'

export default function ParticipantList({ onUpdate }: { onUpdate: boolean }) {
    const [participants, setParticipants] = useState<Participant[]>([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedParticipant, setSelectedParticipant] =
        useState<Participant | null>(null)

    function toggleDialog() {
        setDialogOpen((prev: boolean) => !prev)
    }

    function handleEdit(Participant: Participant) {
        setSelectedParticipant(Participant)
        toggleDialog()
    }

    async function fetchItems() {
        const data = await fetchParticipants()
        setParticipants(data)
    }

    useEffect(() => {
        fetchItems()
    }, [onUpdate])

    function sortParticipants(
        participantsAll: Participant[],
        sortingType: string
    ) {
        const sortedParticipants = [...participantsAll]

        switch (sortingType) {
            case 'gender':
                sortedParticipants.sort((a, b) => a.gender - b.gender)
                break
            case 'age':
                sortedParticipants.sort((a, b) => a.age - b.age)
                break
            case 'club':
                sortedParticipants.sort((a, b) => a.club.localeCompare(b.club))
                break
        }

        setParticipants(sortedParticipants)
    }

    function handleSortingChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedSorting = e.target.value
        sortParticipants(participants, selectedSorting)
    }

    return (
        <>
            {dialogOpen && (
                <div
                    className="greyed-out-overlay"
                    onClick={toggleDialog}
                ></div>
            )}
            <div className="participant-list-container">
                <table className="participant-list-table">
                    <thead className="participant-thead">
                        <tr className="participant-tr">
                            <th className="participant-th">Name</th>
                            <th className="participant-th">Age</th>
                            <th className="participant-th">Club</th>
                            <th className="participant-th">Gender</th>
                            <th className="participant-th">Disciplines</th>
                            <th className="participant-th">
                                <div className="sortFilter-container">
                                    <select
                                        onChange={(e) => handleSortingChange(e)}
                                        name=""
                                        id=""
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Sort by{' '}
                                        </option>
                                        <option value="age">age</option>
                                        <option value="club">club</option>
                                        <option value="gender">gender</option>
                                        <option value="discipline">
                                            discipline
                                        </option>
                                    </select>
                                    <select name="" id="" defaultValue="">
                                        <option value="" disabled>
                                            Filter by{' '}
                                        </option>
                                        <option value="age">age</option>
                                        <option value="club">club</option>
                                        <option value="discipline">
                                            discipline
                                        </option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="participant-tbody">
                        {participants.map((participant) => (
                            <tr className="participant-tr" key={participant.id}>
                                <td className="participant-td">
                                    {participant.name}
                                </td>
                                <td className="participant-td">
                                    {participant.age}
                                </td>
                                <td className="participant-td">
                                    {participant.club}
                                </td>
                                <td className="participant-td">
                                    {participant.gender}
                                </td>
                                <td className="participant-td">
                                    <ul className="participant-ul">
                                        {participant.disciplines.map(
                                            (discipline) => (
                                                <li
                                                    className="participant-li"
                                                    key={discipline.id}
                                                >
                                                    {discipline.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </td>
                                <td className="participant-td">
                                    <EditIcon
                                        onClick={() => handleEdit(participant)}
                                        className="edit-button-participant"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <EditParticipantDialog
                isOpen={dialogOpen}
                toggleDialog={toggleDialog}
                participant={selectedParticipant}
                onUpdate={fetchItems}
            />
        </>
    )
}
