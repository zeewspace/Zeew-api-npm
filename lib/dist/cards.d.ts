import Bienvenida from "./Bienvenida";
declare class card {
    constructor(token: string);
    token: string;
    bienvenida: typeof Bienvenida;
    render(render: any): Promise<string | object | undefined>;
}
export default card;
