class Color extends React.Component {
  render() {
    /* generando la estructura del circulo*/
    let style = {
      backgroundColor: this.props.colorCircle
    };
    /* retornando el evento onload para cambiar los colores*/
    return (
    <div className="color" onLoad={this.props.update.bind(this, this.props.index)} style={style}>

      </div>
    );
  }
}
