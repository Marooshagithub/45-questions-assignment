// 40
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album("ali", "light");
console.log(album);
album = make_album("bilal", "red wave");
console.log(album);
album = make_album("ahmed", "seenbreeze");
console.log(album);
