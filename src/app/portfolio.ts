export interface profile {
    name: string;
    photo: string;
}

export interface home {
    title: string;
    description: string;
    phone: string;
}

export interface education {
    id?: number;
    school: string;
    title: string;
    logo?: string;
    description: string;
    isActualy?: boolean;
    startDate: string;
    endDate: string;
}

export interface experiences {
    id?: number
    company: string;
    position: string;
    logo?: string;
    description: string;
    isActualy?: boolean;
    startDate: string;
    endDate: string;
}

export interface service {
    id?: number;
    name: string;
    description: string;
}

export interface skill {
    id?: number;
    name: string;
    percent: number;
    color: string;
}

export interface project {
    id?: number;
    name: string;
    photo: string;
    url: string;
    description: string;
}

export const dirBackend = {
    apiURLAuth: "http://localhost:8080/api/auth/",
    apiUrlCrud: "http://localhost:8080/api/crud/",
    idPersona: 2
}

export class jwtDto {
    accessToken!: string;
    tokenType!: string;
    username!: string;
    authorities!: string[];
}