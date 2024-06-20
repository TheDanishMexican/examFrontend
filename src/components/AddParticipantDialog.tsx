import React, { useEffect, useState } from 'react'
import Discipline from '../interfaces/Discipline'
import { fetchDisciplines } from '../services/fetchUtils'
import '../styling/addParticipantDialog.css'
import { Fade } from '@mui/material'
import { addParticipantApi } from '../services/apiFacade'

export default function AddParticipantDialog({
    isOpen,
    toggleDialog,
    onUpdate,
}: {
    isOpen: boolean
    toggleDialog: () => void
    onUpdate: () => void
}) {
    const [disciplines, setDisciplines] = useState<Discipline[]>([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [club, setClub] = useState('')
    const [gender, setGender] = useState('')
    const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([])

    async function fetchItems() {
        const data = await fetchDisciplines()
        setDisciplines(data)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    function handleDisciplineChange(disciplineName: string) {
        setSelectedDisciplines((prev) =>
            prev.includes(disciplineName)
                ? prev.filter((d) => d !== disciplineName)
                : [...prev, disciplineName]
        )
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const participantData = {
            name,
            age,
            club,
            gender,
            disciplineNames: selectedDisciplines,
        }

        await addParticipantApi(participantData)
        onUpdate()
        resetForm()
    }

    function resetForm() {
        setName('')
        setAge('')
        setClub('')
        setGender('')
        setSelectedDisciplines([])
        toggleDialog()
    }

    return (
        <>
            {isOpen && (
                <Fade in={true} timeout={1000}>
                    <dialog className="add-participant-dialog" open>
                        <form onSubmit={handleSubmit}>
                            <h2 className="add-participant-header">
                                Add participant
                            </h2>
                            <div className="add-participant-dialog-content">
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
                                <fieldset className="add-participant-gender-input">
                                    <legend>Gender</legend>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="MALE"
                                            checked={gender === 'MALE'}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                            required
                                        />
                                        Male
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="FEMALE"
                                            checked={gender === 'FEMALE'}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                        Female
                                    </label>
                                </fieldset>
                                <fieldset className="add-participant-discipline-input">
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
                            <div className="add-participant-dialog-buttons">
                                <button type="submit" className="simple-button">
                                    Add
                                </button>
                                <button
                                    onClick={resetForm}
                                    className="simple-button"
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </dialog>
                </Fade>
            )}
        </>
    )
}
