'use client';
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from '../../_components/container/PageContainer';
import DashboardCard from '../../_components/shared/DashboardCard';
import BlankCard from '../../_components/shared/BlankCard';
import Image from 'next/image';
import Link from 'next/link';
import { FolderIcon, HomeIcon } from '../../_components/tutorials/iconset/page';
import StyleTutorials from '../../_components/StyleTutorials';

export default function SchoolLevel() {
  return (
    <PageContainer title="Tutoriels" description="this is Tutoriels page">
      <StyleTutorials />
      <div className="flex items-center space-x-2 mb-6">
        <Link href={'/dashboard'}>
        <HomeIcon className="text-gray-400" />
        </Link>
        <span className="text-gray-500">/ Tutoriels</span>
      </div>
      <div className="space-y-4 ml-3">
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
            <Link href={'./College'}>Collège</Link>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FolderIcon className="text-yellow-400" />
          <span className="text-xl font-medium">
          <Link href={'./HighSchool'}>Lycée</Link>
          </span>
        </div>
      </div>

    </PageContainer>
  );
};

