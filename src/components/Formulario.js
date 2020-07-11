import React, { Fragment,useState, useEffect }from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const Formulario = ({getRepoUser}) => {
    
    // objeto con los datos del candidato
    const [datosCandidato, setDatosCandidato] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        nacimiento: '',
        email: '',
        usergit: ''
    })

    const [cabecera, setCabecera] = useState(datosCandidato)

    useEffect(() => {
        const datosJson = window.localStorage.getItem('datosCompletos')
        setCabecera(JSON.parse(datosJson))
    }, [])
    
    const handleInputChange = (event) => {

        setDatosCandidato({
            ...datosCandidato,
            [event.target.name] : event.target.value  
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        getRepoUser(datosCandidato);

        // Set localStorage
        window.localStorage.setItem('datosCompletos' , JSON.stringify(datosCandidato)) 

        // Get localStorage
        const datosJson = window.localStorage.getItem('datosCompletos')
        setCabecera(JSON.parse(datosJson))
    }


    return (
        <Fragment>

            {cabecera!=null&&<p>{cabecera.nombre}</p>}
            <p>{cabecera.apellido}</p>
            <p>{cabecera.cedula}</p>
            <p>{cabecera.nacimiento}</p>
            <p>{cabecera.email}</p>
            <p>{cabecera.usergit}</p>

            <h1>Buscando usuario de GitHub</h1>
            <form onSubmit={enviarDatos}>
                <h2>Ingresar datos del candidato</h2>
    

            <Form.Group as={Row} md="4" >
                <Form.Label> Nombre </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Nombre" name="nombre" onChange={handleInputChange}/>
            </Form.Group> 



            <Form.Group as={Row} md="4" >
                <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Apellido" name="apellido" onChange={handleInputChange}/>
            </Form.Group>  
            <Form.Group as={Row} md="4" >
                <Form.Label>Cédula</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese Cédula" name="cedula" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group as={Row} md="4" >
                <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Ingrese Fecha de nacimiento" name="nacimiento" onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group as={Row} md="4" >
                <Form.Label>Correo Eléctonico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleInputChange}/>
            </Form.Group>
            
            <Form.Group as={Row} md="4" >
                <Form.Label>Ingrese Nombre de usuario de GitHub</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Usuario Github" name="usergit" onChange={handleInputChange}/>
                    <Button type="submit">Buscar repositorios</Button>
            </Form.Group>
            </form>
        </Fragment>
    );
}

export default Formulario;
