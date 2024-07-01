const URL_API = "http://localhost:3333/api";

export default async function api(url: string, method: string, body = {}) {
  const token = localStorage.getItem("token");
  console.log("🚀 ~ token:", token);

  const response = await fetch(`${URL_API}${url}`, {
    credentials: "include",
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: method === "GET" ? null : JSON.stringify(body),
  });
  if (!response.ok) {
    const errorData = await response.json();
    if (errorData && errorData.errors) {
      throw errorData.errors;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  }
  const data = await response.json();

  return data;
}
