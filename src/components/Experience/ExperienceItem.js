import React from 'react';
import Parallaxator from '../Parallaxator';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexboxColumn, flexboxRow } from '../../styles/helpers';

export const ExperienceItemWrapper = styled.section`
  display: grid;
  grid-template-rows: 30% 70%;
  grid-template-columns: 30% 70%;
  max-width: 320px;
  //background: url('img/texture.jpeg') no-repeat;
  //background-size: cover;
  padding: 2rem 1rem 4rem 1rem;
`;

export const WorkLink = styled.a`
  color: yellow;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`;

export const ItemLogo = styled.div`
  svg { 
    width: 42px;
    height: auto;
  }
`;

export const ItemDescription = styled.article`
  
`;

export const Role = styled.h5`
  font-size: 18px;
  grid-row: 1;
`;

export const CompanyName = styled.h5`
  font-size: 18px;
`;

export const RoleDescription = styled.p`
  font-size: 14px;
  grid-column: 1 / span 2;
  grid-row: 2;
`;

export const ExperienceItem = ({ role, companyName, description, logo, url }) => (
    <ExperienceItemWrapper>
      <ItemLogo>
        {logo}
      </ItemLogo>
      <ItemDescription>
        <Role>{role}</Role>
        <CompanyName>{companyName}</CompanyName>
      </ItemDescription> 
      <RoleDescription>
        {description}
      </RoleDescription>
      <WorkLink href={url} target='_blank'>{url}</WorkLink>
    </ExperienceItemWrapper>
);

export default ExperienceItem;
