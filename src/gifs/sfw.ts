import { ZeewError } from "../utils/ZeewError";
import { request } from "../utils/request";
import { INT } from "../utils/key";

interface SfwRes {
  status?: number;
  message?: string;
  url: string;
}

/**
 * GIFs
 */
export class Sfw {
  token;
  uri;

  /**
   * @param {string} token
   */
  constructor(token: string) {
    if (!token) throw new ZeewError("Debes Colocar un Token");
    this.token = token;
    this.uri = INT + "/gif/sfw";
  }

  async neko(): Promise<string> {
    const url = this.uri + "/neko";

    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async kiss(): Promise<string> {
    const url = this.uri + "/kiss";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async slap(): Promise<string> {
    const url = this.uri + "/slap";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async wink(): Promise<string> {
    const url = this.uri + "/wink";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async run(): Promise<string> {
    const url = this.uri + "/run";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async dance(): Promise<string> {
    const url = this.uri + "/dance";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async hug(): Promise<string> {
    const url = this.uri + "/hug";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async cry(): Promise<string> {
    const url = this.uri + "/cry";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async punch(): Promise<string> {
    const url = this.uri + "/punch";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async wasted(): Promise<string> {
    const url = this.uri + "/wasted";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }

  async waifus(): Promise<string> {
    const url = this.uri + "/waifus";
    const body = await request<SfwRes>(url, this.token);
    if (body.status) throw new ZeewError(body.message!);
    return body.url;
  }
}
