const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      {/* Project 1 */}
      <div className="lg:justify-center mb-8 flex flex-wrap">
        <div className="w-full lg:w-1/4">
          <img src="" width={250} height={250} className="mb-6 rounded" />
        </div>

        <div className="w-full max-w-xl lg:w-3/4">
          <h3 className="mb-2 font-semibold text-2xl">CinemaNex</h3>
          <p className="mb-4 text-stone-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            dolorem necessitatibus, beatae aspernatur repudiandae ex tempora
            velit perspiciatis consequatur accusantium?
          </p>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
        </div>
      </div>

      {/* project 2 */}
      <div className="lg:justify-center mb-8 flex flex-wrap">
        <div className="w-full lg:w-1/4">
          <img src="" width={250} height={250} className="mb-6 rounded" />
        </div>

        <div className="w-full max-w-xl lg:w-3/4">
          <h3 className="mb-2 font-semibold text-2xl">FaceBook ChatApp</h3>
          <p className="mb-4 text-stone-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            dolorem necessitatibus, beatae aspernatur repudiandae ex tempora
            velit perspiciatis consequatur accusantium?
          </p>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
          <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
            HTML
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
