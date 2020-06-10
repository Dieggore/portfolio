import React from 'react';
import {
  ExperienceWrapper,
  ExperienceTitle 
} from './styles';
import ExperienceItem from './ExperienceItem';
import NearsoftLogo from '../../svg/NearsoftLogo';
import SiemensLogo from '../../svg/SiemensLogo';
import XapoLogo from '../../svg/XapoLogo';
import AtlassianLogo from '../../svg/AtlassianLogo';
// import { ARRIVE_FROM_LEFT } from '../../utils/animations';
// import Parallaxator from '../Parallaxator';

const EXPERIENCE_ITEMS = [{
  description: `Fully remote and distributed global FinTech providing a global and multicurrency digital wallet and bitcoin custody services using blockchain technology – www.xapo.com
  Responsible for creating the new web app version of Xapo wallet. Which is a complex internationalized web app available in 3 different languages.`,
  companyName: 'Xapo',
  role: 'Senior Frontend Developer',
  logo: <XapoLogo />,
  url: "https://www.xapo.com",
}, {
  description: `Responsible for creating a highly complex scheduling app for staffing coordinators that managed personnel availability, shift swaps, shift assignments across different facilities and employees roles in different time zones.

  We designed and developed an in-house components library that included custom calendars with different functionalities that allowed the coordinators to create the best rosters for their employees with ease.`,
  companyName: 'Siemens Healthineers',
  role: 'Senior Frontend Developer',
  logo: <SiemensLogo />,
  url: "https://www.siemens-healthineers.com",
}, {
  description: `
  I contributed here not only as a software dev in outsourced projects of many sorts but also in internal initiatives, some roles include:
  
  - Technical interviewer.
  - Speaker in conferences and nation wide events (Campus Party) in different places around Mexico.
  - Imparted workshops on different topics including but not limited to:
  React fundamentals, Communication skills, CSS and PostCSS, Methodologies to transform ideas to MVP, Creating messenger bots for facebook or telegram, Time management techniques.`,
  companyName: 'Nearsoft',
  role: 'Senior Software Engineer',
  logo: <NearsoftLogo />,
  url: "https://www.nearsoft.com",
}, {
  description: `Full stack developer, responsible for creating add ons for Atlassian products like JIRA, Confluence, Bitbucket.
  Created Bitbucket and Trello integration which functionality was to link a git repository with trello boards and link commits, pull requests, branches to trello cards to keep better control of software development cycles.
  
  Created retrospectives add-on for confluence to make retrospectives sessions and see what went well or wrong during the development sprint and create action items for next iterations.`,
  companyName: 'Atlassian',
  role: 'Full Stack Developer',
  logo: <AtlassianLogo />,
  url: "https://www.atlassian.com/software/trello",
}];
// zilkr
// {
//   description: `Zilkr lets any Telco sell Comms as an API. Its cloud gives networks an external Integration API while delivering the necessary Developer Program. Zilkr also seeds the ecosystem with products and partnerships.
//   Full stack developer, using React/Redux and Node.js with Express .
//   Responsible for creating two portals (web apps) from ground up, one for telecom service providers and another one for developers.
//   Built performant web apps, using cutting edge technology and development practices.
//   Also responsible for enhancing Zilkr API.`,
//   companyName: 'Zilkr',
//   role: 'Full Stack Developer',
//   logo: <SiemensLogo />,
//   url: "https://www.zilkr.io",
// }
export const Experience = () => (
  <ExperienceWrapper>
    <ExperienceTitle>Experience</ExperienceTitle>
    <div>
      {EXPERIENCE_ITEMS.map(item => <ExperienceItem {...item} />)}
    </div>
  </ExperienceWrapper>
);

export default Experience;
