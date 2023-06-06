import { Component } from "react";


class ClassComponent extends Component{
    constructor() {
        super()                             /* aqui vemos la diferencia del useState con el constructor que debe acceder a this state y inicializar el contador */
        this.state = {
            contador: 0,
        }
    }
    render() {
        return (
            <div>
                Class Component
                <p>
                    <button onClick={ () => this.setState({ contador: this.state.contador -1 }) }>-</button>
                    {this.state.contador}
                    <button onClick={ () => this.setState({ contador: this.state.contador +1 }) }>+</button>
                </p>
            </div>
        ) 
    }
}

export default ClassComponent