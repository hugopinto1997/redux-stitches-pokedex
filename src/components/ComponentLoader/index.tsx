import { memo, ReactNode } from 'react';

import PokeballImg from 'assets/images/pokeball.png';
import { useMountTransition } from 'hooks/useMountTransition';

import { LoaderBackDrop } from './ComponentLoader.styles';

type ComponentLoaderProps = {
  isLoading: boolean;
  children: ReactNode;
  emptyFallback?: ReactNode;
  shouldRenderEmpty?: boolean;
} & typeof defaultProps;

const defaultProps = {
  emptyFallback: <>&nbsp;</>,
  shouldRenderEmpty: false,
};

const ComponentLoader = ({
  children,
  isLoading,
  emptyFallback,
  shouldRenderEmpty,
}: ComponentLoaderProps) => {
  const hasTransitionedIn = useMountTransition(isLoading, 1000);

  return (
    <>
      {(isLoading || hasTransitionedIn) && (
        <LoaderBackDrop
          css={{
            opacity: hasTransitionedIn && isLoading ? '1' : '0',
          }}
        >
          <img
            alt="Pokeball"
            src={PokeballImg}
            className="loader loader--animated"
          />
        </LoaderBackDrop>
      )}
      {shouldRenderEmpty ? emptyFallback : children}
    </>
  );
};

ComponentLoader.defaultProps = defaultProps;
export default memo(ComponentLoader);
