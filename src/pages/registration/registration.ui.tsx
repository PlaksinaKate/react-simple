import { Button, Input } from "../../shared/ui";

export function Registration() {
  const formWr = 'bg-white rounded-2xl pt-8 pb-10 px-12';
  return (
    <div>
      <div className={formWr}>
        <h1 className="">Регистрация</h1>
        <form>
          <Input label={"E-mail"} required value={""} type={""} />
          <Input label={"Придумайте пароль"} required value={""} type={""} />
          <Input label={"Повторите пароль"} required value={""} type={""} />
          <Button>Зарегистрироваться</Button>
        </form>
      </div>
      <div>Уже зарегистрированы? Войти</div>
    </div>
  );
}
