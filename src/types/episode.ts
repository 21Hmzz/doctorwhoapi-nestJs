interface Episode {
    episodeNumber: number;
    seasonNumber: number;
    title: string;
    director: string;
    writer: string;
    airDate: string;
    doctorNumber: number;
    companions: string[];
    description: string;
    image: string;
    newWho: boolean;

}
interface Episodes {
    episodes: Episode[];
}

export { Episode, Episodes };