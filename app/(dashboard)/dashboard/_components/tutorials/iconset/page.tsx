import Image from "next/image";

export function FolderIcon(props) {
    return (
      <Image 
      src={'/images/laboImages/tutoriels/icon/folder.png'}
      width={'34'} 
      height={'34'}
      alt={'img'}
      />
    )
}

export function FoldersIcon(props) {
  return (
    <Image 
    src={'/images/laboImages/tutoriels/icon/folders.png'}
    width={'34'} 
    height={'34'}
    alt={'img'}
    />
  )
}

import React from 'react';

export function fileTypeIcon(extension) {
  let iconPath = '';

  switch (extension) {
    case 'pdf':
      iconPath = '/images/laboImages/tutoriels/icon/pdf.png';
      break;
    case 'doc':
    case 'docx':
      iconPath = '/images/laboImages/tutoriels/icon/doc.png';
      break;
    case 'ppt':
      iconPath = '/images/laboImages/tutoriels/icon/ppt.png';
      break;
    case 'png':
    case 'jpg':
    case 'jpeg':
      iconPath = '/images/laboImages/tutoriels/icon/img.png';
      break;
    default:
      iconPath = '/images/laboImages/tutoriels/icon/img.png';
      break;
  }

  return (
    <Image 
      src={iconPath}
      width={34} 
      height={34}
      alt={'File icon'}
    />
  );
}

  
export function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  