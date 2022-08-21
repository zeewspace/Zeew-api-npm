import sfw from "./sfw";
import nsfw from "./nsfw";
declare class gif {
  constructor(token: string);
  token: string;
  sfw: sfw;
  nsfw: nsfw;
}
export default gif;
