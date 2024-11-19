// src/components/sections/Hero.jsx
import { Button } from "../ui/Button"; // Use curly braces for named import

export const Hero = ({ data }) => {
  return (
    <section className="relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-dots"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">
            {data.title}
            <span className="block text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              {data.subtitle}
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-100">{data.description}</p>
          <Button variant="secondary">{data.cta}</Button>
        </div>
      </div>
    </section>
  );
};
