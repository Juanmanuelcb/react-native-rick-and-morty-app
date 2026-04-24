export interface ApiResponse<T> {
    "info": {
        "count": number;
        "pages": number;
        "next": string | null;
        "prev": string | null
    },
    "results": Array<T>;
}

export interface CharacterOrigin {
    "name": string;
    "url": string
}

export interface CharacterLocation {
    "name": string;
    "url": string
}

export interface Character {
    "id": number;
    "name": string;
    "status": 'Alive' | 'Dead' | 'Unknown';
    "species": string;
    "type": string;
    "gender": string;
    "origin": CharacterOrigin;
    "location": CharacterLocation;
    "image": string;
    "episode": string[];
    "url": string;
    "created": string;
}

export interface Location {
    "id": number;
    "name": string;
    "type": string;
    "dimension": string;
    "residents": string[];
    "url": string;
    "created": string;
}

export interface Episode {
    "id": number;
    "name": string;
    "air_date": string;
    "episode": string;
    "characters": string[];
    "url": string;
    "created": string;
}