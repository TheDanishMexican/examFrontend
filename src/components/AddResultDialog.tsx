import { Fade } from '@mui/material'
import Discipline from '../interfaces/Discipline'
import Participant from '../interfaces/Participant'
import { useState } from 'react'
import moment from 'moment'

export default function AddResultDialog({
    dialogOpen,
    toggleDialog,
    disciplines,
    participants,
}: {
    dialogOpen: boolean
    toggleDialog: () => void
    disciplines: Discipline[]
    participants: Participant[]
}) {
    const [selectedParticipant, setSelectedParticipant] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [selectedDiscipline, setSelectedDiscipline] = useState('')
    const [resultValue, setResultValue] = useState('')

    return (
        <>
            {dialogOpen && (
                <Fade in={true} timeout={1000}>
                    <dialog className="add-participant-dialog" open>
                        <form>
                            <h2 className="add-participant-header">
                                Add result
                            </h2>
                            <div className="add-participant-dialog-content">
                                <select
                                    className="input-field"
                                    value={selectedParticipant}
                                    onChange={(e) =>
                                        setSelectedParticipant(e.target.value)
                                    }
                                    required
                                >
                                    <option value="" disabled>
                                        Select participant
                                    </option>
                                    {participants.map((participant) => (
                                        <option
                                            key={participant.id}
                                            value={participant.id}
                                        >
                                            {participant.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    className="input-field"
                                    type="date"
                                    value={
                                        selectedDate
                                            ? moment(selectedDate).format(
                                                  'YYYY-MM-DD'
                                              )
                                            : ''
                                    }
                                    onChange={(e) =>
                                        setSelectedDate(
                                            new Date(e.target.value)
                                        )
                                    }
                                    required
                                />
                                <fieldset className="add-participant-discipline-input">
                                    <legend>Discipline</legend>
                                    {disciplines.map((discipline) => (
                                        <label key={discipline.id}>
                                            <input
                                                type="radio"
                                                name="discipline"
                                                value={discipline.id}
                                                checked={
                                                    selectedDiscipline ===
                                                    String(discipline.id)
                                                }
                                                onChange={(e) =>
                                                    setSelectedDiscipline(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            {discipline.name}
                                        </label>
                                    ))}
                                </fieldset>
                                <input
                                    className="input-field2"
                                    type="text"
                                    value={resultValue}
                                    onChange={(e) =>
                                        setResultValue(e.target.value)
                                    }
                                    placeholder="Result value, numbers only"
                                    required
                                />
                            </div>
                            <div className="add-participant-dialog-buttons">
                                <button type="submit" className="simple-button">
                                    Add
                                </button>
                                <button
                                    onClick={toggleDialog}
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
