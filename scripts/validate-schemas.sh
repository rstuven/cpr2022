npx ajv validate \
  -s data/json/schemaNested.json \
  -d data/json/constitucion.nested.json \
  --allow-union-types

npx ajv validate \
  -s data/json/schemaShallow.json \
  -d data/json/constitucion.shallow.json \
  --allow-union-types
