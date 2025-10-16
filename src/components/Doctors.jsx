function Doctors() {
  return (
    <div className="pt-25 flex flex-col items-center">
  <h1 className="text-green-900 text-3xl font-bold">Our Doctors </h1>
  {/* first photo */}
  <div className=" flex flex-row justify-between gap-60">
    <div className="space-y-10 pt-20">
    <img src="src/img/ladydoctor.png" alt="lady doctor" className="w-100 h-100" />
    <h2 className="text-xl text-green-900 font-bold ml-30"> Dr. Annah Doors</h2>
  </div>
  <div className="pt-70 text-xl">
    <p>Dr. Annah is passionate about children’s health and development. <br />
         She provides gentle, expert care for infants, children, and teenagers, <br />
          ensuring every child grows strong and healthy in a caring environment.</p>
  </div>
  </div>
    {/* second photo */}
    <div className=" flex flex-row justify-between gap-60">
    <div className="space-y-10 pt-20">
    <img src="src/img/mandoctor.png" alt="lady doctor" className="w-100 h-100" />
    <h2 className="text-xl text-green-900 font-bold ml-30"> Dr. Michal Williams</h2>
  </div>
  <div className="pt-70 text-xl">
    <p>Dr. John specializes in diagnosing and treating heart-related conditions.<br />
      He is dedicated to providing compassionate care, advanced treatments, <br />
      and preventive guidance to help patients maintain a strong and healthy heart.</p>
  </div>
  </div>
    </div>
  );
}
export default Doctors;
