import {
  StatItemContainer,
  StatItemName,
  StatItemValue,
} from './StatItem.styles';

type StatItemProps = {
  stat: string;
  value: string | number;
};

const StatItem = ({ stat, value }: StatItemProps) => {
  return (
    <StatItemContainer>
      <StatItemName>{stat}</StatItemName>
      <StatItemValue>{value}</StatItemValue>
    </StatItemContainer>
  );
};

export default StatItem;
