import { Fade } from '@mui/material'
import Discipline from '../interfaces/Discipline'
import Participant from '../interfaces/Participant'
import { useState } from 'react'
import moment from 'moment'
import ResultDto from '../interfaces/ResultDto'
import { addResultApi } from '../services/apiFacade'

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
    const [selectedParticipantId, setSelectedParticipantId] =
        useState<string>('')
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('')
    const [resultValue, setResultValue] = useState<string>('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const result: ResultDto = {
            date: moment(selectedDate).format('YYYY-MM-DD'),
            participantId: parseInt(selectedParticipantId),
            disciplineId: parseInt(selectedDisciplineId),
            resultValue: resultValue,
        }

        await addResultApi(result)

        toggleDialog()
    }

    return (
        <>
            {dialogOpen && (
                <Fade in={true} timeout={1000}>
                    <dialog className="add-participant-dialog" open>
                        <form onSubmit={handleSubmit}>
                            <h2 className="add-participant-header">
                                Add result
                            </h2>
                            <div className="add-participant-dialog-content">
                                <select
                                    className="input-field"
                                    value={selectedParticipantId}
                                    onChange={(e) =>
                                        setSelectedParticipantId(e.target.value)
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
                                                onChange={(e) =>
                                                    setSelectedDisciplineId(
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
