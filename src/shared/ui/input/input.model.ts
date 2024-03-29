export interface IInput {
  label: string,
  required: boolean,
  value: 'string | number | readonly string[] | undefined',
  type: string,
  error?: string
}