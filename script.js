var url = new URL(window.location.href);
var p = url.searchParams.get("p");
var c = url.searchParams.get("c");
if(p !== null) {
    window.location.href='https://rdrama.net/post/'+p;
}
else if(c !== null) {
    window.location.href='https://rdrama.net/comment/'+c;
}
else {
    //probably a better way to do this
}