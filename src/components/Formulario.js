import React, { useState, useEffect } from "react";
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'

const Formulario = ({ getRepoUser }) => {
  // console.log(getRepoUser)
  // objeto con los datos del candidato
  const [datosCandidato, setDatosCandidato] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    nacimiento: "",
    email: "",
    usergit: "",
  });

  const [cabecera, setCabecera] = useState(datosCandidato);


  useEffect(() => {
    const datosJson = window.localStorage.getItem("datosCompletos");
    setCabecera(JSON.parse(datosJson));
  }, []);

  const handleInputChange = (event) => {
    setDatosCandidato({
      ...datosCandidato,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    getRepoUser(datosCandidato.usergit);

    // Set localStorage
    window.localStorage.setItem(
      "datosCompletos",
      JSON.stringify(datosCandidato)
    );

    // Get localStorage
    const datosJson = window.localStorage.getItem("datosCompletos");
    setCabecera(JSON.parse(datosJson));
  };

  return (
    <div class="mt-12">
      {cabecera != null && <div style={{width:'600px'}} class="my-1 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1" role="alert"><p class="font-bold">{cabecera.nombre}</p></div>}
      {cabecera != null && <div style={{width:'600px'}} class="my-1 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1" role="alert"><p class="font-bold">{cabecera.apellido}</p></div>}
      {cabecera != null && <div style={{width:'600px'}} class="my-1 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1" role="alert"><p class="font-bold">{cabecera.cedula}</p></div>}
      {cabecera != null && <div style={{width:'600px'}} class="my-1 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1" role="alert"><p class="font-bold">{cabecera.nacimiento}</p></div>}
      {cabecera != null && <div style={{width:'600px'}} class="my-1 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1" role="alert"><p class="font-bold">{cabecera.email}</p></div>}
      {cabecera != null && <div style={{width:'600px'}} class="my-1 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1" role="alert"><p class="font-bold">{cabecera.usergit}</p></div>}

      <h1 class="mt-4">Buscando usuario de GitHub</h1>

      <form
        onSubmit={enviarDatos}
        class="w-full bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h3 class="my-4">Ingresar datos del candidato</h3>
        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 font-bold mb-2 px-8 pt-2 pb-2"
              for="inline-full-name"
            >
              Nombre
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={handleInputChange}
              placeholder="Ingrese Nombre" 
              name="nombre"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 font-bold mb-2 px-8 pt-2 pb-2"
              for="inline-full-name"
            >
              Apellido
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={handleInputChange}
              placeholder="Ingrese Apellido" 
              name="apellido"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 font-bold mb-2 -mx-2 px-8 pt-2 pb-2"
              for="inline-full-name"
            >
              Cédula
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={handleInputChange}
               placeholder="Ingrese Cédula" 
               name="cedula" 
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="number"
            />
          </div>
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 font-bold mb-2 -mx-2 px-8 pt-2 pb-2"
              for="inline-full-name"
            >
              Fecha de nacimiento
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={handleInputChange}
              placeholder="Ingrese Fecha de nacimiento" 
              name="nacimiento"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="date"
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-4">
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 font-bold mb-2 -mx-2 px-8 pt-2 pb-2"
              for="inline-full-name"
            >
              Correo Electrónico
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={handleInputChange}
              placeholder="name@example.com" 
              name="email"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
            />
          </div>
          <div class="md:w-1/3">
            <label
              class="block text-gray-700 font-bold mb-2 -mx-2 px-8 pt-2 pb-2"
              for="inline-full-name"
            >
              Usuario GitHub
            </label>
          </div>
          <div class="md:w-2/3">
            <input
                placeholder="Ingrese Usuario Github" 
                name="usergit"
              onChange={handleInputChange}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              required
            />
          </div>
        </div>

        <div class="flex md:flex-row-reverse flex-wrap">
          <div class="w-full md:w-1/4 p-1 text-center text-gray-700">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
              type="submit"
            >
              Buscar Repositorios
            </button>
          </div>
          <div class="w-full md:w-3/4 p-4 text-center text-gray-200"></div>
        </div>
      </form>
    </div>

    // {/* <Form.Group as={Row} md="4" >
    // <Form.Label> Nombre </Form.Label>
    //     <Form.Control type="text" placeholder="Ingrese Nombre" name="nombre" onChange={handleInputChange}/>
    // </Form.Group>  */}

    // {/* <Form.Group as={Row} md="4" >
    //     <label>Apellido</label>
    //         <Form.Control type="text" placeholder="Ingrese Apellido" name="apellido" onChange={handleInputChange}/>
    // </Form.Group>
    // <Form.Group as={Row} md="4" >
    //     <label>Cédula</label>
    //         <Form.Control type="number" placeholder="Ingrese Cédula" name="cedula" onChange={handleInputChange}/>
    // </Form.Group>
    // <Form.Group as={Row} md="4" >
    //     <label>Fecha de nacimiento</label>
    //         <Form.Control type="date" placeholder="Ingrese Fecha de nacimiento" name="nacimiento" onChange={handleInputChange}/>
    // </Form.Group>
    // <Form.Group as={Row} md="4" >
    //     <label>Correo Eléctonico</label>
    //         <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleInputChange}/>
    // </Form.Group>

    // <Form.Group as={Row} md="4" >
    //     <label>Ingrese Nombre de usuario de GitHub</label>
    //         <Form.Control type="text" placeholder="Ingrese Usuario Github" name="usergit" onChange={handleInputChange}/>
    //         <Button type="submit">Buscar repositorios</Button>
    // </Form.Group> */}
  );
};

export default Formulario;
