import Image from 'next/image';

const Text1 = "HorizontalLoop"
const Text2 = "image"
const Idx = 10;


export default function Home() {

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-20">

        <div className="flex flex-col gap-10">
          <div className='grid grid-cols-2 gap-4'>
            <p>With image tag</p>
            <p>Without image tag</p>
          </div>
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

              <img
                src={`/test/${Text2}${index + 1}.jpg`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}