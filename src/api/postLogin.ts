import { defaultInstance } from ".";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  isNewUser: boolean;
}

interface postLoginProps {
  email: string;
  password: string;
}

export const postLogin = async ({ email, password }: postLoginProps) => {
  try {
    const response = await defaultInstance.post<LoginResponse>(
      "/admin/sign-in",
      {
        email: email,
        password: password,
      }
    );

    if (response.data) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      return response.data;
    }
  } catch (e) {
    console.error("Error", e);
    throw e;
  }
};
