import Discipline from '../interfaces/Disciplines'
import Participant from '../interfaces/Participant'
import ParticipantDto from '../interfaces/ParticipantDto'
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
