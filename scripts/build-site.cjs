const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const files = [
  'Packet_Tracer_실습교안_배포용.html',
  'Packet_Tracer_2시간_실습교안.html',
  'Packet_Tracer_2시간_실습교안.pdf',
  'Packet_Tracer_2시간_실습교안.pptx',
  '네트워크 구성 및 패킷 분석 실습 강의자료_박진산.pptx',
];

fs.mkdirSync(output, { recursive: true });
for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
fs.copyFileSync(path.join(root, files[0]), path.join(output, 'index.html'));
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('배포용 교안과 강의 자료를 dist에 생성했습니다.');
