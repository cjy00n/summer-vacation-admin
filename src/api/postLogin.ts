import { defaultInstance } from ".";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  isNewUser: boolean;
}

interface postLoginProps {
  email: string;
  password: string;
  navigate: (path: string) => void;
}

export const postLogin = async ({
  email,
  password,
  navigate,
}: postLoginProps) => {
  console.log(email, password);
  try {
    const response = await defaultInstance.post<LoginResponse>(
      "/admin/sign-in",
      {
        email: email,
        password: password,
      }
    );

    console.log("response", response);
    if (response.data) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/");
    }
  } catch (e) {
    console.error("Error", e);
  }
};
