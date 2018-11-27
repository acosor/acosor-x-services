interface IAction<T = any> {
  modular: string;
  topic: string;
  natures: { type: string; nature: string; };
  payload: T;
}
