import Link from 'next/link';
import { PanelTop } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface ViewWebsiteProps {
  newTab?: boolean;
}

export function ViewWebsite({ newTab = false }: ViewWebsiteProps) {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link
            href='/'
            scroll={false}
            target={`${!newTab ? '_blank' : '_self'}`}
            rel='noopener noreferer'
          >
            <Button
              variant='outline'
              size='icon'
              className='h-8 w-8 rounded-full bg-background'
            >
              <PanelTop className='w-5 h-5' />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side='bottom'>View Website</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}