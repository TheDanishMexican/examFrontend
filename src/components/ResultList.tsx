import Result from '../interfaces/Result'
import EditIcon from '@mui/icons-material/Edit'

export default function ResultList({ results }: { results: Result[] }) {
    return (
        <div className="participant-list-container">
            <table className="participant-list-table">
                <thead className="participant-thead">
                    <tr className="participant-tr">
                        <th className="participant-th">Date</th>
                        <th className="participant-th">Athlete</th>
                        <th className="participant-th">Discipline</th>
                        <th className="participant-th">Result</th>
                        <th className="participant-th">
                            <div className="sortFilter-container">
                                <select name="" id="" defaultValue="">
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
                    {results.map((result) => (
                        <tr className="participant-tr" key={result.id}>
                            <td className="participant-td">
                                {result.date.toString()}
                            </td>

                            <td className="participant-td">
                                {result.participant.name}
                            </td>
                            <td className="participant-td">
                                {result.discipline.name}
                            </td>
                            <td className="participant-td">
                                {result.resultValue} {result.resultSuffix}
                            </td>
                            <td className="participant-td">
                                <EditIcon className="edit-button-participant" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
