"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* se que genera la estructura del circulo*/
var Color = function (_React$Component) {
  _inherits(Color, _React$Component);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
  }

  _createClass(Color, [{
    key: "render",
    value: function render() {
      /* color del círculo*/
      var backgroundCircle = {
        /* se utiliza props para acceder a la propiedad colorCircle*/
        backgroundColor: this.props.colorCircle
      };
      return (
        /* retorna el evento onlodad para cambiar los colores*/
        React.createElement("div", { className: "color", onLoad: this, style: backgroundCircle })
      );
    }
  }]);

  return Color;
}(React.Component);
/* creando el componente mediante la clase app para el modo random*/


var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  /* se configura el etado inicial de componenente y se pasan las propiedades asiganadas*/
  function App() {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this2.state = {
      /* número de colores asigandos a los circulos*/
      number: 5,
      /* array de los colores*/
      colors: []

    };
    /* recorrido para cada item*/
    for (var i = 0; i < _this2.state.number; i += 1) {
      /* agregando al array par asignarle el color*/
      _this2.state.colors.push({ colorCircle: _this2.generateColor() });
    }
    return _this2;
  }
  /* generando el color en hexadecimal para cada circulo*/


  _createClass(App, [{
    key: "generateColor",
    value: function generateColor() {
      /* simblo hexadecimal*/
      var simbolHexa = "#";
      return simbolHexa +
      /* generano la sección para los colores en forma aleatoria*/
      Math.random()
      /* convirtiendo a base hexadecimal*/
      .toString(16)
      /* recortando el numero random desde el final solo 6 digitos*/
      .slice(-6);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /* actualizando*/
        React.createElement(
          "div",
          { className: "color-container" },
          this.state.colors.map(function (color) {
            return React.createElement(Color, {
              colorCircle: color.colorCircle
            });
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);
/* usando el componente para que funcione*/


ReactDOM.render(React.createElement(App, null), document.getElementById("box"));
