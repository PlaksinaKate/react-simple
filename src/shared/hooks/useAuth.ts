import { useAppSelector } from "../lib/redux/hooks";

export function useAuth() {
  const {email, token, id} = useAppSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}