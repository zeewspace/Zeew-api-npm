/**
 * GIFs
 */
 declare class sfw {
  /**
   * @param {string} token
   */
  constructor(token: string);
  token: string;
  uri: string;
  neko(): Promise<any>;
  kiss(): Promise<any>;
  slap(): Promise<any>;
  wink(): Promise<any>;
  run(): Promise<any>;
  dance(): Promise<any>;
  hug(): Promise<any>;
  cry(): Promise<any>;
  punch(): Promise<any>;
  wasted(): Promise<any>;
  waifus(): Promise<any>;
}
export default sfw;
