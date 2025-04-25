export type PostData = {
  title: string;
  body: string;
}

export type CComponentProps = {
  initialData: Types.PostData;
  initialPostId: number;
}

export type SearchParams = {
  [key: string]: string | string[] | undefined
};