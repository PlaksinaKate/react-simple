import { Link } from "react-router-dom";
import { Button, Input, Title } from "../../shared/ui";
import { Path, useForm } from "react-hook-form";
import { MESSAGES } from "../../shared/consts/messages";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { LoadingIcon } from "../../shared/ui/Icons";
import { IUser } from "../../shared/lib/firebase/user.model";
import { firebaseAPI } from "../../shared/lib/firebase";
import { PATHS } from "../../shared/lib/react-router";

const validationSchema = yup.object({
  email: yup.string().required(MESSAGES.required).email(MESSAGES.emailError),
  password: yup.string().required(MESSAGES.required),
});

export function Login() {
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
  } = useForm<IUser>({
    resolver: yupResolver(validationSchema),
  });

  const watchFields = watch(["email", "password"]);

  const onSubmitHandler = async (values: IUser) => {
    setLoading(true);
    
    const { email, password } = values;
    const result = await firebaseAPI.user.login({ email, password });
    if (result) setLoading(false);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: Path<IUser>
  ) => {
    setValue(field, e.target.value);
  };

  return (
    <div>
      <div className={formWr}>
        <Title>Авторизация</Title>
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
            label={"Пароль"}
            value={watchFields[1]}
            type={"password"}
            {...register("password")}
            error={errors.password?.message}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange(e, "password")
            }
          />
          <Button disabled={loading} type="submit">
            {!loading ? (
              "Авторизоваться"
            ) : (
              <LoadingIcon width="25px" height="25px" />
            )}
          </Button>
        </form>
      </div>
      <div className={login}>
        Ещё не зарегистрированы? {" "}
        <Link className={loginLink} to={PATHS.registration}>
          Зарегистрироваться  
        </Link>
      </div>
    </div>
  );
}
