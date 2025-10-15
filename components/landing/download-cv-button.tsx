'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

const DownloadCvForm = dynamic(
  () => import('@/components/landing/download-cv-form')
);

export default function DownloadCvButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Original download button that opens email form */}
      {/*
      <Button variant='outline' onClick={() => setOpen(true)}>
        Download CV
      </Button>
      <Modal
        title='Download CV'
        description='Fill in the form below and download link will be sent to your email.'
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <DownloadCvForm onClose={() => setOpen(false)} />
      </Modal>
      */}

      {/* New direct download button matching Button component style */}
      <a
        href='/resume.pdf' // Place your CV file in the public folder
        download
        className='inline-block px-6 py-2 rounded-lg font-semibold text-sm
                   bg-gray-900 text-white border border-gray-900
                   hover:bg-white hover:text-gray-900
                   dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100
                   dark:hover:bg-gray-900 dark:hover:text-white
                   transition-colors duration-200 ease-in-out'
      >
        Download CV
      </a>
    </>
  );
}
