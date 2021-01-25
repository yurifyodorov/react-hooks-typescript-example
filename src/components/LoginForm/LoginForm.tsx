import React from 'react';
import { Icon, Input, InputGroup } from 'rsuite';

const LoginForm: React.FC = () => {
  return (
    <>
      <InputGroup inside>
        <InputGroup.Addon>
          <Icon icon="avatar" size="2x" />
        </InputGroup.Addon>
        <Input size="lg" name="email" />
      </InputGroup>
    </>
  );
};

export default LoginForm;
