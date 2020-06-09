import React from 'react';
import {
  ExperienceWrapper,
  ExperienceTitle 
} from './styles';
import ExperienceItem from './ExperienceItem';
import XapoLogo from '../../svg/XapoLogo';
// import { ARRIVE_FROM_LEFT } from '../../utils/animations';
// import Parallaxator from '../Parallaxator';

const EXPERIENCE_ITEMS = [];


export const Experience = () => (
  <ExperienceWrapper>
    <ExperienceTitle>Experience</ExperienceTitle>
    <div>
      <ExperienceItem 
        description='Fully remote and distributed global FinTech providing a global and multicurrency digital wallet and bitcoin custody services using blockchain technology – www.xapo.com
        Responsible for creating the new web app version of Xapo wallet. Which is a complex internationalized web app available in 3 different languages.'
        companyName='Xapo'
        role='Senior Frontend Developer'
        logo={<XapoLogo />}
        url="https://www.xapo.com"
      />
      <ExperienceItem 
        description='Fully remote and distributed global FinTech providing a global and multicurrency digital wallet and bitcoin custody services using blockchain technology – www.xapo.com
        Responsible for creating the new web app version of Xapo wallet. Which is a complex internationalized web app available in 3 different languages.'
        companyName='Xapo'
        role='Senior Frontend Developer'
        logo={<XapoLogo />}
        url="https://www.xapo.com"
      />
      <ExperienceItem 
        description='Fully remote and distributed global FinTech providing a global and multicurrency digital wallet and bitcoin custody services using blockchain technology – www.xapo.com
        Responsible for creating the new web app version of Xapo wallet. Which is a complex internationalized web app available in 3 different languages.'
        companyName='Xapo'
        role='Senior Frontend Developer'
        logo={<XapoLogo />}
        url="https://www.xapo.com"
      />
      <ExperienceItem 
        description='Fully remote and distributed global FinTech providing a global and multicurrency digital wallet and bitcoin custody services using blockchain technology – www.xapo.com
        Responsible for creating the new web app version of Xapo wallet. Which is a complex internationalized web app available in 3 different languages.'
        companyName='Xapo'
        role='Senior Frontend Developer'
        logo={<XapoLogo />}
        url="https://www.xapo.com"
      />
      
    </div>
  </ExperienceWrapper>
);

export default Experience;
