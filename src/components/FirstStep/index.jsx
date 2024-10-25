import studentImg from "../../assets/images/firststep/image (38).png";

const FirstStep = () => {
  return (
    <section className="bg-first-step-bg1 bg-no-repeat bg-cover bg-center  ">
      <section className="bg-first-step-bg2 bg-repeat-x bg-cover bg-center">
        <section className="bg-modified_blue/75">
          {/* for mobile */}
          <section className="lg:hidden flex flex-col items-center  space-y-8 py-12 px-4 ">
            <h1 className="text-center font-Open_Sans font-bold text-2xl text-white">
              You don’t have to see the whole staircase just take the first step
            </h1>
            <p className="text-center font-Open_Sans font-normal text-base text-white">
              You don’t have to see the whole staircase just take the first step
            </p>
            <div className="pt-12 flex justify-center items-center gap-2">
              <button className="bg-green rounded-md font-Source_Code_Pro text-white font-semibold p-3">
                <a href="#">Get Started</a>
              </button>
              <button className="bg-white border border-green rounded-md font-Source_Code_Pro text-green font-semibold p-3">
                <a href="#">Place a call</a>
              </button>
            </div>
          </section>
          {/* for desktop */}
          {/* container   */}
          <main className="max-w-7xl mx-auto  h-[532px] py-20 hidden lg:flex gap-5">
            {/* left section */}
            <aside className="w-6/12 relative">
              <img src={studentImg} alt="" className="absolute -top-[40%]" />
            </aside>
            {/* right section section */}
            <section className="w-6/12 space-y-8">
              <h1 className="font-Open_Sans font-bold text-5xl text-white">
                You don’t have to see the whole staircase just take the first
                step
              </h1>
              <p className="font-Open_Sans font-normal text-2xl text-white">
                You don’t have to see the whole staircase just take the first
                step
              </p>
              <div className="pt-16 flex gap-8">
                <button className="bg-green hover:bg-white rounded-md font-Source_Code_Pro text-white hover:text-green border border-green font-semibold py-4 px-6">
                  <a href="#">Get Started</a>
                </button>
                <button className="bg-white border border-green rounded-md font-Source_Code_Pro text-green font-semibold py-4 px-6">
                  <a href="#">Place a call</a>
                </button>
              </div>
            </section>
          </main>
        </section>
      </section>
    </section>
  );
};

export default FirstStep;
