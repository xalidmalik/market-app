export type TagType = {
  name: string;
  quantity: number;
};

export type TagStateType = {
  data: Array<TagType>;
  isLoading: boolean;
  error: any;
};
