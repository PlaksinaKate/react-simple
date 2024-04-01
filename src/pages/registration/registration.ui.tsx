import { Button, Input } from "../../shared/ui";

export function Registration() {
  return (
    <>
      <div>
        <h1>Регистрация</h1>
        <form>
          <Input label={"E-mail"} required value={""} type={""} />
          <Input
            label={"Придумайте пароль"}
            required
            value={""}
            type={""}
          />
          <Input label={"Повторите пароль"} required value={""} type={""} />
          <Button>Зарегистрироваться</Button>
        </form>
      </div>
      <div>Уже зарегистрированы? Войти</div>
    </>
  );
}
