import { Path, useForm } from "react-hook-form";
import { firebaseAPI } from "../../shared/lib/firebase";
import { IUser } from "../../shared/lib/firebase/user.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { MESSAGES } from "../../shared/consts/messages";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { Button, Input, Title } from "../../shared/ui";
import { PATHS } from "../../shared/lib/react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../shared/lib/redux/slices/user-slice";

const validationSchema = yup.object({
  email: yup.string().required(MESSAGES.required).email(MESSAGES.emailError),
  password: yup.string().required(MESSAGES.required),
});

export function ChangeUserData() {
  const formWr = "bg-white rounded-2xl pt-8 pb-10 px-12 shadow";
  const login = "text-center mt-6 text-sm	";
  const loginLink =
    "underline decoration-dashed decoration-dark-gray decoration-1 underline-offset-2	";
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  const onChange = (e: ChangeEvent<HTMLInputElement>, field: Path<IUser>) => {
    setValue(field, e.target.value);
  };

  const logoutUser = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      <div className={formWr}>
        <Title>Изменение данных</Title>
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
          <Button
            disabled={loading}
            isLoading={loading}
            type="submit"
            onClick={logoutUser}
          >
            "Сохранить"
          </Button>
        </form>
      </div>
      <div className={login}>
        <Link className={loginLink} to={PATHS.login}>
          Выйти
        </Link>
      </div>
    </div>
  );
}
