import { initUser } from "@entities/user";
import {
  form,
  validatePassword,
  validateEmail,
  $disabledSubmit,
  loginFx,
} from "@feature/auth/login";
import { Input } from "@feature/auth/Input";
import { useAuthRedirect } from "@shared/hooks";
import { AuthLayout, PublicLayout } from "@shared/layouts";
import { Title } from "@shared/layouts/AuthLayout";
import { Progress } from "@shared/ui";

import { useUnit } from "effector-react";
import { useForm } from "effector-react-form";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const LoginRoute = () => {
  useAuthRedirect();

  const [activeTab, setActiveTab] = React.useState<number>(1);

  const router = useRouter();

  const isDisabled = useUnit($disabledSubmit);

  const signInProgress = useUnit(loginFx.pending);

  const initUserFn = useUnit(initUser);

  const { controller } = useForm({
    form,
  });

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userResponse = await loginFx();
      if (userResponse.fields?.includes("verification_error")) {
        router.push("/verification");
        return;
      }
      if (userResponse.user) {
        initUserFn(userResponse.user);
        router.push("/profile/home");
      }
    } catch (error) {
      console.log("ERROR: AUTH", error);
    }
  };

  return (
    <PublicLayout>
      <StyledLogin>
        <AuthLayout>
          <Title>Войти в Личный кабинет</Title>
          <span>или</span>
          <Link href="/registration" className="register">
            <a className="register">Зарегистрироваться</a>
          </Link>
          <Tabs>
            <Tab onClick={() => setActiveTab(1)} active={activeTab === 1}>
              Я заказчик
            </Tab>
            <Tab onClick={() => setActiveTab(2)} active={activeTab === 2}>
              Я исполнитель
            </Tab>
          </Tabs>
          <form onSubmit={login}>
            <Input
              controller={controller({
                name: form.getName("email"),
                validate: validateEmail,
              })}
              type="text"
              label="Email"
              placeholder="@gmail.com"
            />
            <Input
              type="password"
              controller={controller({
                name: form.getName("password"),
                validate: validatePassword,
              })}
              label="Пароль"
              placeholder="****************************"
            />
            <div className="controls-wrapper">
              <button type="submit" disabled={isDisabled || signInProgress}>
                {!signInProgress && `Войти`}
                {signInProgress && <Progress size={20} />}
              </button>
              <Link href="/recovery">
                <a className="forgot">Забыли пароль?</a>
              </Link>
            </div>
          </form>
        </AuthLayout>
      </StyledLogin>
    </PublicLayout>
  );
};

export default LoginRoute;

const StyledLogin = styled.div`
  width: 600px;
  margin: 0 auto;

  .forgot {
    color: var(--orange);
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    padding: 0 20px;
  }
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 42px;
  border: 1px solid #403f3f;
  background: linear-gradient(
    113.96deg,
    rgba(36, 54, 65, 0.12) 0%,
    rgba(17, 17, 17, 0.12) 100%
  );
  border-radius: 5px;
`;

export const Tab = styled.div<{ active?: boolean }>`
  cursor: pointer;
  background: ${(props) => (props.active ? "var(--orange)" : "transparent")};
  color: #fff;
  display: grid;
  place-content: center;
  border-radius: 5px;
  border: ${(props) => (props.active ? "var(--orange)" : "transparent")};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
