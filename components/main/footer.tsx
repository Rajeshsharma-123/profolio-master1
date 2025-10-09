'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import type { Miscellaneous } from '@prisma/client';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import LazyMotionLayout from '@/components/ui/lazy-motion';
import { slideInFromLeft, slideInFromRight } from '@/lib/motion';

interface FooterProps {
  miscellaneous: Miscellaneous | null;
}

export default function Footer({ miscellaneous }: FooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotionLayout>
      <m.footer
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        id='footer'
        className='mt-32 bg-primary overflow-x-hidden'
      >
        <div className='container px-4 md:px-8 mx-auto w-full flex flex-col py-12'>
          <m.div
            variants={slideInFromLeft(0.2)}
            className='flex justify-center'
          >
            <Link href='/#home' title='Rajesh'>
              <Button
                variant='link'
                className='text-primary-foreground text-4xl font-medium uppercase'
              >
                Rajesh
              </Button>
            </Link>
          </m.div>
          <m.ul
            variants={slideInFromRight(0.3)}
            className='w-full max-w-3xl mx-auto flex flex-col items-center md:flex-row justify-between mt-8'
          >
            <li>
              <Link href='/#home' title='Home'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#about' title='About'>
                <Button variant='ghost' className='text-primary-foreground'>
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#experience' title='Experience'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Experience
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#expertise' title='Expertise'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Expertise
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#qualification' title='Qualification'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Qualification
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#portfolio' title='Portfolio'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Portfolio
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#tool' title='Tool'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Tool
                </Button>
              </Link>
            </li>
            <li>
              <Link href='/#contact' title='Contact'>
                <Button variant='ghost' className='text-primary-foreground'>
                  Contact
                </Button>
              </Link>
            </li>
          </m.ul>
          <m.div
            variants={slideInFromLeft(0.4)}
            className='flex justify-center gap-4 mt-8'
          >
            <Link
              href={`${miscellaneous ? miscellaneous.facebookUrl : '#'}`}
              aria-label='Facebook'
              target='_blank'
              title='Facebook'
              rel='noopener noreferrer'
            >
              <Button variant='secondary' size='icon'>
                <Facebook className='w-5 h-5' />
              </Button>
            </Link>
            <Link
              href={`${miscellaneous ? miscellaneous.instagramUrl : '#'}`}
              aria-label='Instagram'
              target='_blank'
              title='Instagram'
              rel='noopener noreferrer'
            >
              <Button variant='secondary' size='icon'>
                <Instagram className='w-5 h-5' />
              </Button>
            </Link>
            <Link
              href={`${miscellaneous ? miscellaneous.twitterUrl : '#'}`}
              aria-label='Twitter'
              target='_blank'
              title='Twitter'
              rel='noopener noreferrer'
            >
              <Button variant='secondary' size='icon'>
                <Twitter className='w-5 h-5' />
              </Button>
            </Link>
            <Link
              href={`${miscellaneous ? miscellaneous.linkedinUrl : '#'}`}
              aria-label='LinkedIn'
              target='_blank'
              title='LinkedIn'
              rel='noopener noreferrer'
            >
              <Button variant='secondary' size='icon'>
                <Linkedin className='w-5 h-5' />
              </Button>
            </Link>
          </m.div>
          <m.div
            variants={slideInFromRight(0.5)}
            className='flex flex-col md:flex-row justify-center items-center mt-9 gap-4'
          >
            <Link
              href='/privacy-policy'
              className='text-primary-foreground text-xs'
              title='Privacy Policy'
            >
              <Button variant='outline' className='h-6 w-[146px]'>
                Privacy Policy
              </Button>
            </Link>
            <Link
              href='/terms-and-conditions'
              className='text-primary-foreground text-xs'
              title='Terms & Conditions'
            >
              <Button variant='outline' className='h-6 w-[146px]'>
                Terms & Conditions
              </Button>
            </Link>
          </m.div>
          <m.div
            variants={slideInFromLeft(0.6)}
            className='flex justify-center mt-8 mb-16'
          >
            <small className='text-muted'>
              Created by
              <Link
                href='https://www.linkedin.com/in/rajesh-vishwakarma-0b7a7630b/'
                target='_blank'
                rel='noopener noreferrer'
                title='LinkedIn'
              >
                <Button variant='link' className='text-muted text-xs px-1'>
                  Rajesh
                </Button>
              </Link>
              &copy; {new Date().getFullYear()}.
            </small>
          </m.div>
        </div>
      </m.footer>
    </LazyMotionLayout>
  );
}