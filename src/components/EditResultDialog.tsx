import { Fade } from '@mui/material'
import Result from '../interfaces/Result'
import Discipline from '../interfaces/Discipline'
import { useEffect, useState } from 'react'
import '../styling/editResultDialog.css'
import UpdateResultDto from '../interfaces/UpdateResultDto'
import moment from 'moment'
import { deleteResultApi, editResultApi } from '../services/apiFacade'

export default function EditResultDialog({
    selectedResult,
    editDialogOpen,
    toggleEditDialog,
    disciplines,
    onUpdate,
}: {
    selectedResult: Result | null
    editDialogOpen: boolean
    toggleEditDialog: () => void
    disciplines: Discipline[]
    onUpdate: () => void
}) {
    const [disciplineId, setDisciplineId] = useState<number | null>(null)
    const [resultValue, setResultValue] = useState<string>('')

    useEffect(() => {
        if (selectedResult) {
            setDisciplineId(selectedResult.discipline.id)
            setResultValue(selectedResult.resultValue)
        }
    }, [selectedResult, editDialogOpen])

    function handleDisciplineChange(id: number) {
        setDisciplineId(id)
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const updatedResult: UpdateResultDto = {
            id: selectedResult?.id,
            date: moment(selectedResult?.date).format('YYYY-MM-DD'),
            participantId: selectedResult?.participant.id,
            disciplineId: disciplineId,
            resultValue: resultValue,
        }

        await editResultApi(updatedResult)
        onUpdate()
        toggleEditDialog()
    }

    async function handleDelete(id?: number) {
        await deleteResultApi(id)
        onUpdate()
        toggleEditDialog()
    }

    return (
        <>
            {editDialogOpen && (
                <Fade in={true} timeout={1000}>
                    <dialog className="edit-participant-dialog" open>
                        <form onSubmit={handleSubmit}>
                            <h2 className="edit-participant-header">
                                Edit result
                            </h2>
                            <div className="edit-result-athlete-info">
                                <p>
                                    <strong>Name:</strong>{' '}
                                    {selectedResult?.participant.name}
                                </p>
                                <p>
                                    <strong>Date:</strong>{' '}
                                    {selectedResult?.date.toString()}
                                </p>
                            </div>
                            <div className="edit-participant-dialog-content">
                                <input
                                    className="input-field"
                                    name="resultValue"
                                    placeholder="resultValue"
                                    value={resultValue}
                                    onChange={(e) =>
                                        setResultValue(e.target.value)
                                    }
                                    type="text"
                                    required
                                />

                                <fieldset className="edit-participant-discipline-input">
                                    <legend>Discipline</legend>
                                    {disciplines.map((discipline) => (
                                        <label key={discipline.id}>
                                            <input
                                                type="radio"
                                                name="discipline"
                                                value={discipline.id}
                                                checked={
                                                    disciplineId ===
                                                    discipline.id
                                                }
                                                onChange={() =>
                                                    handleDisciplineChange(
                                                        discipline.id
                                                    )
                                                }
                                                required
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
                                    onClick={toggleEditDialog}
                                    className="simple-button"
                                    type="button"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() =>
                                        handleDelete(selectedResult?.id)
                                    }
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
