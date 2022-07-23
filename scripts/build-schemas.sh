
npx ts-json-schema-generator \
  --path packages/data/src/types/schemaNested.d.ts \
  --type ConstitucionNested \
  --expose all \
  --out data/json/schemaNested.json

npx ts-json-schema-generator \
  --path packages/data/src/types/schemaShallow.d.ts \
  --type ConstitucionShallow \
  --expose all \
  --out data/json/schemaShallow.json
