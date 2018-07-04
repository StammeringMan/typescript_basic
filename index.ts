class YoutubeVideo  {
    videoTitle : string;
    numberOfViews : number;
    numberOfLikes : number;
    numberOfDislikes: number;
    pageTitle: string;
    publishedOn : string;
    videoDescription: string;
    videoLink: string;
    videoCredits: string;
    videoCategory:string;
    videoLicense: string; 
    numOfSubscription: number;
    numberOfComments: number;

    constructor(_videoTitle:string, _numberOfViews:number, _numberOfLikes : number,
        _numberOfDislikes: number, _pageTitle: string, _publishedOn: string, _videoDescription: string,
        _videoLink: string,_videoCredits: string, _videoCategory:string, _videoLicense: string, _numOfSubscription: number, 
        _numberOfComments: number){
        
        this.videoTitle = _videoTitle;
        this.numberOfViews = _numberOfViews;
        this.numberOfLikes = _numberOfLikes;
        this.pageTitle = _pageTitle;
        this.publishedOn = _publishedOn;
        this.videoDescription = _videoDescription;
        this.videoLink = _videoLink;
        this.videoCredits = _videoCredits;
        this.videoCategory = _videoCategory;
        this.videoLicense = _videoLicense;
        this.numOfSubscription = _numOfSubscription;
        this.numberOfComments = _numberOfComments;

    }// end of constructor

    getVideoTitle = ()=>{
        return  this.videoTitle
      
    }

    getComments = () =>{
        console.log("Awesome Video");
    }

    getCommentatorTitle = () =>{
        console.log("John");
    }
}// end of class


class CurrentVideo extends YoutubeVideo {
    videoTitle : string;
    numberOfViews : number;
    numberOfLikes : number;
    numberOfDislikes: number;
    pageTitle: string;
    publishedOn : string;
    videoDescription: string;
    videoLink: string;
    videoCredits: string;
    videoCategory:string;
    videoLicense: string;
    numOfSubscription: number;
    numberOfComments: number;

    constructor(_videoTitle:string, _numberOfViews:number, _numberOfLikes : number,
        _numberOfDislikes: number, _pageTitle: string, _publishedOn: string, _videoDescription: string,
        _videoLink:string, _videoCredits: string, _videoCategory:string, _videoLicense: string, _numOfSubscription: number, 
        _numberOfComments: number, _commentatorTitle: string, _comments:string, _likesOnComments: number, 
        _dislikesOnComments: number, _replyOnComments: string){
            super(_videoTitle,_numberOfViews,_numberOfLikes,_numberOfDislikes,_pageTitle,_publishedOn,_videoDescription,_videoLink,
            _videoCredits,_videoCategory,_videoLicense, _numOfSubscription,_numberOfComments)
    }

    canPlayAdd = () =>{
        return true;
    }
}


let mettalica = new YoutubeVideo("Metallica - Nothing Else Matters [Official Music Video]", 315196080,  1000000, 70000, 
"MetallicaTV", "Oct 26, 2009", "Nothing Else Matters [Official Music Video] From the album Metallica",
"https://www.youtube.com/watch?v=tAGnKpE4NCI", "Metallica", 
"Music", "Audiam (Label) (on behalf of EMV); UBEM, Audiam (Publishing), UMPI, and 13 Music Rights Societies", 3400000, 31392);

let videoTitle = mettalica.getVideoTitle();
let videoComments = mettalica.getComments();
let commentator = mettalica.getCommentatorTitle();
console.log(videoTitle, videoComments, commentator);



function newFunction() {
    return mettalica.getCommentatorTitle();
}

