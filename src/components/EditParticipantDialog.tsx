import { useEffect, useState } from 'react'
import Participant from '../interfaces/Participant'
import '../styling/addParticipantDialog.css'
import Discipline from '../interfaces/Disciplines'
import { fetchDisciplines } from '../services/fetchUtils'
import { deleteParticipantApi, editParticipantApi } from '../services/apiFacade'
import { Fade } from '@mui/material'

export default function EditParticipantDialog({
    isOpen,
    toggleDialog,
    participant,
    onUpdate,
}: {
    isOpen: boolean
    toggleDialog: () => void
    participant: Participant | null
    onUpdate: () => void
}) {
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [club, setClub] = useState<string>('')
    const [disciplines, setDisciplines] = useState<Discipline[]>([])
    const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([])

    async function fetchItems() {
        const data = await fetchDisciplines()
        setDisciplines(data)
    }

    function handleDisciplineChange(disciplineName: string) {
        setSelectedDisciplines((prev) =>
            prev.includes(disciplineName)
                ? prev.filter((d) => d !== disciplineName)
                : [...prev, disciplineName]
        )
    }

    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        if (participant) {
            setId(participant.id)
            setName(participant.name)
            setAge(participant.age.toString())
            setClub(participant.club)
            setSelectedDisciplines(participant.disciplines.map((d) => d.name))
        }
    }, [isOpen, participant])

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const participantData = {
            name,
            age,
            club,
            disciplineNames: selectedDisciplines,
        }

        await editParticipantApi(participantData, id)
        onUpdate()
        toggleDialog()
    }

    async function deleteParticipant(id: number) {
        await deleteParticipantApi(id)
        onUpdate()
        toggleDialog()
    }

    return (
        <>
            {isOpen && (
                <Fade in={true} timeout={1000}>
                    <dialog className="edit-participant-dialog" open>
                        <form onSubmit={handleSubmit}>
                            <h2 className="edit-participant-header">
                                Edit form
                            </h2>
                            <div className="edit-participant-dialog-content">
                                <input
                                    className="input-field"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    className="input-field"
                                    name="age"
                                    placeholder="Age"
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                                <input
                                    className="input-field"
                                    name="club"
                                    placeholder="Club"
                                    type="text"
                                    value={club}
                                    onChange={(e) => setClub(e.target.value)}
                                    required
                                />
                                <fieldset className="edit-participant-discipline-input">
                                    <legend>Disciplines</legend>
                                    {disciplines.map((discipline) => (
                                        <label key={discipline.id}>
                                            <input
                                                type="checkbox"
                                                name="disciplines"
                                                value={discipline.name}
                                                checked={selectedDisciplines.includes(
                                                    discipline.name
                                                )}
                                                onChange={() =>
                                                    handleDisciplineChange(
                                                        discipline.name
                                                    )
                                                }
                                            />
                                            {discipline.name}
                                        </label>
                                    ))}
                                </fieldset>
                            </div>
                            <div className="edit-participant-dialog-buttons">
                                <button type="submit" className="simple-button">
                                    Submit
                                </button>
                                <button
                                    onClick={toggleDialog}
                                    className="simple-button"
                                    type="button"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => deleteParticipant(id)}
                                    className="simple-button"
                                    type="button"
                                >
                                    Delete
                                </button>
                            </div>
                        </form>
                    </dialog>
                </Fade>
            )}
        </>
    )
}
