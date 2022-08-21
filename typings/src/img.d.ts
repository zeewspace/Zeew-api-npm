import cards from "./cards";
import filter from "./filter";
declare class img {
    constructor(token: string);
    token: string;
    card: cards;
    filter: filter;
}
export default img;
