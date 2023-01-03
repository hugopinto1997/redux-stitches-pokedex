import { ReactNode } from 'react';

import { Heading2 } from 'components/ui/typography';

import { NamedSectionContainer } from './NamedSection.styles';

type NamedSectionProps = {
  className?: string;
  title: string;
  children: ReactNode;
} & typeof defaultProps;

const defaultProps = {
  className: '',
};

const NamedSection = ({ title, children, className }: NamedSectionProps) => {
  return (
    <NamedSectionContainer className={className}>
      <Heading2 className="named-section__title" size="medium">
        {title}
      </Heading2>
      {children}
    </NamedSectionContainer>
  );
};

NamedSection.defaultProps = defaultProps;
export default NamedSection;
