function Services(){
    return(
       <section className="pt-25 bg-slate-50 min-h-screen mr-30 ml-30">
  <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-7">
    <div className="shadow-xl rounded-lg bg-gray-100 p-20 text-center">
      <span className="text-4xl">🚑</span>
      <h3 className="font-semibold text-xl mt-2 mb-2">Emergency Care</h3>
      <p className="text-green-600">24/7 emergency support with quick response time.</p>
    </div>
    <div className="shadow-xl rounded-lg bg-gray-100 p-20 text-center">
      <span className="text-4xl">🩻</span>
      <h3 className="font-semibold text-xl mt-2 mb-2">Surgery</h3>
      <p className="text-green-600">Advanced surgical procedures with expert surgeons.</p>
    </div>
    <div className="shadow-xl rounded-lg bg-gray-100 p-20 text-center">
      <span className="text-4xl">💊</span>
      <h3 className="font-semibold text-xl mt-2 mb-2">Pharmacy</h3>
      <p className="text-green-600">Fully stocked pharmacy for prescriptions and wellness.</p>
    </div>
    <div className="shadow-xl rounded-lg bg-gray-100 p-20 text-center">
      <span className="text-4xl">🤰</span>
      <h3 className="font-semibold text-xl mt-2 mb-2">Maternity</h3>
      <p className="text-green-600">Quality care for mothers and newborns.</p>
    </div>
  </div>
</section>

    )

}
export default Services