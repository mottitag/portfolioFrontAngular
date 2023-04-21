export interface profile {
    name: string;
    img: string;
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
    description: string;
}