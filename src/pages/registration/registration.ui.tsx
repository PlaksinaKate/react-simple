import { Link } from "react-router-dom";
import { Button, Input, Title } from "../../shared/ui";
import { Path, useForm } from "react-hook-form";
import { IRegistrationForm } from "./registration.module";
import { MESSAGES } from "../../shared/consts/messages";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { firebaseAPI } from "../../shared/lib/firebase";
import { LoadingIcon } from "../../shared/ui/Icons";
import { PATHS } from "../../shared/lib/react-router";

const validationSchema = yup.object({
  email: yup.string().required(MESSAGES.required).email(MESSAGES.emailError),
  password: yup.string().required(MESSAGES.required),
  repeatPassword: yup
    .string()
    .required(MESSAGES.required)
    .test("passwords-match", MESSAGES.repeatPassword, function (value) {
      return this.parent.password === value;
    }),
});

export function Registration() {
  const formWr = "bg-white rounded-2xl pt-8 pb-10 px-12 shadow";
  const login = "text-center mt-6 text-sm	";
  const loginLink =
    "underline decoration-dashed decoration-dark-gray decoration-1 underline-offset-2	";
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(validationSchema),
  });

  const watchFields = watch(["email", "password", "repeatPassword"]);

  const onSubmitHandler = async (values: IRegistrationForm) => {
    setLoading(true);
    
    const { email, password } = values;
    const result = await firebaseAPI.user.registration({ email, password });
    if (result) setLoading(false);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: Path<IRegistrationForm>
  ) => {
    setValue(field, e.target.value);
  };

  return (
    <div>
      <div className={formWr}>
        <Title>Регистрация</Title>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            label={"E-mail"}
            value={watchFields[0]}
            {...register("email")}
            error={errors.email?.message}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange(e, "email")
            }
          />
          <Input
            label={"Придумайте пароль"}
            value={watchFields[1]}
            type={"password"}
            {...register("password")}
            error={errors.password?.message}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange(e, "password")
            }
          />
          <Input
            label={"Повторите пароль"}
            value={watchFields[2]}
            type={"password"}
            {...register("repeatPassword")}
            error={errors.repeatPassword?.message}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange(e, "repeatPassword")
            }
          />
          <Button disabled={loading} type="submit">
            {!loading ? (
              "Зарегистрироваться"
            ) : (
              <LoadingIcon width="25px" height="25px" />
            )}
          </Button>
        </form>
      </div>
      <div className={login}>
        Уже зарегистрированы?{" "}
        <Link className={loginLink} to={PATHS.login}>
          Войти
        </Link>
      </div>
    </div>
  );
}
