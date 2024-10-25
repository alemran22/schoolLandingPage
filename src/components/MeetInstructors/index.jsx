import jhonMark from "../../assets/images/instructors/unsplash_3JmfENcL24M.png";
import laraShorf from "../../assets/images/instructors/unsplash_5n3JP9WAJTs.png";
import zengChin from "../../assets/images/instructors/unsplash_sx1x4lXBrqc.png";

const Instructors = () => {
  return (
    <section className="max-w-7xl md:m-4 lg:mx-auto mb-6 lg:mb-48 p-4 md:p-0">
      {/* heading */}
      <div className="flex justify-between items-center lg:items-start gap-3 lg:gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-semibold text-base md:text-3xl text-gary_text">
          Meet our instructors
        </h1>
      </div>
      {/* container for desktop*/}
      <main className="hidden lg:flex flex-row gap-8">
        {/* card 1 */}
        <section className="w-full md:w-4/12  space-y-9 p-2 md:p-12 shadow-black/10 shadow-2xl">
          {/* profile */}
          <div className="flex flex-col items-center gap-2">
            <figure>
              <img src={jhonMark} alt="" />
            </figure>
            {/* name and designation */}

            <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
              Jhon Mark
            </h1>
            <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
              Senior Developer
            </p>
          </div>
          {/* comment section */}
          <article>
            <p className="text-center font-Open_Sans text-xs lg:text-lg">
              “Education will be for you what you want it to be”
            </p>
          </article>
        </section>

        {/* card 2 */}
        <section className="w-full md:w-4/12  space-y-9 p-2 md:p-12 shadow-black/10 shadow-2xl">
          {/* profile */}
          <div className="flex flex-col items-center gap-2">
            <figure>
              <img src={laraShorf} alt="" />
            </figure>
            {/* name and designation */}

            <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
              Lora Shrof
            </h1>
            <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
              Marketing Lead
            </p>
          </div>
          {/* comment section */}
          <article>
            <p className="text-center font-Open_Sans text-xs lg:text-lg">
              “Knowledge has to be improved, challenged, and increased
              constantly, or it vanishes”
            </p>
          </article>
        </section>

        {/* card 3 */}
        <section className="w-full md:w-4/12  space-y-9 p-2 md:p-12 shadow-black/10 shadow-2xl">
          {/* profile */}
          <div className="flex flex-col items-center gap-2">
            <figure>
              <img src={zengChin} alt="" />
            </figure>
            {/* name and designation */}

            <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
              Zeng Chin
            </h1>
            <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
              Data Analist at Meta
            </p>
          </div>
          {/* comment section */}
          <article>
            <p className="text-center font-Open_Sans text-xs lg:text-lg">
              “To know that we know what we know, and to know that we do not
              know what we do not know, that is true knowledge”
            </p>
          </article>
        </section>
      </main>

      {/* container for mobile*/}
      <main className="lg:hidden flex flex-col gap-8">
        <section className="flex gap-3">
          {/* card 1 */}
          <section className="w-6/12  space-y-5 p-2 shadow-black/10 shadow-2xl">
            {/* profile */}
            <div className="flex flex-col items-center gap-2">
              <figure className="w-12 h-12">
                <img src={jhonMark} alt="" />
              </figure>
              {/* name and designation */}

              <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
                Jhon Mark
              </h1>
              <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
                Senior Developer
              </p>
            </div>
            {/* comment section */}
            <article>
              <p className="text-center font-Open_Sans text-xs lg:text-lg">
                “Education will be for you what you want it to be”
              </p>
            </article>
          </section>

          {/* card 2 */}
          <section className="w-6/12    space-y-5 p-2 shadow-black/10 shadow-2xl">
            {/* profile */}
            <div className="flex flex-col items-center gap-2">
              <figure className="w-12 h-12">
                <img src={laraShorf} alt="" />
              </figure>
              {/* name and designation */}

              <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
                Lora Shrof
              </h1>
              <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
                Marketing Lead
              </p>
            </div>
            {/* comment section */}
            <article>
              <p className="text-center font-Open_Sans text-xs lg:text-lg">
                “Knowledge has to be improved, challenged, and increased
                constantly, or it vanishes”
              </p>
            </article>
          </section>
        </section>
        <div className="flex justify-center">
          {/* card 3 */}
          <section className="w-6/12  space-y-5 p-2 shadow-black/10 shadow-2xl">
            {/* profile */}
            <div className="flex flex-col items-center gap-2">
              <figure className="w-12 h-12">
                <img src={zengChin} alt="" />
              </figure>
              {/* name and designation */}

              <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
                Zeng Chin
              </h1>
              <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
                Data Analist at Meta
              </p>
            </div>
            {/* comment section */}
            <article>
              <p className="text-center font-Open_Sans text-xs lg:text-lg">
                “To know that we know what we know, and to know that we do not
                know what we do not know, that is true knowledge”
              </p>
            </article>
          </section>
        </div>
      </main>
    </section>
  );
};

export default Instructors;
