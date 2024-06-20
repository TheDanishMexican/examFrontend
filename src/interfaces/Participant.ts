enum Gender {
    MALE,
    FEMALE,
}

enum Club {
    Aalborg,
    Aarhus,
    Odense,
    Copenhagen,
}

export default interface Participant {
    id: number
    name: string
    gender: Gender
    age: number
    club: Club
}
