export default interface UpdateResultDto {
    id: number | undefined
    date: string
    participantId: number | undefined
    disciplineId: number | null
    resultValue: string
}
