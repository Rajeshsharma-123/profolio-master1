'use client';

import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function AddButton() {
  return (
    <Link href='/tool/create'>
      <Button size='sm' className='h-8'>
        <PlusCircle size={16} className='mr-2' />
        Add
      </Button>
    </Link>
  );
}
