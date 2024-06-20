import Discipline from './Disciplines'

enum Gender {
    MALE,
    FEMALE,
}

export default interface Participant {
    id: number
    name: string
    gender: Gender
    age: number
    club: string
    disciplines: Discipline[]
}
