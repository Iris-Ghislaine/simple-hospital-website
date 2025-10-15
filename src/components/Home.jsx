function Home() {
  return (
    <>
      <div className="mr-20 ml-30 p-20 flex justify-between">
        <div className="flex flex-col space-y-20">
          <h1 className=" text-xl pt-40">
            <span className="text-green-900 font-bold text-5xl">
              Baho Hospital,
            </span>
            <br /> we are committed to providing exceptional healthcare <br />
            with compassion, innovation, and expertise.
          </h1>
          <button className="rounded-full bg-green-900 hover:bg-green-700 text-white p-4 mx-auto mr-90">
            Book Appointment
          </button>
        </div>

        <img src="src/img/doctor.png" alt="doctors" className="w-150 h-150" />
        <div></div>
      </div>
    </>
  );
}
export default Home;
