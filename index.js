var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(_videoTitle, _numberOfViews, _numberOfLikes, _numberOfDislikes, _pageTitle, _publishedOn, _videoDescription, _videoLink, _videoCredits, _videoCategory, _videoLicense, _numOfSubscription, _numberOfComments) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getComments = function () {
            console.log("Awesome Video");
        };
        this.getCommentatorTitle = function () {
            console.log("John");
        };
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
    } // end of constructor
    return YoutubeVideo;
}()); // end of class
var CurrentVideo = /** @class */ (function (_super) {
    __extends(CurrentVideo, _super);
    function CurrentVideo(_videoTitle, _numberOfViews, _numberOfLikes, _numberOfDislikes, _pageTitle, _publishedOn, _videoDescription, _videoLink, _videoCredits, _videoCategory, _videoLicense, _numOfSubscription, _numberOfComments, _commentatorTitle, _comments, _likesOnComments, _dislikesOnComments, _replyOnComments) {
        var _this = _super.call(this, _videoTitle, _numberOfViews, _numberOfLikes, _numberOfDislikes, _pageTitle, _publishedOn, _videoDescription, _videoLink, _videoCredits, _videoCategory, _videoLicense, _numOfSubscription, _numberOfComments) || this;
        _this.canPlayAdd = function () {
            return true;
        };
        return _this;
    }
    return CurrentVideo;
}(YoutubeVideo));
var mettalica = new YoutubeVideo("Metallica - Nothing Else Matters [Official Music Video]", 315196080, 1000000, 70000, "MetallicaTV", "Oct 26, 2009", "Nothing Else Matters [Official Music Video] From the album Metallica", "https://www.youtube.com/watch?v=tAGnKpE4NCI", "Metallica", "Music", "Audiam (Label) (on behalf of EMV); UBEM, Audiam (Publishing), UMPI, and 13 Music Rights Societies", 3400000, 31392);
var videoTitle = mettalica.getVideoTitle();
var videoComments = mettalica.getComments();
var commentator = mettalica.getCommentatorTitle();
console.log(videoTitle, videoComments, commentator);
function newFunction() {
    return mettalica.getCommentatorTitle();
}
