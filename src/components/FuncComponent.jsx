import { useState } from "react"

function FuncComponent() {
    const [value, setValue] = useState(100)     /* este ejemplo es usando useState en comparacion con el de classComponent es mas sencillo y sin un solo this  */
                                                /* o puede ser asi cambiamos el updateValue por setValue */

            /* const state = useState(100)
            const value = state[0]
            const updateValue = state [1]     puede ser asi  */

    return (
        <div>
            Componente funcional
            <p>
                <buttom 
                    onClick={ () =>
                        setValue(value - 1)
                    } 
                >
                    -
                </buttom>
                {value}
                <button
                    onClick={ () =>
                        setValue(value + 1)
                    }
                >
                    +
                </button>
            </p>
        </div>
    )
}

export default FuncComponent