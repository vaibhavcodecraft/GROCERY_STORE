import React from 'react';
import { siteData } from '../data/siteData';
import { Hero } from '../components/sections/Hero';
import { CategoryCard } from '../components/shared/CategoryCard';
import { ProductCard } from '../components/shared/ProductCard';
import { Button } from '../components/ui/Button';
import { ShoppingBag, ChevronRight, Truck, Tag, Sparkles } from 'lucide-react';

const IconMap = {
  truck: Truck,
  tag: Tag,
  sparkles: Sparkles
};

export default function Home() {
  if (!siteData) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg text-gray-600">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      {siteData.hero && <Hero data={siteData.hero} />}

      {/* Features Section */}
      {siteData.features && (
        <section className="container mx-auto px-4 -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.features.map((feature, index) => {
              const Icon = IconMap[feature.icon] || ShoppingBag;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100">
                    <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Categories Section */}
      {siteData.categories && (
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <p className="text-gray-600 mt-2">Discover our wide range of products</p>
            </div>
            <Button variant="outline" 
              className="group flex items-center space-x-2 border-2 border-purple-200 hover:border-purple-400 rounded-full px-6 py-2 transition-all duration-300">
              <span className="text-gray-700">View All</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {siteData.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {/* Trending Products */}
      {siteData.trending && (
        <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
              <p className="text-gray-600 mt-2">Best selling products of the week</p>
            </div>
            <Button variant="outline" 
              className="group flex items-center space-x-2 border-2 border-purple-200 hover:border-purple-400 rounded-full px-6 py-2 transition-all duration-300">
              <span className="text-gray-700">View All</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Banners Section */}
      {siteData.banners && (
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.banners.map((banner) => (
              <div
                key={banner.id}
                className="relative rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* App Download Section */}
      {siteData.appDownload && (
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">{siteData.appDownload.title}</h2>
                <p className="text-gray-100 text-lg mb-10">{siteData.appDownload.description}</p>
                <div className="flex flex-col sm:flex-row gap-6">
                  {siteData.appDownload.playStore && (
                    <a
                      href={siteData.appDownload.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/20 backdrop-blur-lg hover:bg-black/30 px-6 py-3 rounded-xl flex items-center justify-center transition-colors duration-300"
                    >
                      <img
                        src="/api/placeholder/135/40"
                        alt="Get it on Google Play"
                        className="h-10"
                      />
                    </a>
                  )}
                  {siteData.appDownload.appStore && (
                    <a
                      href={siteData.appDownload.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/20 backdrop-blur-lg hover:bg-black/30 px-6 py-3 rounded-xl flex items-center justify-center transition-colors duration-300"
                    >
                      <img
                        src="/api/placeholder/120/40"
                        alt="Download on App Store"
                        className="h-10"
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="relative hidden md:block">
                {siteData.appDownload.image && (
                  <img
                    src={siteData.appDownload.image}
                    alt="Mobile App"
                    className="w-full max-w-sm mx-auto transform translate-y-8 hover:-translate-y-2 transition-transform duration-700"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}