export interface IInput {
  label: string,
  value: string | number | readonly string[] | undefined,
  type?: string,
  error?: string
}