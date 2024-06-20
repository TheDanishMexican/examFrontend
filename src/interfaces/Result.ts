import Discipline from './Discipline'
import Participant from './Participant'

enum ResultType {
    TIME,
    POINTS,
    DISTANCE,
}

export default interface Result {
    id: number
    date: Date
    resultType: ResultType
    resultValue: string
    participant: Participant
    discipline: Discipline
    resultSuffix: string
}
