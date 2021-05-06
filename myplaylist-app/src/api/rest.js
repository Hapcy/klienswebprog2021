export const BASE_PATH = 'http://localhost:3030';

let token;

async function request(path, params = {}) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...params.headers,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const resp = await fetch(`${BASE_PATH}/${path}`, {
    ...params,
    headers,
  });
  return await resp.json();
}

// CRUD - Create, Read, Update, Delete
export class MyPlaylistAppRestApi {
  constructor(resource) {
    this.resource = resource;
  }

  // Read
  async getAll() {
    const items = await request(this.resource);
    return items.data;
  }

  // Create
  async add(item) {
    const response = await request(this.resource, {
      method: 'POST',
      body: JSON.stringify(item),
    });
    return response;
  }

  // Update
  async modify(item) {
    const response = await request(`${this.resource}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
    });
    return response;
  }
  
  // Delete
  async delete(id) {
    const response = await request(`${this.resource}/${id}`, {
      method: 'DELETE',
    });
    return response;
  }
}

export async function login(username, password) {
  const response = await request('authentication', {
    method: 'POST',
    body: JSON.stringify({
      email: username,
      password,
      strategy: 'local',
    }),
  });
  if (response.code) {
    throw new Error(response.code);
  }
  token = response.accessToken;
  return response;
}