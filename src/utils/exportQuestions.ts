import fs from 'fs';
import path from 'path';
import { constablePrelimsFullTest } from '@/data/mock-tests/constable-prelims-full-test';

const outputPath = path.resolve(__dirname, '../data/mock-tests/constable-prelims-full-test.json');

fs.writeFileSync(
  outputPath,
  JSON.stringify(constablePrelimsFullTest, null, 2),
  'utf-8'
);

console.log(`Exported questions to ${outputPath}`); 