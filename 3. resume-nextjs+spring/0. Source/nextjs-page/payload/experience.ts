import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '㈜케이더블유이코리아',
      positions: [
        {
          title: '사내 시스템 개발 및 운영',
          startedAt: '2022-01',
          descriptions: [],
          skillKeywords: [
            'JavaScript',
            'TypeScrip',
            'Next.js',
            'Express',
            'C#',
            'gRPC',
            'PostgreSQL',
            'Puppeteer',
            'Nginx',
          ],
        },
      ],
    },
    {
      title: '일진글로벌',
      positions: [
        {
          title: 'MES시스템 개발 및 운영',
          startedAt: '2010-12',
          endedAt: '2022-01',
          descriptions: [],
          skillKeywords: ['C#', 'ASP.NET', 'Oracle', 'PL/SQL', 'WCF'],
        },
      ],
    },
  ],
};

export default experience;
