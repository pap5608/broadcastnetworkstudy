# 방송 네트워크 실습 교안

Cisco Packet Tracer를 활용한 방송 네트워크 구성 및 패킷 분석 실습 자료입니다.

## 온라인 교안

https://pap5608.github.io/broadcastnetworkstudy/

`Packet_Tracer_실습교안_배포용.html`을 GitHub Pages의 첫 화면으로 배포합니다.
`main` 브랜치에 푸시하면 GitHub Actions가 교안과 PDF·PPTX 자료를 배포합니다.

## Vercel 배포

https://broadcastnetworkstudy.vercel.app/

`vercel.json`이 `node scripts/build-site.cjs`를 실행하고 `dist` 폴더를 배포합니다.
빌드 과정에서 배포용 HTML을 `dist/index.html`로 복사해 첫 화면을 제공합니다.
Vercel 프로젝트의 Root Directory는 저장소 루트로 지정합니다.
GitHub의 `main` 브랜치와 연결하면 푸시할 때 자동으로 재배포됩니다.

## 자료

- `Packet_Tracer_실습교안_배포용.html`: 웹 배포용 교안
- `Packet_Tracer_2시간_실습교안.html`: 강의용 교안
- `Packet_Tracer_2시간_실습교안.pdf`: PDF 교안
- `Packet_Tracer_2시간_실습교안.pptx`: PowerPoint 교안
- `네트워크 구성 및 패킷 분석 실습 강의자료_박진산.pptx`: 강의 자료

HTML 파일은 브라우저에서 직접 열어 사용할 수도 있습니다.
이력서, 중간 백업, 내부 제작 및 검수 파일은 저장소에 포함하지 않습니다.
