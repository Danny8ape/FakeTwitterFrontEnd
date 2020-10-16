export class Tweet {
    
    idPost: number;
    message: string;
    published_date: Date;
    device: string;
    idUser: string;
    location: string;

    constructor (idPost?: number){
        this.idPost = idPost;
    }
}