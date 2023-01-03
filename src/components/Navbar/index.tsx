import { useMemo } from 'react';

import { FaSearch, FaReadme } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

import routes from 'app/routes';
import PokemonLogo from 'assets/images/pokemon-logo.png';
import { Input } from 'components/ui/input';
import { useSearchFilters } from 'hooks/useSearchFilters';

import { Header, Logo, Nav, NavItem, SearchBox } from './Navbar.styles';

const { VITE_APP_POKEAPI_DOCS_URL: POKEAPI_URL } = import.meta.env;

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useSearchFilters();
  const debouncedSearch = useDebouncedCallback((value) => {
    const formattedValue = value.trim().toLowerCase() || undefined;
    setSearchQuery((prev) => ({
      ...prev,
      search: formattedValue,
      offset: undefined,
      limit: undefined,
    }));
  }, 1000);

  const isHomeRoute = useMemo(
    () => location.pathname === routes.POKEMONS,
    [location],
  );

  return (
    <Header>
      <Link className="header__logo" to={routes.POKEMONS}>
        {!isHomeRoute && <>&lt; Back</>}
        <Logo alt="Pokemon Logo" src={PokemonLogo} />
      </Link>
      <SearchBox
        css={{
          display: isHomeRoute ? 'flex' : 'none',
        }}
      >
        <label className="search-box__search-label" htmlFor="searchInput">
          <FaSearch className="search-box__search-icon" />
        </label>
        <Input
          className="search-box__search-input"
          defaultValue={`${searchQuery.search || ''}`}
          autoComplete="off"
          id="searchInput"
          name="searchInput"
          onChange={(e) => debouncedSearch(e.target.value)}
          type="search"
          placeholder="Search one pokemon (e.g: pikachu)"
        />
      </SearchBox>
      <Nav>
        <NavItem href={POKEAPI_URL}>
          <FaReadme className="nav-icon" />
          Pokemon API Reference
        </NavItem>
      </Nav>
    </Header>
  );
};

export default Navbar;
