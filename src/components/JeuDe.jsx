import React, { Component } from 'react'

export default class JeuDe extends Component {
  constructor(props) {
    super(props)

    this.state = { face: null, compteur: 0, fin: false }
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1
    if (valeur === this.props.cache)
      this.setState({
        face: valeur,
        compteur: this.state.compteur + 1,
        fin: true,
      })
    else this.setState({ face: valeur, compteur: this.state.compteur + 1 })
  }
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false })
  }

  render() {
    return (
      <div className="jeu">
        <img src={require('../images/de.jpeg')} alt="logo de dé" />
        <h1>Jeu de Dé</h1>
        <h2>face:{this.state.face} </h2>
        {this.state.face === null ? (
          <img
            className="facede"
            src={require('../images/facevide.jpeg')}
            alt=""
          />
        ) : (
          <img
            className="facede"
            src={require('../images/face' + this.state.face + '.jpeg')}
            alt=""
          />
        )}

        <h2>nombre d'essais : {this.state.compteur}</h2>
        {this.state.fin ? (
          <div>
            <p>Bravo vous avez trouvez la face cachée.....</p>
            <button onClick={() => this.initialiser()}>Initialiser</button>
          </div>
        ) : (
          <button onClick={() => this.jouer()}>jouer</button>
        )}
      </div>
    )
  }
}
