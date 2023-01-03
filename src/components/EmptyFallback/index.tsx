import PikachuImg from 'assets/images/pikachu-2.png';
import { Box } from 'components/ui/container';
import { Heading, Paragraph } from 'components/ui/typography';

import { EmptyFallbackContainer, FallbackImage } from './EmptyFallback.styles';

const EmptyFallback = () => {
  return (
    <EmptyFallbackContainer>
      <Box display="flex" alignItems="center" justifyContent="center">
        <FallbackImage alt="Error Image" src={PikachuImg} />
      </Box>
      <Heading>Whoops! something went wrong</Heading>
      <Paragraph>
        There seems to be no data :( try searching (e.g: &apos;pikachu&apos;)
        and I&apos;m sure you will find me!
      </Paragraph>
      <span>Si me fui</span>
    </EmptyFallbackContainer>
  );
};

export default EmptyFallback;
