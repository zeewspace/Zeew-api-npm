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
    maid(): Promise<any>;
    boobs(): Promise<any>;
    furry(): Promise<any>;
}
export default sfw;
