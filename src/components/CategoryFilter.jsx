// src/components/CategoryFilter.js
export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
    const categories = ['All', 'Fruits', 'Vegetables'];
    
    return (
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }