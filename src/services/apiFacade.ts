import Participant from '../interfaces/Participant'
import { API_URL } from '../settings'
import { handleHttpErrors, makeOptions } from './fetchUtils'

export async function getParticipantsApi(): Promise<Participant[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/api/participants`, options)

    return await handleHttpErrors(response).json()
}
