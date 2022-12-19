export interface IAuthor {
  id: string
  name: string
}

export interface IGetAuthorsSuccess {
  successful: true;
  result: IAuthor[];
}
