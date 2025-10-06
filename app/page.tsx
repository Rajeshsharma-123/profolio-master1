import { WebPage, WithContext } from 'schema-dts';

import Nav from '@/components/landing/nav';
import Tool from '@/components/landing/tool';
import Footer from '@/components/main/footer';
import About from '@/components/landing/about';
import getInformation from '@/data/information';
import Header from '@/components/landing/header';
import Contact from '@/components/landing/contact';
import { ModeToggle } from '@/components/mode-toggle';
import Expertise from '@/components/landing/expertise';
import Portfolio from '@/components/landing/portfolio';
import Experience from '@/components/landing/experience';
import Qualification from '@/components/landing/qualification';

export default async function HomePage() {
  // get information
  const {
    about,
    frontend,
    backend,
    seooptimization,
    webdevelopment,
    contentcreation,
    education,
    experience,
    portfolioWithTags,
    miscellaneous,
    tool
  } = await getInformation();

  // create JSON-LD
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': process.env.AUTH_URL,
    name: 'Rajesh',
    alternateName: 'Rajesh Rajesh',
    url: process.env.AUTH_URL,
    image: {
      '@type': 'ImageObject',
      '@id': process.env.AUTH_URL + '/Rajesh.png',
      url: process.env.AUTH_URL + '/Rajesh.png',
      contentUrl: process.env.AUTH_URL + '/Rajesh.png',
      width: {
        '@type': 'QuantitativeValue',
        value: 512
      },
      height: {
        '@type': 'QuantitativeValue',
        value: 512
      }
    },
    description:
      'Rajesh is an enthusiastic and passionate web developer based in Malaysia with more than half a decade of experience dedicated to deliver top-notch solutions and facilitate project success.',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': process.env.AUTH_URL,
      url: process.env.AUTH_URL,
      name: 'Rajesh',
      description:
        'Rajesh is an enthusiastic and passionate web developer based in Malaysia with more than half a decade of experience dedicated to deliver top-notch solutions and facilitate project success.',
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Person',
        name: 'Rajesh',
        url: process.env.AUTH_URL,
        sameAs: [
          miscellaneous
            ? miscellaneous.facebookUrl
            : 'https://www.facebook.com/myRajesh',
          miscellaneous
            ? miscellaneous.twitterUrl
            : 'https://twitter.com/myRajesh',
          miscellaneous
            ? miscellaneous.linkedinUrl
            : 'https://www.linkedin.com/in/Rajesh-Rajesh',
          miscellaneous
            ? miscellaneous.githubUrl
            : 'https://github.com/Rajesh-my',
          miscellaneous
            ? miscellaneous.instagramUrl
            : 'https://www.instagram.com/Rajesh.my'
        ],
        image: {
          '@type': 'ImageObject',
          '@id': process.env.AUTH_URL + '/Rajesh.png',
          url: process.env.AUTH_URL + '/Rajesh.png',
          contentUrl: process.env.AUTH_URL + '/Rajesh.png',
          width: {
            '@type': 'QuantitativeValue',
            value: 512
          },
          height: {
            '@type': 'QuantitativeValue',
            value: 512
          }
        }
      }
    },
    about: {
      '@type': 'Person',
      name: 'Rajesh',
      url: process.env.AUTH_URL,
      sameAs: [
        miscellaneous
          ? miscellaneous.facebookUrl
          : 'https://www.facebook.com/myRajesh',
        miscellaneous
          ? miscellaneous.twitterUrl
          : 'https://twitter.com/myRajesh',
        miscellaneous
          ? miscellaneous.linkedinUrl
          : 'https://www.linkedin.com/in/Rajesh-Rajesh',
        miscellaneous
          ? miscellaneous.githubUrl
          : 'https://github.com/Rajesh-my',
        miscellaneous
          ? miscellaneous.instagramUrl
          : 'https://www.instagram.com/Rajesh.my'
      ],
      image: {
        '@type': 'ImageObject',
        '@id': process.env.AUTH_URL + '/Rajesh.png',
        url: process.env.AUTH_URL + '/Rajesh.png',
        contentUrl: process.env.AUTH_URL + '/Rajesh.png',
        width: {
          '@type': 'QuantitativeValue',
          value: 512
        },
        height: {
          '@type': 'QuantitativeValue',
          value: 512
        }
      }
    }
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='sticky z-30 top-5 w-full flex justify-end px-5'>
        <ModeToggle />
      </div>
      <Nav />
      <main className='container px-4 md:px-8 mx-auto relative -mt-14 overflow-x-hidden'>
        <Header miscellaneous={miscellaneous} />
        <About about={about} />
        <Experience frontend={frontend} backend={backend} />
        <Expertise
          seooptimization={seooptimization}
          webdevelopment={webdevelopment}
          contentcreation={contentcreation}
        />
        <Qualification education={education} experience={experience} />
        <Portfolio portfolioWithTags={portfolioWithTags} />
        <Tool tool={tool} />
        <Contact miscellaneous={miscellaneous} />
      </main>
      <Footer miscellaneous={miscellaneous} />
    </>
  );
}
