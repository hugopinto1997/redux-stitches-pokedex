import { FaGithub, FaLinkedin, FaReadme } from 'react-icons/fa';

import PokemonLogo from 'assets/images/pokemon-logo.png';
import { Box } from 'components/ui/container';
import { Paragraph } from 'components/ui/typography';

import { FooterContainer, Logo, MediaLink } from './Footer.styles';

const {
  VITE_APP_POKEAPI_DOCS_URL: POKEAPI_URL,
  VITE_APP_LINKEDIN_PROFILE: LINKEDIN_URL,
  VITE_APP_GITHUB_REPOSITORY: GITHUB_URL,
} = import.meta.env;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={PokemonLogo} alt="Pokemon Logo" />
      <Box display="block" width="fit-content" marginBottom="$xl">
        <MediaLink target="_blank" href={POKEAPI_URL}>
          <FaReadme className="media-link__media-icon" />
          Pokemon API Reference
        </MediaLink>
        <MediaLink target="_blank" href={GITHUB_URL}>
          <FaGithub className="media-link__media-icon" />
          Project repository
        </MediaLink>
        <MediaLink target="_blank" href={LINKEDIN_URL}>
          <FaLinkedin className="media-link__media-icon" />
          Hugo Pinto
        </MediaLink>
      </Box>
      <Paragraph>
        Powered by PokeAPI. Created by Hugo Pinto as a personal project.
        Copyright &copy; {new Date().getFullYear()} by Hugo Pinto. You are 100%
        allowed to use this webpage for both personal and commercial use, but
        NOT to claim it as your own design. A credit to the original author,
        Hugo Pinto, is of course highly appreciated!
      </Paragraph>
    </FooterContainer>
  );
};

export default Footer;
