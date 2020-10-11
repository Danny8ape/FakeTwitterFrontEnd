export class Tweet {
    
    idTweet: number;
    text: string;
    date: Date;
    device: string;
    author: string;
    location: string;

    constructor (idTweet?: number){
        this.idTweet = idTweet;
    }
}