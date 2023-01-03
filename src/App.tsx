import { useEffect } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import routes from 'app/routes';
import BasicLayout from 'layouts/BasicLayout';
import Pokemons from 'pages/Pokemons';
import PokemonDetail from 'pages/Pokemons/Detail';
import { globalCssSetup } from 'styles/globalStyles';

const App = () => {
  useEffect(() => {
    globalCssSetup();
  }, []);

  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path={routes.POKEMONS}>
          <Route index element={<Pokemons />} />
          <Route path={routes.POKEMONS_BY_NAME} element={<PokemonDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={routes.POKEMONS} />} />
    </Routes>
  );
};

export default App;
