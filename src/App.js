import React, { Component } from 'react';
import './App.css';
import Cherche from './cherche';
import MovieListe from "./movieliste";

const tab = [{
  etoile: 3,
  image: 'https://superclub.videotron.com/media/catalog/product/cache/bdfe59afc1d8bd5cfc84d1a6934fa46c/v/a/vakin_dvd_2d.jpg',
  titre: 'LE COMMENCEMENT'
},
{
  etoile: 1,
  image: 'https://fr.web.img4.acsta.net/r_630_0/pictures/19/06/13/16/39/3685647.jpg',
  titre: 'F&F Hobbs&Shaw-2019'
},
{
  etoile: 4,
  image: 'https://www.tvhland.com/vignette/billet/201601/56a774758d590.jpg',
  titre: 'Marvel X-MEN Deadpool'
}, {
  etoile: 5,
  image: 'https://thepowerzone.files.wordpress.com/2019/04/affiche-film-captain-marvel-2019.jpg?w=736',
  titre: 'Captain-MARVEL-2019'
},
{
  etoile: 5,
  image: 'https://img5.cdn.cinoche.com/images/8c4b599d0a61fcd26ef6c8c94181b7ef.jpg',
  titre: 'Chair de poule'
}]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      rating:1,
      mytab: tab
    }
  }

  addmovie=()=>{

    var titre = prompt('titre')
    var rating = prompt('rating')
    var image = prompt('image')

    if (titre==='' || rating==='') return
    this.setState({
      mytab:this.state.mytab.concat({etoile: rating, titre: titre, image:image='https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png'})
    })
}
  render() {
    return (
      <div className='App'>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <Cherche onhandlechange={(newvalue) =>
          this.setState({
            value: newvalue
          })}
          onratingchange={
            (newrating)=>this.setState({
            rating:newrating 
          })}
        />
        <MovieListe addmovie={this.addmovie}
          movietab={this.state.mytab.filter(el=>el.titre.toUpperCase().includes(this.state.value.toUpperCase().trim()) && el.etoile>=this.state.rating)} />

      </div>
    );
  }
}

export default App;