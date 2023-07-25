export async function request<T = any>(url: string, token: string): Promise<T> {
  return fetch(url, {
    headers: {
      token,
    },
  }).then((res) => res.json());
}
