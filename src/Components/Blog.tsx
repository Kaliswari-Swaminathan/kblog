class Blog{
    id: number;
    title: string;
    author:string;
    description?:string;  
    date:any;  
    img:string;
   

    constructor(id:number,title: string,
        author:string,
        description:string,date:any,img:string){
           this.id=id;
           this.title=title;
           this.author=author;
           this.date=date;
           this.description=description;
           this.img=img;
           
        }

    
}
export default Blog;