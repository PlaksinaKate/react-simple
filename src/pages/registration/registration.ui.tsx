import { Link } from "react-router-dom";
import { Button, Input, Title } from "../../shared/ui";

export function Registration() {
  const formWr = "bg-white rounded-2xl pt-8 pb-10 px-12 shadow";
  const login = "text-center mt-6 text-sm	";
  const loginLink =
    "underline decoration-dashed decoration-dark-gray decoration-1 underline-offset-2	";

  return (
    <div>
      <div className={formWr}>
        <Title>Регистрация</Title>
        <form>
          <Input label={"E-mail"} required value={""} />
          <Input label={"Придумайте пароль"} required value={""} type={"password"} />
          <Input label={"Повторите пароль"} required value={""} type={"password"} />
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
