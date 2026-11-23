import { notFound } from 'next/navigation';

/** Unknown paths inside a locale render the localized not-found page within the site layout. */
export default function CatchAll() {
  notFound();
}
