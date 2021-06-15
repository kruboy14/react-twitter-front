export interface Iprogress {
  percent: number;
  len: number;
}
export const countTweetLength = (str: string): Iprogress => {
  let percent = Math.ceil((str.length / 280) * 100);
  const len = 280 - str.length;
  if (percent > 100) percent = 100;
  console.log({ percent, len });

  return { percent, len };
};