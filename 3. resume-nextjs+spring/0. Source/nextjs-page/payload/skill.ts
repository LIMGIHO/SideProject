import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'C#',
      level: 3,
    },
    {
      title: 'VB',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Next.js',
      level: 3,
    },
    {
      title: 'Express.js',
      level: 2,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'Spring Boot',
      level: 2,
    },
    {
      title: '.Net',
      level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Databases & Infrastructure',
  items: [
    {
      title: 'Oracle',
      level: 3,
    },
    {
      title: 'PostgreSQL',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'NginX',
      level: 2,
    },
    {
      title: 'AWS',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
      level: 3,
    },
    {
      title: 'Puppet',
      level: 3,
    },
    {
      title: 'Chef',
      level: 2,
    },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    // automation,
    // networkSecurity,
    // misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
