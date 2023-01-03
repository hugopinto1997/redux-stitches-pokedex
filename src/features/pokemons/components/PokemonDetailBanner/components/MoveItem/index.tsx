import Pokeball from 'assets/images/pokeball.png';

import { MoveItemContainer, MoveItemIcon } from './MoveItem.styles';

type MoveItemProps = {
  move: string;
  moveIcon: string;
};

const MoveItem = ({ move, moveIcon }: MoveItemProps) => {
  return (
    <MoveItemContainer>
      <MoveItemIcon alt="Move Icon" src={moveIcon || Pokeball} />
      {move}
    </MoveItemContainer>
  );
};

export default MoveItem;
