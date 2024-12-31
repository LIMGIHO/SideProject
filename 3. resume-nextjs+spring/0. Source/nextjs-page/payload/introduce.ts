import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    // '다양한 산업군에서 개발 경험을 보유하고 있으며, 웹/데스크탑 애플리케이션 및 RDBMS등 다양한 기술을 활용하여 안정적이고 확장 가능한 시스템을 설계하고 운영한 경험이 있습니다. 데이터 마이그레이션, API 설계, 자동화 구현을 통해 업무 효율성과 정확성을 높이는 데 주력하고 있습니다.',
    // '문제 해결과 새로운 기술 도입에 관심이 많아 프로젝트별 요구 사항에 최적화된 솔루션을 설계하는 것을 즐깁니다. 개인적으로는 기술적 깊이를 더하기 위해 여러 학습 활동을 병행하며, 시스템 통합과 데이터 최적화 관련 기술을 꾸준히 연구하고 있습니다.',
    // '개발은 단순히 기술 구현을 넘어, 사용자와 비즈니스의 요구를 이해하고 해결하는 과정이라 생각합니다. 현업과의 소통을 통해 실질적인 요구를 반영하고, 팀과 협력하여 더 나은 결과를 만들어내기 위해 노력하고 있습니다. 이러한 경험과 태도를 바탕으로, 더 높은 기술적 목표를 향해 나아가고자 합니다.',
    '웹 애플리케이션 개발자 : JavaScript, Next.js, Express 활용한 개발 경험',
    '데스크톱 애플리케이션 개발자 : C#, VB 활용한 개발 경험',
    'DBA 급 개발자 : Oracle, PostgreSQL 등 다양한 DBMS 및 DB 설계, 최적화 경험',
    '산업 프로젝트 경험 : 제조업, 물류업 등 다양한 프로젝트를 주도하여 폭넓은 개발 경험 보유',
  ],
  sign: 'Lim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
