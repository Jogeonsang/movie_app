import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {

  }

componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies: [
        {
          title: "Age of Ultron",
          poster: "http://www.impawards.com/2015/posters/avengers_age_of_ultron_ver23.jpg"
        },
        {
          title: "I want to eat your pancreas",
          poster: "http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/09/2017091909152517879-540x756.jpg"
        },
        {
          title: "DeadPool",
          poster: "https://ext.fmkorea.com/files/attach/new/20160202/86431577/3579565/305192604/123c9da040ca24fd7918ff3d5a1e9d9c.jpg"
        },
        {
          title: "Black Panther",
          poster: "http://image.chosun.com/sitedata/image/201801/18/2018011800526_0.jpg"
        },
        {
          title: "YAYAYA",
          poster: "http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/09/2017091909152517879-540x756.jpg"
        }
      ]
    })
  }, 2000 )
}

_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  return movies
}

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loding'}
      </div>
    );
  }
}

export default App;
