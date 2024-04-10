import { Link } from "react-router-dom";
import { Button, Input, Title } from "../../shared/ui";
import { useForm } from "react-hook-form";
import { IRegistrationForm } from "./registration.module";
import { MESSAGES } from "../../shared/consts/messages";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().required(MESSAGES.required),
  password: yup.string().required(MESSAGES.required),
  repeatPassword: yup.string().required(MESSAGES.required),
});

export function Registration() {
  const formWr = "bg-white rounded-2xl pt-8 pb-10 px-12 shadow";
  const login = "text-center mt-6 text-sm	";
  const loginLink =
    "underline decoration-dashed decoration-dark-gray decoration-1 underline-offset-2	";

  const {
    register,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(validationSchema)
});

  return (
    <div>
      <div className={formWr}>
        <Title>Регистрация</Title>
        <form>
          <Input
            label={"E-mail"}
            value={""}
            {...register("email")}
            error={errors.email?.message}
          />  
          <Input
            label={"Придумайте пароль"}
            value={""}
            type={"password"}
            {...register("password")}
            error={errors.password?.message}
          />
          <Input
            label={"Повторите пароль"}
            value={""}
            type={"password"}
            {...register("repeatPassword")}
            error={errors.repeatPassword?.message}
          />
          <Button>Зарегистрироваться</Button>
        </form>
      </div>
      <div className={login}>
        Уже зарегистрированы?{" "}
        <Link className={loginLink} to={"#"}>
          Войти
        </Link>
      </div>
    </div>
  );
}
