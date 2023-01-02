import { $initApp, $initError } from "@app/init";
import { $user } from "@entities/user";
import { AuthLayout } from "@shared/layouts";
import { Title } from "@shared/layouts/AuthLayout";
import { Progress } from "@shared/ui";
import { useUnit } from "effector-react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import styled from "styled-components";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const user = useUnit($user);
  const router = useRouter();
  const initializing = useUnit($initApp);
  const initializingError = useUnit($initError);

  useEffect(() => {
    if (initializingError && !user) {
      router.push("/login");
      return;
    }

    if (!initializing) {
      if (!user) {
        router.push("/login");
      }
    }
  }, [initializing, router, initializingError, user]);

  if (initializing) {
    return (
      <PageTemplate>
        <span className="loading-title">
          загрузка <Progress size={25} />
        </span>
      </PageTemplate>
    );
  }

  if (!initializing && user) {
    return <>{children}</>;
  }

  return null;
}

const PageTemplate: FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledNewPassword>
    <AuthLayout>
      <Title>{children}</Title>
    </AuthLayout>
  </StyledNewPassword>
);

const StyledNewPassword = styled.div`
  a {
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
    width: 70px;
    font-weight: 400;
    margin-left: 44px;
  }
  .input_block {
    position: relative;
  }
  .danger {
    position: absolute;
    top: 73%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }

  .loading-title {
    opacity: 1;
    display: flex;
    align-items: center;

    .loader {
      margin-left: 10px !important;
    }
  }
`;
