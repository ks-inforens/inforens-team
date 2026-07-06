// ---------------------------------------------------------------------------
// PLACEHOLDER DATA
// Only "Yash Gulati" (Founder) is a verified public figure at Inforens.
// Every other name, role, bio, and photo below is a placeholder — swap in
// real teammates, mentors, and support staff (and real photos in /public)
// before this page goes live.
// ---------------------------------------------------------------------------

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  location?: string; // used for mentors: current university / city
};

export const coreTeam: TeamMember[] = [
  {
    name: 'Yash Gulati',
    role: 'Founder & CEO',
    bio: 'Started Inforens after navigating the UK university application process firsthand — building the peer-mentorship platform he wished existed.',
    image: 'https://i.pravatar.cc/400?img=12',
    linkedin: 'https://www.linkedin.com/company/inforens/',
  },
  {
    name: 'Placeholder Name',
    role: 'Co-Founder & COO',
    bio: 'Oversees day-to-day operations, mentor onboarding, and partnerships across the UK and India teams.',
    image: 'https://i.pravatar.cc/400?img=32',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Head of Product',
    bio: 'Leads product strategy across the app and web platform, shaping how students discover mentors and tools.',
    image: 'https://i.pravatar.cc/400?img=45',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Head of Growth',
    bio: 'Runs community growth and partnerships, connecting Inforens with student communities across the UK, India, and beyond.',
    image: 'https://i.pravatar.cc/400?img=15',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Head of Design',
    bio: 'Shapes the Inforens brand and product experience, keeping every touchpoint warm, clear, and student-first.',
    image: 'https://i.pravatar.cc/400?img=48',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Engineering Lead',
    bio: 'Builds and maintains the Inforens web and mobile platforms that power mentor matching and community tools.',
    image: 'https://i.pravatar.cc/400?img=51',
    linkedin: '#',
  },
];

export const mentors: TeamMember[] = [
  {
    name: 'Placeholder Mentor',
    role: "MSc Data Science, Imperial College London",
    bio: 'Helps mentees with SOPs, scholarship applications, and settling into life in London.',
    image: 'https://i.pravatar.cc/400?img=5',
    location: 'London, UK',
  },
  {
    name: 'Placeholder Mentor',
    role: 'BSc Economics, University of Manchester',
    bio: 'Specialises in undergraduate applications and student loan guidance for Indian applicants.',
    image: 'https://i.pravatar.cc/400?img=22',
    location: 'Manchester, UK',
  },
  {
    name: 'Placeholder Mentor',
    role: 'MSc Computer Science, University of Edinburgh',
    bio: 'Guides mentees through visa interviews and CS/engineering course selection.',
    image: 'https://i.pravatar.cc/400?img=33',
    location: 'Edinburgh, UK',
  },
  {
    name: 'Placeholder Mentor',
    role: 'MA International Relations, Trinity College Dublin',
    bio: 'Supports mentees applying to Ireland, with a focus on post-study work routes.',
    image: 'https://i.pravatar.cc/400?img=41',
    location: 'Dublin, Ireland',
  },
  {
    name: 'Placeholder Mentor',
    role: 'MSc Finance, London School of Economics',
    bio: 'Advises on Russell Group applications, scholarships, and interview preparation.',
    image: 'https://i.pravatar.cc/400?img=27',
    location: 'London, UK',
  },
  {
    name: 'Placeholder Mentor',
    role: 'BEng Mechanical Engineering, University of Bristol',
    bio: 'Helps first-generation applicants navigate accommodation and campus life.',
    image: 'https://i.pravatar.cc/400?img=59',
    location: 'Bristol, UK',
  },
  {
    name: 'Placeholder Mentor',
    role: 'MSc Public Health, King\u2019s College London',
    bio: 'Focuses on healthcare and life-sciences applicants, plus NHS placement guidance.',
    image: 'https://i.pravatar.cc/400?img=44',
    location: 'London, UK',
  },
  {
    name: 'Placeholder Mentor',
    role: 'LLM Law, University of Glasgow',
    bio: 'Mentors law applicants on personal statements and Scottish university routes.',
    image: 'https://i.pravatar.cc/400?img=36',
    location: 'Glasgow, UK',
  },
];

export const supportTeam: TeamMember[] = [
  {
    name: 'Placeholder Name',
    role: 'Student Success Manager',
    bio: 'The first point of contact for mentees — matching students with the right mentor and keeping sessions on track.',
    image: 'https://i.pravatar.cc/400?img=9',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Community & Events Coordinator',
    bio: 'Runs Inforens meetups, webinars, and the Globetrotter community calendar.',
    image: 'https://i.pravatar.cc/400?img=19',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Partnerships Associate',
    bio: 'Manages relationships with lenders, housing providers, and university partners.',
    image: 'https://i.pravatar.cc/400?img=24',
    linkedin: '#',
  },
  {
    name: 'Placeholder Name',
    role: 'Customer Support Lead',
    bio: 'Keeps response times fast across in-app chat and email — the team behind contact@inforens.com.',
    image: 'https://i.pravatar.cc/400?img=53',
    linkedin: '#',
  },
];

export const stats = [
  { value: '150+', label: 'Verified mentors' },
  { value: '25+', label: 'Countries represented' },
  { value: '10,000+', label: 'Students supported' },
  { value: '40+', label: 'Partner universities' },
];
