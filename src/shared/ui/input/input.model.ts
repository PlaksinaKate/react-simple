export interface IInput {
  label: string,
  required: boolean,
  value: 'string | number | readonly string[] | undefined',
  placeholder: string,
  type: string,
}