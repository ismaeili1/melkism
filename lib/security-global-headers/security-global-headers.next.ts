import { getGlobalSecurityHeaderSet } from "./security-global-headers.service";

export type NextSecurityHeaderDefinition = {
  key: string;
  value: string;
};

export function getNextSecurityHeaderDefinitions(): NextSecurityHeaderDefinition[] {
  return getGlobalSecurityHeaderSet().headers.map((header) => ({
    key: header.key,
    value: header.value
  }));
}

export function applySecurityHeaders(headers: Headers): void {
  for (const header of getNextSecurityHeaderDefinitions()) {
    headers.set(header.key, header.value);
  }
}
