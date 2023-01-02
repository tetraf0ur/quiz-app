import cn from "classnames";
import { useUnit } from "effector-react";
import styled from "styled-components";
import { $toastNotification } from "../toast-notification.model";

const NotificationUI = () => {
  const toastNotification = useUnit($toastNotification);
  return (
    <NotificationWrapper className={cn({ visible: toastNotification.isOpen })}>
      {toastNotification.content}
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 15px;
  background-color: #403f3f;
  z-index: 200;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.3s ease;
  &.visible {
    animation: 0.3s ease 0s 1 normal none running fadeInUp-animation;
    opacity: 1;
  }
`;

export { NotificationUI };
