export type TeamGroup = 'core' | 'mentors' | 'support';

export type TeamMember = {
  id: string;
  group: TeamGroup;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  image: string;
  linkedin?: string;
  email?: string;
  location?: string; // used for mentors: current university / city
  expertise: string[];
};

export const coreTeam: TeamMember[] = [
  {
    id: 'yash-gulati',
    group: 'core',
    name: 'Yash Gulati',
    role: 'Founder & CEO',
    bio: 'Started Inforens after navigating the UK university application process firsthand — building the peer-mentorship platform he wished existed.',
    fullBio:
      'Yash founded Inforens after going through the confusion of applying abroad without anyone who had done it before to ask. What began as informal calls with juniors turned into a structured mentor network, and eventually a full platform connecting applicants with verified students already studying at their target universities. He now leads company strategy, partnerships, and product direction.',
    image: 'https://i.pravatar.cc/400?img=12',
    linkedin: 'https://www.linkedin.com/company/inforens/',
    email: 'yash@inforens.com',
    expertise: ['Company strategy', 'Partnerships', 'UK admissions'],
  },
  {
    id: 'core-coo',
    group: 'core',
    name: 'Placeholder Name',
    role: 'Co-Founder & COO',
    bio: 'Oversees day-to-day operations, mentor onboarding, and partnerships across the UK and India teams.',
    fullBio:
      'Placeholder bio — replace with a real overview of this person\u2019s background, what they owned before Inforens, and what they run day-to-day now (operations, mentor onboarding, and cross-border partnerships).',
    image: 'https://i.pravatar.cc/400?img=32',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Operations', 'Mentor onboarding', 'Partnerships'],
  },
  {
    id: 'core-product',
    group: 'core',
    name: 'Placeholder Name',
    role: 'Head of Product',
    bio: 'Leads product strategy across the app and web platform, shaping how students discover mentors and tools.',
    fullBio:
      'Placeholder bio — replace with details on this person\u2019s product background and the roadmap areas they currently own, such as mentor discovery, matching, and the in-app messaging experience.',
    image: 'https://i.pravatar.cc/400?img=45',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Product strategy', 'UX research', 'Roadmapping'],
  },
  {
    id: 'core-growth',
    group: 'core',
    name: 'Placeholder Name',
    role: 'Head of Growth',
    bio: 'Runs community growth and partnerships, connecting Inforens with student communities across the UK, India, and beyond.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s growth background and the channels they own, e.g. campus ambassador programmes, student community partnerships, and referral growth.',
    image: 'https://i.pravatar.cc/400?img=15',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Community growth', 'Campus partnerships', 'Referral programmes'],
  },
  {
    id: 'core-design',
    group: 'core',
    name: 'Placeholder Name',
    role: 'Head of Design',
    bio: 'Shapes the Inforens brand and product experience, keeping every touchpoint warm, clear, and student-first.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s design background and the systems they maintain, such as the Inforens brand guidelines and the product design system.',
    image: 'https://i.pravatar.cc/400?img=48',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Brand design', 'Design systems', 'UI/UX'],
  },
  {
    id: 'core-engineering',
    group: 'core',
    name: 'Placeholder Name',
    role: 'Engineering Lead',
    bio: 'Builds and maintains the Inforens web and mobile platforms that power mentor matching and community tools.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s engineering background and the systems they lead, such as the mentor-matching engine, mobile app, and platform infrastructure.',
    image: 'https://i.pravatar.cc/400?img=51',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Full-stack engineering', 'Platform infrastructure', 'Mobile'],
  },
];

