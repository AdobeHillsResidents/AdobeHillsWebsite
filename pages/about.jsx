import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-stone-800 transition hover:text-blue-500 dark:text-stone-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-stone-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Adobe Hills Residents</title>
        <meta
          name="description"
          content="Adobe Hills Community"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-lime-100 object-cover dark:bg-lime-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-100 sm:text-5xl">
            Welcome to Adobe Hills!
            </h1>
            <div className="mt-6 space-y-7 text-base text-stone-600 dark:text-stone-400">
              <p>
              For current and prospective residents of the Adobe Hills community in Fremont, CA.
              <br/>
              This website is created and maintained by Adobe Hills Residents.
              </p>
              <div class="col-10" id="content-pane">
                <div class="row">
                    <div class="col">
                        <div id="stream-image"></div>
                        <p>Welcome to the Adobe Hills Residents web page! This is the online hub for our vibrant community of homeowners, renters, and neighbors. Here, you can find information about upcoming events, community updates, and important announcements.
                        </p>
                        <p>We believe that Adobe Hills is more than just a place to live, it's a community. Our goal is to foster a sense of belonging and togetherness among all residents, and this web page is just one way we do that.
                        </p> 
                            
                        <p>We encourage you to explore the various sections of the site, including the calendar of events, the photo gallery, and the forum where you can connect with other residents. We also welcome your feedback and suggestions for how we can improve this page and make it even more useful for everyone.
                        </p>
                            
                        <p>Thank you for being a part of the Adobe Hills community. We hope that this web page helps you feel more connected and engaged with your neighbors and your neighborhood.</p>
                        <p><em>We are located (<a href="https://www.google.com/maps/place/Adobe+Hills/@37.557919,-121.9722004,17z/data=!4m10!1m2!2m1!1sAdobe+Hills+HOA!3m6!1s0x808fc08cb3e54de3:0x917da82d00a42df1!8m2!3d37.5588607!4d-121.9704284!15sCg9BZG9iZSBIaWxscyBIT0GSARNjb25kb21pbml1bV9jb21wbGV44AEA!16s%2Fg%2F11gzn13km?hl=en" target="map" rel="noopener noreferrer">Google Maps link</a>) Close to the intersection of Guardino Drive and Walnut Avenue.</em></p>
                        <p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.878808327537!2d-121.97220042039893!3d37.55791899346378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc08cb3e54de3%3A0x917da82d00a42df1!2sAdobe%20Hills!5e0!3m2!1sen!2sus!4v1678770250998!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       </p>
                        <p>The <a href="http://www.bart.gov" target="bart" rel="noopener noreferrer">Fremont BART station</a> is less than one mile away, and we are within walking distance of the park and recreational facilities of Fremont's <a href="http://www.ci.fremont.ca.us/Recreation/CentralPark/default.htm" target="cp" rel="noopener noreferrer">Central Park and Lake Elizabeth</a>. The <a href="http://www.ci.fremont.ca.us/Recreation/Tennis/default.htm" target="ten" rel="noopener noreferrer">Fremont Tennis Center</a> is just 2 blocks away, and the <a href="http://www.fremontgolf.com" target="golf" rel="noopener noreferrer">Golf Club at Fremont Park</a> is about a half-mile away. In addition, the <a href="http://www.aclibrary.org/branches/frm/fremonthome.asp" target="lib" rel="noopener noreferrer">Alameda County Library</a> is just a few minutes away by car or walking, while the <a href="http://www.thefremonthub.com" target="hub" rel="noopener noreferrer">Fremont Hub Shopping Center</a> is about 2 miles away. Major freeways I-880 and I-680 are also just a few minutes away. Last but not least, the <a href="http://www.goaquaadventure.com/" target="goaa" rel="noopener noreferrer">Fremont Aqua Adventure</a> has recently opened.</p>
                        </div>
                        <p>Here is a <a href="" target="map" rel="noopener noreferrer">map of the complex</a> that has building numbers.</p>
                    </div>
                </div>
                
            </div>
            </div>
          </div>
          {/* <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Facebook
              </SocialLink>
            </ul>
          </div> */}
      </Container>
    </>
  )
}
