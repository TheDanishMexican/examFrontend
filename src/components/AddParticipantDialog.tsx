import { useEffect, useState } from 'react'
import Discipline from '../interfaces/Disciplines'
import { fetchDisciplines } from '../services/fetchUtils'
import '../styling/addParticipantDialog.css'
import { Fade } from '@mui/material'

export default function AddParticipantDialog({
    isOpen,
    toggleDialog,
}: {
    isOpen: boolean
    toggleDialog: () => void
}) {
    const [disciplines, setDisciplines] = useState<Discipline[]>([])

    async function fetchItems() {
        const data = await fetchDisciplines()
        setDisciplines(data)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
            {isOpen && (
                <Fade in={true} timeout={1000}>
                    <dialog className="add-participant-dialog">
                        <h2 className="add-participant-header">
                            Add participant
                        </h2>
                        <div className="add-participant-dialog-content">
                            <input
                                className="input-field"
                                name="name"
                                placeholder="Name"
                                type="text"
                                required
                            />
                            <input
                                className="input-field"
                                name="age"
                                placeholder="Age"
                                type="number"
                                required
                            />
                            <input
                                className="input-field"
                                name="club"
                                placeholder="Club"
                                type="text"
                                required
                            />
                            <fieldset className="add-participant-gender-input">
                                <legend>Gender</legend>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        required
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
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
                                            value={discipline.id}
                                        />
                                        {discipline.name}
                                    </label>
                                ))}
                            </fieldset>
                        </div>
                        <div className="add-participant-dialog-buttons">
                            <button className="simple-button">Add</button>
                            <button
                                onClick={toggleDialog}
                                className="simple-button"
                            >
                                Cancel
                            </button>
                        </div>
                    </dialog>
                </Fade>
            )}
        </>
    )
}