export const mentors: TeamMember[] = [
  {
    id: 'mentor-imperial-ds',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'MSc Data Science, Imperial College London',
    bio: 'Helps mentees with SOPs, scholarship applications, and settling into life in London.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background: their undergraduate degree, why they chose their course and university, and the specific parts of the journey (SOPs, scholarships, moving to London) they help mentees with.',
    image: 'https://i.pravatar.cc/400?img=5',
    location: 'London, UK',
    expertise: ['Statement of purpose', 'Scholarships', 'Data science applications'],
  },
  {
    id: 'mentor-manchester-econ',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'BSc Economics, University of Manchester',
    bio: 'Specialises in undergraduate applications and student loan guidance for Indian applicants.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on undergraduate applications and education-loan guidance for Indian applicants.',
    image: 'https://i.pravatar.cc/400?img=22',
    location: 'Manchester, UK',
    expertise: ['Undergraduate applications', 'Education loans', 'UCAS'],
  },
  {
    id: 'mentor-edinburgh-cs',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'MSc Computer Science, University of Edinburgh',
    bio: 'Guides mentees through visa interviews and CS/engineering course selection.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on visa interview prep and choosing between CS/engineering course options.',
    image: 'https://i.pravatar.cc/400?img=33',
    location: 'Edinburgh, UK',
    expertise: ['Visa interviews', 'Course selection', 'Computer science'],
  },
  {
    id: 'mentor-trinity-ir',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'MA International Relations, Trinity College Dublin',
    bio: 'Supports mentees applying to Ireland, with a focus on post-study work routes.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on Ireland applications and post-study work visa routes.',
    image: 'https://i.pravatar.cc/400?img=41',
    location: 'Dublin, Ireland',
    expertise: ['Ireland applications', 'Post-study work visas'],
  },
  {
    id: 'mentor-lse-finance',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'MSc Finance, London School of Economics',
    bio: 'Advises on Russell Group applications, scholarships, and interview preparation.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on Russell Group applications, scholarships, and interview prep.',
    image: 'https://i.pravatar.cc/400?img=27',
    location: 'London, UK',
    expertise: ['Russell Group applications', 'Scholarships', 'Interview prep'],
  },
  {
    id: 'mentor-bristol-meng',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'BEng Mechanical Engineering, University of Bristol',
    bio: 'Helps first-generation applicants navigate accommodation and campus life.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on supporting first-generation applicants with accommodation and campus life.',
    image: 'https://i.pravatar.cc/400?img=59',
    location: 'Bristol, UK',
    expertise: ['First-gen support', 'Accommodation', 'Campus life'],
  },
  {
    id: 'mentor-kcl-health',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'MSc Public Health, King\u2019s College London',
    bio: 'Focuses on healthcare and life-sciences applicants, plus NHS placement guidance.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on healthcare/life-sciences applications and NHS placement guidance.',
    image: 'https://i.pravatar.cc/400?img=44',
    location: 'London, UK',
    expertise: ['Healthcare applications', 'Life sciences', 'NHS placements'],
  },
  {
    id: 'mentor-glasgow-law',
    group: 'mentors',
    name: 'Placeholder Mentor',
    role: 'LLM Law, University of Glasgow',
    bio: 'Mentors law applicants on personal statements and Scottish university routes.',
    fullBio:
      'Placeholder bio — replace with this mentor\u2019s real background and their focus on law applications, personal statements, and Scottish university routes.',
    image: 'https://i.pravatar.cc/400?img=36',
    location: 'Glasgow, UK',
    expertise: ['Law applications', 'Personal statements', 'Scottish universities'],
  },
];

export const supportTeam: TeamMember[] = [
  {
    id: 'support-success-manager',
    group: 'support',
    name: 'Placeholder Name',
    role: 'Student Success Manager',
    bio: 'The first point of contact for mentees — matching students with the right mentor and keeping sessions on track.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s real background and how they manage the mentor-matching process and follow-ups with mentees.',
    image: 'https://i.pravatar.cc/400?img=9',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Mentor matching', 'Onboarding', 'Student success'],
  },
  {
    id: 'support-community',
    group: 'support',
    name: 'Placeholder Name',
    role: 'Community & Events Coordinator',
    bio: 'Runs Inforens meetups, webinars, and the Globetrotter community calendar.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s real background and the events/community programmes they run.',
    image: 'https://i.pravatar.cc/400?img=19',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Community events', 'Webinars', 'Programme management'],
  },
  {
    id: 'support-partnerships',
    group: 'support',
    name: 'Placeholder Name',
    role: 'Partnerships Associate',
    bio: 'Manages relationships with lenders, housing providers, and university partners.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s real background and the partner relationships (lenders, housing, universities) they manage.',
    image: 'https://i.pravatar.cc/400?img=24',
    linkedin: '#',
    email: 'placeholder@inforens.com',
    expertise: ['Partner management', 'Lending partners', 'University relations'],
  },
  {
    id: 'support-customer-lead',
    group: 'support',
    name: 'Placeholder Name',
    role: 'Customer Support Lead',
    bio: 'Keeps response times fast across in-app chat and email — the team behind contact@inforens.com.',
    fullBio:
      'Placeholder bio — replace with this person\u2019s real background and how they run the support team behind in-app chat and email.',
    image: 'https://i.pravatar.cc/400?img=53',
    linkedin: '#',
    email: 'contact@inforens.com',
    expertise: ['Customer support', 'Response-time ops', 'Support tooling'],
  },
];

export const allMembers: TeamMember[] = [...coreTeam, ...mentors, ...supportTeam];

export function getMemberById(id: string): TeamMember | undefined {
  return allMembers.find((member) => member.id === id);
}

export function getGroupLabel(group: TeamGroup): string {
  switch (group) {
    case 'core':
      return 'Core members';
    case 'mentors':
      return 'Mentors';
    case 'support':
      return 'Supporters';
  }
}

export const stats = [
  { value: '150+', label: 'Verified mentors' },
  { value: '25+', label: 'Countries represented' },
  { value: '10,000+', label: 'Students supported' },
  { value: '40+', label: 'Partner universities' },
];
