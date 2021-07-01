class FavoriteMovieSearchPresenter {
    constructor({ favoriteMovies,view }) {
        this._view = view;
       this._listenToSearchRequestByUser();
       this._favoriteMovies = favoriteMovies;
  }
    
    _listenToSearchRequestByUser() {
         this._view.runWhenUserIsSearching((latestQuery) => {
             this._searchMovies(latestQuery);
        });
    }

    
   
    async _searchMovies(latestQuery) {
        // this._latestQuery = latestQuery;
         this._latestQuery = latestQuery.trim();
        // const foundMovies = await this._favoriteMovies.searchMovies(this.latestQuery);
        let foundMovies;
            if (this.latestQuery.length > 0) {
                foundMovies = await this._favoriteMovies.searchMovies(this.latestQuery);
            } else {
                foundMovies = await this._favoriteMovies.getAllMovies();
            }
        this._showFoundMovies(foundMovies);
    }

    _showFoundMovies(movies) {
        // let html;
        // // const movies = await this._favoriteMovies.getAllMovies();

        // if (movies.length > 0) {
        //     html = movies.reduce(
        //     (carry, movie) => carry.concat(`<li class="movie"><span class="movie__title">${movie.title || '-'}</span></li>`),
        //     '',
        //     );
        // } else {
        //     html = '<div class="movies__not__found">Film tidak ditemukan</div>';
        // }
            
        //     document.querySelector('.movies').innerHTML = html;
                
        //     document.getElementById('movie-search-container')
        //         .dispatchEvent(new Event('movies:searched:updated'));
        // }
        this._view.showMovies(movies);
    }
    
     get latestQuery() {
         return this._latestQuery;
     }
}
 
export default FavoriteMovieSearchPresenter;