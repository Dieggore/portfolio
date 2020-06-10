import React from 'react';
import Parallaxator from '../Parallaxator';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexboxColumn, flexboxRow } from '../../styles/helpers';

export const ExperienceItemWrapper = styled.section`
  display: grid;
  grid-template-columns: 20% 80%;
  max-width: 530px;
  background: url('img/texture.jpeg') no-repeat;
  background-size: cover;
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
    width: 82px;
    height: auto;
  }
`;

export const ItemDescription = styled.article`
  display: grid;
  grid-template-rows: 10% 20%;
`;

export const Role = styled.h5`
  font-size: 18px;
`;

export const CompanyName = styled.h5`
  font-size: 18px;
`;

export const RoleDescription = styled.h5`
  font-size: 14px;
`;

export const ExperienceItem = ({ role, companyName, description, logo, url }) => (
    <ExperienceItemWrapper>
      <ItemLogo>
        {logo}
      </ItemLogo>
      <ItemDescription>
        <Role>{role}</Role>
        <CompanyName>{companyName}</CompanyName>
        <RoleDescription>
          {description}
        </RoleDescription>
        <WorkLink href={url} target='_blank'>{url}</WorkLink>
      </ItemDescription> 
    </ExperienceItemWrapper>
);

export default ExperienceItem;
