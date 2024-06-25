export interface IAuthAccessToken {
  type: string;
  name: string | null;
  token: string;
  abilities: string[];
  lastUsedAt: string | null;
  expiresAt: string | null;
}

export interface ILogoutResponse {
  success: boolean;
}

/* 
{
  "type": "bearer",
  "name": null,
  "token": "oat_Mw.NUNKTVRmSDhFQXg3Wl9zMzBFQzhXa0NDcFJTcXdxZVNKT1V2aDBVOTMyMDI5NTA4NjE",
  "abilities": [
    "*"
  ],
  "lastUsedAt": null,
  "expiresAt": null
} */
