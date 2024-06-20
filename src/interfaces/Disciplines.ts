enum ResultType {
    TIME,
    POINTS,
    DISTANCE,
}

export default interface Discipline {
    id: number
    name: string
    resultType: ResultType
    type: string
}
