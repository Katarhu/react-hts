export interface ICourse {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}


export interface IGetCoursesSuccess {
  successful: true;
  result: ICourse[];
}