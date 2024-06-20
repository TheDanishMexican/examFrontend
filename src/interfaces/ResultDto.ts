enum ResultType {
    DISTANCE,
    TIME,
    POINTS,
}

export default interface ResultDto {
    date: Date
    participantId: number
    disciplineId: number
    resultValue: string
    resultType: ResultType
}
