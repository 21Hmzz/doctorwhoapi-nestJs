interface Doctor {
    name: string;
    years: number;
    seasons: number;
    doctorNumber: number;
    companions: string[];
    image: string;
    description: string;
    firstEpisode: string;
    lastEpisode: string;
    previousDoctor: string;
    nextDoctor: string;
}

interface Doctors {
    doctors: Doctor[];
}

export { Doctor, Doctors };