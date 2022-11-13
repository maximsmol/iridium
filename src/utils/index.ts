export const assertElementById = (id: string) => {
  const res = document.getElementById(id);
  if (res == null) throw new Error(`Expected element #${id} to exist`);

  return res;
};

export const randRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;
export const randInt = (min: number, max: number) =>
  Math.floor(randRange(min, max));
