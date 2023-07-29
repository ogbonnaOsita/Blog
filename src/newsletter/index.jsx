const Newsletter = () => {
  return (
    <div>
      <section id="newsletter" className="py-[80px] px-2 text-center ">
        <h2 className="text-xl my-2">Subscribe to our newsletter</h2>
        <p className="max-w-[80ch] mx-auto my-3 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          odio reiciendis earum nostrum a dolorum nulla omnis obcaecati,
          temporibus eveniet?
        </p>
        <div className="input-field mt-8">
          <input
            type="text"
            className="border py-2 px-5 focus:outline-gray-400"
            placeholder="Enter your email address"
          />
          <button className="bg-red-600 px-5 py-2 text-white">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
