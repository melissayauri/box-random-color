/* se que genera la estructura del circulo*/
class Color extends React.Component {
  render() {
    /* color del círculo*/
    let backgroundCircle = {
      /* se utiliza props para acceder a la propiedad colorCircle*/
      backgroundColor: this.props.colorCircle
    };
    return (
      /* retorna el evento onlodad para cambiar los colores*/
    <div className="color" onLoad={this} style={backgroundCircle}>

      </div>
    );
  }
}
/* creando el componente mediante la clase app para el modo random*/
class App extends React.Component {
  /* se configura el etado inicial de componenente y se pasan las propiedades asiganadas*/
  constructor() {
    super();
    this.state = {
      /* número de colores asigandos a los circulos*/
      number: 5,
      /* array de los colores*/
      colors: []

    };
    /* recorrido para cada item*/
    for (let i = 0; i < this.state.number; i += 1) {
      /* agregando al array par asignarle el color*/
      this.state.colors.push({ colorCircle: this.generateColor() });
    }
  }
  /* generando el color en hexadecimal para cada circulo*/
  generateColor() {
    /* simblo hexadecimal*/
    let simbolHexa =  "#"
    return (
      simbolHexa +
      /* generano la sección para los colores en forma aleatoria*/
       Math.random()
      /* convirtiendo a base hexadecimal*/
        .toString(16)
      /* recortando el numero random desde el final solo 6 digitos*/
        .slice(-6)

    );
  }



  render() {
    return (
      /* actualizando*/
      <div className="color-container">
        {this.state.colors.map((color) => (
          <Color
            colorCircle={color.colorCircle}
          />
        ))}
      </div>
    );
  }
}
/* usando el componente para que funcione*/
ReactDOM.render(<App />, document.getElementById("box"));
