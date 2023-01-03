import routes from 'app/routes';
import Pokeball from 'assets/images/pokeball.png';
import { Button } from 'components/ui/button';

import {
  Card,
  Image,
  Content,
  ContentTitle,
  ContentDescription,
  ContentActions,
  Title,
} from './PokemonCard.styles';

type PokemonCardProps = {
  image?: string;
  name: string;
  stats: {
    attack: number;
    defense: number;
    hp: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
} & typeof defaultProps;

const defaultProps = { image: Pokeball };

const PokemonCard = ({ image, name, stats }: PokemonCardProps) => {
  const { attack, defense, hp, specialAttack, specialDefense, speed } = stats;
  const formattedImage = image || Pokeball;
  return (
    <Card>
      <Image src={formattedImage} alt={name} />
      <Title>{`${name.toUpperCase()}`}</Title>
      <Content>
        <ContentTitle>{name}</ContentTitle>
        <ContentDescription>
          <div className="item">
            <span className="item__title">HP</span>
            <span className="item__description">{hp}</span>
          </div>
          <div className="item">
            <span className="item__title">Attack</span>
            <span className="item__description">{attack}</span>
          </div>
          <div className="item">
            <span className="item__title">Defense</span>
            <span className="item__description">{defense}</span>
          </div>
          <div className="item">
            <span className="item__title">Special Attack</span>
            <span className="item__description">{specialAttack}</span>
          </div>
          <div className="item">
            <span className="item__title">Special Defense</span>
            <span className="item__description">{specialDefense}</span>
          </div>
          <div className="item">
            <span className="item__title">Speed</span>
            <span className="item__description">{speed}</span>
          </div>
        </ContentDescription>
        <ContentActions>
          <Button
            as="a"
            href={`${routes.POKEMONS}/${name}`}
            variant="secondary"
            size="medium"
            width="full"
            rounded="full"
          >
            Go to Detail
          </Button>
        </ContentActions>
      </Content>
    </Card>
  );
};

PokemonCard.defaultProps = defaultProps;
export default PokemonCard;
