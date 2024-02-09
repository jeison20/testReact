// En App.js (o el nombre que le hayas dado a tu componente principal)
import React from 'react';
import Search from './components/SearchComponent'; // Ajusta la ruta según tu estructura de archivos

export function SearchRecords()  {
  return (
    <div>
      <header>
        <h1>Search Records</h1>
      </header>

    
      <main>
        <Search />
       
      </main>

      <footer>
        <p>Pie de página de tu aplicación</p>
      </footer>
    </div>
  );
};

export default SearchRecords;
