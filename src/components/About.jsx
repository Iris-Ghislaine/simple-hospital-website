function About() {
  return (
    <div className="flex flex-col gap-20 items-center p-20">
      <div className="shadow-xl rounded-lg bg-gray-100 p-20 flex justify-between gap-60">
        <h1 className="text-green-900 text-2xl font-bold">
          About Baho Hospital
        </h1>
        <p>
          Baho Hospital Founded in 2005, <br />
           has served the community for over 15
          <br />
          years, offering trusted, quality healthcare. <br />
           Our mission is to provide
          <br />
          affordable, accessible, and patient-centered <br />
           services using modern medical technology.
        </p>
      </div>
      <div className="shadow-xl rounded-lg bg-gray-100 p-18 flex flex-row gap-70">
        <h1 className="text-green-900 text-2xl font-bold">Why Choose Us</h1>
      <ul className="space-y-4 text-lg text-gray-700">
  <li className="flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6 text-green-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0M12 10.5v3m0 0h3m-3 0h-3"
      />
    </svg>
    Experienced and caring doctors
  </li>

  <li className="flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6 text-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6m13.5 0a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
      />
    </svg>
    24/7 Emergency Services
  </li>

  <li className="flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.5a.75.75 0 011.5 0v17a.75.75 0 01-1.5 0v-17zM5.25 8.75a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H5.25z"
      />
    </svg>
    Modern medical equipment
  </li>

  <li className="flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6 text-pink-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
      />
    </svg>
    Compassionate patient care
  </li>
</ul>

      </div>
    </div>
  );
}
export default About;
