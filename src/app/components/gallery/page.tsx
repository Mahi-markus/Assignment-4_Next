import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-2 mb-8">
      {/* Main Image */}
      <div className="h-[400px] w-[1200px] overflow-hidden p-2">
        <Image
          src="/res1.jpg"
          alt="Main Image"
          layout="responsive"
          width={1200}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="relative overflow-hidden rounded-lg p-2">
          <Image
            src="/res1.jpg"
            alt="Thumbnail 1"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg p-2">
          <Image
            src="/res1.jpg"
            alt="Thumbnail 2"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg p-2">
          <Image
            src="/res1.jpg"
            alt="Thumbnail 3"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg p-2">
          <Image
            src="/res1.jpg"
            alt="Thumbnail 4"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
