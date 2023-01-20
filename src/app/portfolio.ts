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
    start: string;
    end: string;
    description: string;
}

export interface experiences {
    id?: number
    company: string;
    position: string;
    logo?: string;
    start: string;
    end: string;
    description: string;
}

export interface skill {
    id?: number
    skill: string
    percent: number
    color: string
}