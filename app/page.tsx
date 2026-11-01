import { ENV } from 'varlock/env';
import { profiles } from '@/content/home';

// Structured data: https://developers.google.com/search/docs/appearance/structured-data/profile-page
const profilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Marek Suscak',
    url: ENV.SITE_URL,
    jobTitle: 'Software Engineer',
    sameAs: Object.values(profiles),
  },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[780px] px-[1.0875rem] py-[1.45rem]">
      <script
        type="application/ld+json"
        // Escape `<` so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage).replace(/</g, '\\u003c') }}
      />

      <h1>Oh hi! 👋</h1>

      <p>
        I&apos;m <strong>Marek</strong>, a pragmatic software craftsman on his lifelong learning
        journey. By day I engineer software systems and build products, by night I engage in the
        local tech community as a speaker and a mentor. I enjoy reading books on computer science,
        productivity, building and marketing products and behavioral psychology.
      </p>

      <p>
        I started out as a full-stack developer but gradually narrowed down my focus to front-end
        which is where I excel. I have an eye for detail and deeply care about the user experience.
        I enjoy improving engineering processes and helping professionally younger colleagues get up
        to speed quickly.
      </p>

      <p>
        Thanks to perseverance and my genuine enthusiasm for the field of computer science, I gained
        a wealth of experience through working on a variety of projects spanning several industries.
        I am an extremely curious person who needs to understand the big picture before hastily
        solving the wrong problem. Last but not least I&apos;m a system thinking advocate.
      </p>

      <p>
        According to Meyers-Briggs personality test, I am a well-balanced ENFJ-T type which is said
        to be very rare forming only around 2% of the world population. My biggest strengths are
        empathy, charisma and strong self-reflection ability.
      </p>

      <p>
        <em>
          You can follow me on <a href={profiles.twitter}>Twitter</a>,{' '}
          <a href={profiles.github}>GitHub</a>, <a href={profiles.gitlab}>GitLab</a> or{' '}
          <a href={profiles.linkedin}>LinkedIn</a>
        </em>
      </p>
    </main>
  );
}
