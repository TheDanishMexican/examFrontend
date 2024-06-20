import {
    getDisciplinesApi,
    getParticipantsApi,
    getResultsApi,
} from './apiFacade'

export function makeOptions(
    method: string,
    body: object | null,
    headers: object = {}
): RequestInit {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            ...headers,
        },
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    return options
}

export function handleHttpErrors(response: Response): Response {
    if (!response.ok) {
        throw Error(response.statusText)
    }

    return response
}

export async function fetchParticipants() {
    const participants = await getParticipantsApi()
    return participants
}

export async function fetchDisciplines() {
    const disciplines = await getDisciplinesApi()
    return disciplines
}

export async function fetchResults() {
    const results = await getResultsApi()
    return results
}
