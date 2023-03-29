export default class Post {
    public id: number;
    public title: string;
    public author: number;
    public content: string;
    public date: Date;

    constructor(id: number, title: string, author: number, content: string, date: Date) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.date = date;
    }
}
