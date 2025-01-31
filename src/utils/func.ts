import errorToast from "@/components/toast/ErrorToast";
import successToast from "@/components/toast/SuccessToast";
import { logout } from "@/services/auth.service";

export const handelLogout = async () => {
  const success = await logout();
  if (!success) {
    errorToast("Something went wrong", { position: "top-right" });
  } else {
    successToast("Logout successful", { position: "bottom-left" });
  }
};
