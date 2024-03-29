"use client";
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from '../../_components/container/PageContainer';
import DashboardCard from '../../_components/shared/DashboardCard';
import BlankCard from '../../_components/shared/BlankCard';
import Image from 'next/image';
import Link from 'next/link';
import StyleTutorials from '../../_components/StyleTutorials';

import { FolderIcon, HomeIcon } from '../../_components/tutorials/iconset/page';

export default function SchoolLevel() {
  let Owlaac = './College/OwlaacBiof';
  let Taniac = './College/TaniacBiof';
  let Talitaac = './College/TalitaacBiof';
  return (
    <PageContainer title="Tutoriels | college" description="this is Tutoriels page" keywords={'its work'}>
      <StyleTutorials />
      <div className="flex items-center space-x-2 mb-6">
        <Link href={'/dashboard'}>
        <HomeIcon className="text-gray-400" />
        </Link>
        <Link href={'./SchoolLevel'}>
        <span className="text-gray-500">/ Tutoriels</span>
        </Link>
        <span className="text-gray-500">/ Collège</span>
      </div>
      <div className="space-y-4 ml-3">
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
            <Link href={Owlaac}>1AC BIOF</Link>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
          <Link href={Taniac}>2AC BIOF</Link>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
          <Link href={Talitaac}>3AC BIOF</Link>
          </span>
        </div>
      </div>
    </PageContainer>
  );
};
