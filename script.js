function khush(){
 console.log(JSON.parse(this.responseText));
var hub = JSON.parse(this.responseText);
document.getElementById("handle").innerHTML="Handle:"+hub.result[0].handle;
document.getElementById("names").innerHTML="Name:"+hub.result[0].firstName+""+hub.result[0].lastName;
document.getElementById("email").innerHTML="Email:"+hub.result[0].email;
document.getElementById("city").innerHTML="City:"+hub.result[0].city;
document.getElementById("organization").innerHTML="organization:"+hub.result[0].organization;
document.getElementById("contrib").innerHTML="contrib:"+hub.result[0].contrib;
document.getElementById("friendOfCount").innerHTML="friendOfCount:"+hub.result[0].friendOfCount;
document.getElementById("maxRank").innerHTML="maxRank:"+hub.result[0].maxRank;
document.getElementById("maxRating").innerHTML="maxRating:"+hub.result[0].maxRating;
document.getElementById("rank").innerHTML="rank:"+hub.result[0].rank;
document.getElementById("rating").innerHTML="rating:"+hub.result[0].rating;
document.getElementById("lastOnline").innerHTML="lastOnline:"+hub.result[0].lastOnline;
document.getElementById("regTime").innerHTML="regTime:"+hub.result[0].regTime;
}
function main(jkl){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", khush);
oReq.open("GET", jkl);
oReq.send();
}
function wert(){
var ent=document.getElementById("username");
main("http://codeforces.com/api/user.info?handles="+ent.value);
}
