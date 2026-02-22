const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src="https://www.shutterstock.com/image-photo/black-white-photo-profile-portrait-600nw-2654094513.jpg"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mt-10 flex flex-col items-center lg:items-start">
            <h2 className="pb-2 text-4xl tracking-tighter text-nowrap lg:text-8xl">
              Sandhya Pandey
            </h2>
            <span className="bg-linear-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              React Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              similique fugiat amet aut assumenda provident totam, voluptas
              expedita officia ratione voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
