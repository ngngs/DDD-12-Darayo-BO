import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/festivals');
  return null;
} 