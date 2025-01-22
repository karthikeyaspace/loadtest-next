'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';


const Text1 = "HorizontalLoop"
const Text2 = "image"
const Idx = 10;


export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-start items-center">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-gray-200">
              Home
            </Button>
          </Link>
            <Link href="/shad">
              <Button variant="ghost" className="text-white hover:text-gray-200">
                Shadcn
              </Button>
            </Link>
            <Link href="/hybrid">
              <Button variant="ghost" className="text-white hover:text-gray-200">
                Hybrid
              </Button>
            </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-12">

        <div className="flex flex-col gap-10">
          {Array.from({ length: Idx }, (_, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4"
            >
              <Image
                width={800}
                height={600}
                src={`/test/${Text1}${index + 1}.jpg`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                width={800}
                height={600}
                src={`/test/${Text2}${index + 1}.jpg`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}