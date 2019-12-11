var search=document.getElementById("search");
search.addEventListener("keyup",e=>{
var searchText=e.target.value;
getMovies(searchText);
});
function getMovies(searchText){
    const imdbApi=`http://www.omdbapi.com/?s=${searchText}&apikey=2385dab5`;//http://www.omdbapi.com/?i=tt3896198&apikey=34696847
    window.fetch(imdbApi).then(movie=>
        {
            movie.json().then(data=>{
               // console.log(data.Search);
               const moviedata=data.Search;
               var op=[];
               for(let m of moviedata){
                   op+=`<div class=container>
                   <section id="movies">
                   <h1>${m.Title}</h1>
                   <span class="badge badge-success">${m.Year}</span>
                  
                   <p><img src="${m.Poster}"class="imgposter"/>
                  
                   <p><button class="btn btn-dark btn-block">goto movie</button></p>
                   </p>
                   </section></div>`;
               }
               document.getElementById("template").innerHTML=op;
            }).catch(err=>console.log(err));
        }).catch(err=>console.log(err));
}