import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한라대학교',
      subTitle: '컴퓨터공학',
      startedAt: '2003-03',
      endedAt: '2011-08',
    },
    {
      title: '면목고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2000-03',
      endedAt: '2003-02',
    },
  ],
};

export default education;
