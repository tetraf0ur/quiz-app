import { $initApp } from "@app/init";
import { $user } from "@entities/user";
import { useUnit } from "effector-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuthRedirect = () => {
  const initializing = useUnit($initApp);
  const user = useUnit($user);
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (user) {
        router.push("/profile/home");
      }
    }
  }, [router, initializing, user]);
};

export { useAuthRedirect };
