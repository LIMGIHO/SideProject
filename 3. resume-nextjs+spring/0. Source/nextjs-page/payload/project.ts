import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Web 기반 통합 사내 시스템 구축',
      startedAt: '2022-01',
      where: '㈜케이더블유이코리아',
      descriptions: [
        {
          content: 'Next.js와 Express를 활용하여 Web 기반 통합 사내 시스템 설계 및 구현',
        },
        {
          content: 'Puppeteer를 사용해 글로벌 시스템 데이터 수집 자동화 스크래핑 서비스 개발',
        },
        {
          content: 'PL/SQL과 PostgreSQL로 약 10만 건의 데이터 마이그레이션 및 통합 수행',
        },
        {
          content: '백엔드-데이터베이스 간 데이터 처리 구조화로 배포 횟수 절감',
          // descriptions: [{ content: '배포 효율성과 유지보수성 향상' }],
        },
        { content: '배포 효율성과 유지보수성 향상' },
        {
          content: 'UniPass API와 글로벌 시스템 API를 리버스 엔지니어링하여 화물 통관 데이터 연동',
          // descriptions: [
          //   { content: '화물 신고 데이터 자동화로 시간 단축 (1시간 → 5분)' },
          //   { content: '글로벌 시스템 데이터 연동 기반 마련' },
          // ],
        },
        { content: '화물 신고 데이터 자동화로 시간 단축 (1시간 → 5분)' },
        { content: '글로벌 시스템 데이터 연동 기반 마련' },
      ],
    },
    {
      title: '세금계산서 시스템 리뉴얼',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: '㈜케이더블유이코리아',
      descriptions: [
        {
          content: '기존 세금계산서 시스템을 .NET 6와 C# 기반으로 리뉴얼',
        },
        {
          content: 'Oracle에서 PostgreSQL로 100만 건 이상의 데이터 마이그레이션 수행',
          // descriptions: [{ content: '라이선스 비용 절감 및 통합 DB 기반 마련' }],
        },
        { content: '라이선스 비용 절감 및 통합 DB 기반 마련' },
        {
          content: 'gRPC 기반 서비스 통신을 설계하여 유지보수 효율성 향상',
        },
        {
          content: '스마트빌 연동으로 세금 신고 및 매입 데이터 처리 자동화 구현',
        },
        {
          content: 'LDAP 통합을 통한 사용자 인증 및 접근 관리 간소화',
        },
      ],
    },
    {
      title: 'RPA 프로젝트 (삼성 NERP 연동)',
      startedAt: '2022-08',
      endedAt: '2022-10',
      where: '㈜케이더블유이코리아',
      descriptions: [
        {
          content: '삼성 NERP 연동을 위한 반복 업무 자동화 RPA 솔루션 개발',
        },
        {
          content: 'OCR 기술을 활용하여 수작업 데이터 입력을 자동화하고 워크플로우 최적화',
          // descriptions: [{ content: '업무 자동화를 통해 월 500시간의 노동 시간을 절감' }],
        },
        { content: '업무 자동화를 통해 월 500시간의 노동 시간을 절감' },
        {
          content: '데이터베이스를 MySQL에서 PostgreSQL로 마이그레이션하여 확장성 강화',
        },
      ],
    },
    {
      title: '운반비 전산화 구축 프로젝트',
      startedAt: '2020-04',
      endedAt: '2020-07',
      where: '일진글로벌',
      descriptions: [
        {
          content: '8개 공장의 운반비 업무를 분석하고 데이터 모델을 설계',
        },
        {
          content: '법인 간 데이터 연동 방식을 설계 및 개발',
        },
        {
          content: 'SAP 데이터를 연동하여 운반비 시스템 전산화 구축',
          // descriptions: [{ content: '업무 투명성과 효율성을 확보하며 시스템 안정성 강화' }],
        },
        { content: '업무 투명성과 효율성을 확보하며 시스템 안정성 강화' },
      ],
    },
    {
      title: 'SAP 도입 관련 MES 시스템 데이터 인터페이스',
      startedAt: '2019-01',
      endedAt: '2019-12',
      where: '일진글로벌',
      descriptions: [
        {
          content: '기준 정보 데이터 및 실적 데이터의 마이그레이션 설계 및 개발',
        },
        {
          content: '입고, 생산, 납품, 재고이동등 실적 데이터 인터페이스 구조 설계 및 프로시저 개발',
          // descriptions: [{ content: 'ERP 데이터 연동을 통해 업무 효율성을 향상' }],
        },
        { content: 'ERP 데이터 연동을 통해 업무 효율성을 향상' },
      ],
    },
    {
      title: 'MES 시스템 업그레이드 (VB6 to C#)',
      startedAt: '2016-04',
      endedAt: '2016-12',
      where: '일진글로벌',
      descriptions: [
        {
          content: '제천 및 슬로바키아 공장의 MES 시스템을 VB6에서 C#으로 업그레이드',
        },
        {
          content: '노후 서버와 데이터베이스를 교체하고 데이터를 Oracle 9i에서 11g로 마이그레이션',
        },
        {
          content: 'ERP와 실시간 실적 연동',
          // descriptions: [{ content: 'MES 시스템 통합을 통해 확장성과 유지보수성을 강화' }],
        },
        { content: 'MES 시스템 통합을 통해 확장성과 유지보수성을 강화' },
      ],
    },
    {
      title: 'SPC(통계적 공정 관리) 이상현상 알림 시스템',
      startedAt: '2015-09',
      endedAt: '2015-09',
      where: '일진글로벌',
      descriptions: [
        {
          content: 'SPC(통계적 공정 관리) 이상 현상 알림 시스템 개발',
        },
        {
          content: '일 평균 100만 건의 데이터를 분석하여 이상 현상 감지 기능 구현',
          // descriptions: [
          //   { content: 'SMS 및 현장 현황판 알림을 통해 설비 이상을 사전에 감지' },
          //   { content: '품질 향상과 설비 관리 효율성 증대' },
          // ],
        },
        { content: 'SMS 및 현장 현황판 알림을 통해 설비 이상을 사전에 감지' },
        { content: '품질 향상과 설비 관리 효율성 증대' },
      ],
    },
  ],
};

export default project;
