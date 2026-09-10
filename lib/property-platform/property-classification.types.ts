export interface PropertyTypeDefinition {
  code: string;
  label: string;
  kind: string;
  parentCode?: string;
  active: boolean;
}

export interface PropertyClassificationNode {
  code: string;
  label: string;
  level: number;
  parentCode?: string;
  children?: PropertyClassificationNode[];
}