import React from 'react';

import { Label, Info } from './Styles';

type Props = {
  label: string;
  children: string;
};

const InfoText: React.FC<Props> = ({ label, children }) => {
  return (
    <Label>
      {label}: <Info>{children}</Info>
    </Label>
  );
};

export default InfoText;
