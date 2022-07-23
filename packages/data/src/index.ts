import constitucionNestedJson from './constitucion.nested.json';
import constitucionShallowJson from './constitucion.shallow.json';
import { ConstitucionNested } from './types/schemaNested';
import { ConstitucionShallow } from './types/schemaShallow';

export const constitucion: ConstitucionNested = constitucionNestedJson;
export const constitucionShallow = constitucionShallowJson as unknown as ConstitucionShallow;
