import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

/* eslint-disable prettier/prettier */
const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input title="USUÁRIO" margin="10px 0px 0px" />
            <Input type="password" title="SENHA" margin="16px 0px 0px" />
            <Button type="primary" margin="32px 0px 16px 0px">
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
