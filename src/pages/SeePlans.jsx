import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Whole Life Assurance",
    description: "Lifelong protection with guaranteed sum assured and bonuses. Premiums for life or limited term.",
    image: "https://images.unsplash.com/photo-1588776814546-ec1aa6e942f1?fit=crop&w=800&q=80",
  },
  {
    title: "Endowment Assurance",
    description: "Pays on death or maturity. A smart savings plan with built-in life insurance cover.",
    image: "https://images.unsplash.com/photo-1588776814606-17f82f625d57?fit=crop&w=800&q=80",
  },
  {
    title: "Child Education & Marriage Assurance",
    description: "Ensure your child’s education or marriage needs are met with guaranteed funds and protection.",
    image: "https://images.unsplash.com/photo-1581579185169-86350bb433bd?fit=crop&w=800&q=80",
  },
  // Add more as needed...
];

const SeePlans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-20 text-blue-900">
        ✨ Discover the Perfect Plan for You
      </h1>

      <div className="space-y-24 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-10 bg-white/20 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-xl`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full lg:w-1/2 h-80 object-cover rounded-xl shadow-md"
            />

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">{plan.title}</h2>
              <p className="text-gray-700 text-lg">{plan.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:bg-blue-800 transition"
              >
                Learn More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-24 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="bg-gradient-to-r from-pink-600 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition">
          💬 Talk to an Advisor
        </button>
      </motion.div>
    </div>
  );
};

export default SeePlans;
