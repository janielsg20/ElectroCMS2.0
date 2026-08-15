const fs = require('fs');
const path = require('path');

const REQUIREMENTS_PATH = path.join(__dirname, '../REQUIREMENTS.md');
const TRACEABILITY_PATH = path.join(__dirname, '../TRACEABILITY_MATRIX.md');

function extractIds(filePath, pattern) {
    const content = fs.readFileSync(filePath, 'utf8');
    const ids = [];
    const regex = new RegExp(pattern, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(match[1]);
    }
    return ids;
}

console.log('--- ElectroCMS 2.0 Traceability Audit ---');

const reqIds = extractIds(REQUIREMENTS_PATH, '- (R\\d{3}|U\\d{3}|A\\d{3})');
const matrixIds = extractIds(TRACEABILITY_PATH, '\\| (R\\d{3}|U\\d{3}|A\\d{3}) \\|');

console.log(`Found ${reqIds.length} requirements in REQUIREMENTS.md`);
console.log(`Found ${matrixIds.length} entries in TRACEABILITY_MATRIX.md`);

const missing = reqIds.filter(id => !matrixIds.includes(id));
const extra = matrixIds.filter(id => !reqIds.includes(id));

if (missing.length === 0 && extra.length === 0 && reqIds.length === matrixIds.length) {
    console.log('✅ SUCCESS: 100% coverage confirmed.');
    process.exit(0);
} else {
    if (missing.length > 0) {
        console.error('❌ MISSING from TRACEABILITY_MATRIX.md:', missing.join(', '));
    }
    if (extra.length > 0) {
        console.error('⚠️ EXTRA entries in TRACEABILITY_MATRIX.md (not in REQUIREMENTS.md):', extra.join(', '));
    }
    process.exit(1);
}
