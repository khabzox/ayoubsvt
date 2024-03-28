'use client';
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from '../../_components/container/PageContainer';
import DashboardCard from '../../_components/shared/DashboardCard';
import BlankCard from '../../_components/shared/BlankCard';
import Image from 'next/image';
import Link from 'next/link';
import { FolderIcon, HomeIcon } from '../../_components/tutorials/iconset/page';

export default function SchoolLevel() {
    return (
        <PageContainer title="Tutoriels" description="this is Tutoriels page">
            <h1 className='image-text text-6xl font-bold mb-8'>
                <Link className="" href="../../index.html">
                    Tutoriels
                </Link>
            </h1>
            {/* <h1 className="text-6xl font-bold text-purple-600 mb-8">AyoubSVT</h1> */}
            <div className="flex items-center space-x-2 mb-6">
                <Link href={'/'}>
                    <HomeIcon className="text-gray-400" />
                </Link>
                <Link href={'./SchoolLevel'}>
                    <span className="text-gray-500">/ Niveau Scolaire</span>
                </Link>
                <span className="text-gray-500">/ Lycée</span>
            </div>
            <div className="space-y-4">

                <div className="flex items-center space-x-3">
                    <FolderIcon />
                    <span className="text-xl font-bold">
                        Tronc Commun
                    </span>
                </div>

                <div className="flex items-center space-x-3 ml-3">
                    <FolderIcon />
                    <span className="text-xl font-medium">
                        <Link href={'./College'}>Sciences Française</Link>
                    </span>
                </div>

                <div className="flex items-center space-x-3">
                    <FolderIcon />
                    <span className="text-xl font-bold">
                        1ère Bac
                    </span>
                </div>

                <div className="flex items-center space-x-3 ml-3">
                    <FolderIcon />
                    <span className="text-xl font-medium">
                        <Link href={'./College'}>Sciences Mathématiques</Link>
                    </span>
                </div>

                <div className="flex items-center space-x-3 ml-3">
                    <FolderIcon />
                    <span className="text-xl font-medium">
                        <Link href={'./College'}>Sciences Expérimentales</Link>
                    </span>
                </div>

                <div className="flex items-center space-x-3">
                    <FolderIcon />
                    <span className="text-xl font-bold">
                        2ème Bac
                    </span>
                </div>

                <div className="flex items-center space-x-3 ml-3">
                    <FolderIcon />
                    <span className="text-xl font-medium">
                        <Link href={'./College'}>Sciences Mathématiques A</Link>
                    </span>
                </div>

                <div className="flex items-center space-x-3 ml-3">
                    <FolderIcon />
                    <span className="text-xl font-medium">
                        <Link href={'./College'}>Sciences Physiques</Link>
                    </span>
                </div>

                <div className="flex items-center space-x-3 ml-3">
                    <FolderIcon />
                    <span className="text-xl font-medium">
                        <Link href={'./College'}>Sciences des SVT</Link>
                    </span>
                </div>

            </div>

        </PageContainer>
    );
};

