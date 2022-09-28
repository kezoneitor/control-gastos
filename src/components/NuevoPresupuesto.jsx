import { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({ 
    presupuesto, 
    setPresupuesto,
    setIsValidPresupuesto
}) {
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(presupuesto <= 0){
            setMensaje('No es un presupuesto valido')
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type='number'
                        min='1'
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                    <input
                        value='Añadir'
                        type='submit'
                    />
                    {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                    {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                </div>
            </form>
        </div>
    )
}

export default NuevoPresupuesto