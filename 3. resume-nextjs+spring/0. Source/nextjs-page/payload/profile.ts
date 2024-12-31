import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sql_injection.jpeg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '임기호',
    small: '(GiHo Lim)',
  },
  contact: [
    // {
    //   // title: 'Lasid84@naver.com',
    //   // link: 'mailto:Lasid84@naver.com',
    //   title: '채용과 무관한 정보 제외',
    //   icon: faEnvelope,
    // },
    {
      // title: 'Please contact me by email',
      title: '채용과 무관한 정보 제외',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/LIMGIHO',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
