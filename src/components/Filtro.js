import React, { useState } from "react";

const Filtro = ({ page, setPage, repoUser }) => {
  console.log(repoUser);

//   const [filtro, setFiltro] = useState([]);
//   console.log(filtro);

//   const [lista, setLista] = useState({onFilterTable});

    const [userInput, setUserInput] = useState('')
    
    const filterList =(e)=>{
        setUserInput({userInput:e.target.value})
    }

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

//   const onFilterTable = (e) => {
//     setFiltro({text: e.target.value,});
//     const updateList = lista;
//     updateList = updateList.filter(function (item) {
//       return item.toLowerCase().search(e.target.value.toLowerCase());
//     });
//     setLista(lista) = updateList;
//   };

  return (
    <div>
      <div class="md:w-1/3">
        <label
          class="block text-gray-700 font-bold mb-2 px-8 pt-2 pb-2"
          for="inline-full-name"
        >
          Filtrar Resultados
        </label>
      </div>
      <div class="md:w-2/3">
        <input
        //   onChange={onFilterTable}
          onChange={userInput}
          placeholder="Ingrese Nombre"
          name="nombre"
          class="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
        />
      </div>

      <button
        onClick={() => previousPage()}
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Anterior
      </button>
      <button
        onClick={() => nextPage()}
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Siguiente
      </button>
    </div>
  );
};
export default Filtro;
