import { Input } from "../../shared/ui";

export function Registration() {
  return ( 
    <div>
      <h1>Регистрация</h1>
      <form>
        <Input label={"E-mail"} required value={'atrin'} type={""}/>
      </form>
    </div>
   );
}