var myRequest =new XMLHttpRequest();
var movies ;
myRequest.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=a9c76ff16883d2273aea0aba85438701")
myRequest.send();
myRequest.addEventListener("readystatechange",function(){
    if(myRequest.readyState==4&&myRequest.status==200)
    {
        movies=JSON.parse(myRequest.response).results;
        displayMovies()
    }
})
function displayMovies()
{
    var moviesContainer="";
    for(var i=0;i<movies.length;i++){
        moviesContainer+=`
        <div class="col-md-3">
            <div class="post">
                <h5>${movies[i].vote_average}</h5>
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}">
                <h4>${movies[i].title}</h4>
                <p>${movies[i].overview}</p>
            </div>
        </div>`
        
    }
    document.getElementById("myRow").innerHTML=moviesContainer
}