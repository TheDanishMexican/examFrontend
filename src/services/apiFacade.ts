import Discipline from '../interfaces/Discipline'
import Participant from '../interfaces/Participant'
import ParticipantDto from '../interfaces/ParticipantDto'
import Result from '../interfaces/Result'
import ResultDto from '../interfaces/ResultDto'
import { API_URL } from '../settings'
import { handleHttpErrors, makeOptions } from './fetchUtils'

export async function getParticipantsApi(): Promise<Participant[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/api/participants`, options)

    return await handleHttpErrors(response).json()
}

export async function getDisciplinesApi(): Promise<Discipline[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/api/disciplines`, options)

    return await handleHttpErrors(response).json()
}

export async function addParticipantApi(
    participant: ParticipantDto
): Promise<ParticipantDto> {
    const options = makeOptions('POST', participant)
    const response = await fetch(`${API_URL}/api/participants`, options)

    return await handleHttpErrors(response).json()
}

export async function editParticipantApi(
    participant: ParticipantDto,
    id: number
): Promise<ParticipantDto> {
    const options = makeOptions('PUT', participant)
    const response = await fetch(`${API_URL}/api/participants/${id}`, options)

    return await handleHttpErrors(response).json()
}

export async function deleteParticipantApi(id: number): Promise<boolean> {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/api/participants/${id}`, options)

    return response.status === 204
}

export async function getResultsApi(): Promise<Result[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/api/results`, options)

    return await handleHttpErrors(response).json()
}

export async function addResultApi(resultDto: ResultDto): Promise<ResultDto> {
    const options = makeOptions('POST', resultDto)
    const response = await fetch(`${API_URL}/api/results`, options)

    return await handleHttpErrors(response).json()
}
