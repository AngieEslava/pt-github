import React, { useState, useEffect } from "react";
import { GrFilter } from "react-icons/gr";
// import Table from "react-bootstrap/Table";

const UsersGithub = ({ repoUser, setRepoUser }) => {
  const ordenado = [...repoUser];

  const sort = (columna) => {
    console.log(ordenado);
    const nuevoOrden = ordenado.sort((a, b) => {
      if (!a[columna] || !b[columna]) {
        return 0;
      }
      const aLower = a[columna].toLowerCase();
      const bLower = b[columna].toLowerCase();
      if (aLower < bLower) {
        return -1;
      }
      if (aLower > bLower) {
        return 1;
      }
      return 0;
    });
    console.log(nuevoOrden);
    setRepoUser(nuevoOrden);
  };
  //   useEffect(()=>{
  //     setOrdenado(repoUser)
  //     console.log(ordenado)
  //   },[])
  return (
    <div class="mb-16">
      <table class="table-auto my-4">
        <thead class="mb-1">
          <tr>
            <th class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">#</th>
            <th class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => sort("language")}>
            Lenguaje<GrFilter/>
            </th>
            <th class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => sort("default_branch")}>
              Branch por defecto<GrFilter/>
            </th>
            <th class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => sort("clone_url")}>
              Url git<GrFilter/>
            </th>
            <th class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => sort("name")}>
              Nombre<GrFilter/>
            </th>
            <th class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => sort("description")}>
              Descripción<GrFilter/>
            </th>
          </tr>
        </thead>
        <tbody>
          {ordenado &&
            ordenado.map((item, index) => (
              <tr class="bg-gray-100" key={index}>
                <td class="border px-4 py-2">{index + 1}</td>
                <td class="border px-4 py-2">{item.language}</td>
                <td class="border px-4 py-2">{item.default_branch}</td>
                <td class="border px-4 py-2">{item.clone_url}</td>
                <td class="border px-4 py-2">{item.name}</td>
                <td class="border px-4 py-2">{item.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersGithub;
