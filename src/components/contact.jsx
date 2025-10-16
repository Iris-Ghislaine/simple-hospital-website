function Contact(){
    return(
       <section className="pt-25  min-h-screen">
  <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Contact Us</h2>
  <div className="text-center mb-8">
    <p className="text-gray-700">🏥 Baho Hospital, Kigali, Rwanda</p>
    <p className="text-gray-700">📞 +250 789 53 680</p>
    <p className="text-gray-700">📧 contact@baho.rw</p>
  </div>

  <form className="max-w-lg mx-auto bg-slate-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-green-900">Get in Touch</h3>
    <input 
      type="text" 
      placeholder="Your Name" 
      className="w-full mb-3 p-2 border rounded focus:outline-green-900"
    />
    <input 
      type="email" 
      placeholder="Your Email" 
      className="w-full mb-3 p-2 border rounded focus:outline-green-900"
    />
    <textarea 
      placeholder="Your Message" 
      className="w-full mb-3 p-2 border rounded h-28 focus:outline-green-900"
    ></textarea>
    <button className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-600 transition">
      Send Message
    </button>
  </form>
</section>

    )

}
export default Contact