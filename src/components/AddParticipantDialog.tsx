import { useEffect, useState } from 'react'
import Discipline from '../interfaces/Disciplines'
import { fetchDisciplines } from '../services/fetchUtils'
import '../styling/addParticipantDialog.css'

export default function AddParticipantDialog() {
    const [disciplines, setDisciplines] = useState<Discipline[]>([])

    async function fetchItems() {
        const data = await fetchDisciplines()
        setDisciplines(data)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <dialog className="add-participant-dialog" open>
            <input
                className="input-field"
                name="name"
                placeholder="Name"
                type="text"
            />
            <input
                className="input-field"
                name="age"
                placeholder="Age"
                type="number"
            />
            <input
                className="input-field"
                name="club"
                placeholder="Club"
                type="text"
            />
            <div className="add-participant-gender-input">
                <label>
                    <input type="radio" name="gender" />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" /> Female
                </label>
            </div>
        </dialog>
    )
}
