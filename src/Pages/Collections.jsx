
import React, { useContext } from "react";
import { shopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';
import { 
  FunnelIcon,         // Correct name for filter icon
  ChevronDownIcon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Collections = () => {
  // Original state variables and context
  const { products } = useContext(shopContext);
  const [ShowFilter, setShowFilter] = React.useState(true);
  const [FilterProduct, setFilterProduct] = React.useState([]);
  const { search, showSeach } = useContext(shopContext);
  const [Category, setCategory] = React.useState([]);
  const [SubCategory, setSubCategory] = React.useState([]);
  const [SortType, setSortType] = React.useState("Relavent");

  // Original logic functions
  const CategoryCheck = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const subCategoryCheck = (e) => {
    if (SubCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  React.useEffect(() => {
    apply_Filter();
  }, [Category, SubCategory, search, showSeach]);

  const apply_Filter = () => {
    let ProductsCopy = products.slice();

    if (showSeach && search) {
      ProductsCopy = ProductsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (Category.length > 0) {
      ProductsCopy = ProductsCopy.filter(item => 
        Category.includes(item.category)
      );
    }

    if (SubCategory.length > 0) {
      ProductsCopy = ProductsCopy.filter(item => 
        SubCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(ProductsCopy);
  };

  const Sort = () => {
    let arr_sorted = FilterProduct.slice();
    if (SortType === "Sort By : Low to High") {
      setFilterProduct(arr_sorted.sort((a, b) => (a.price - b.price)));
    } else if (SortType === "Sort By : High to Low") {
      setFilterProduct(arr_sorted.sort((a, b) => (b.price - a.price)));
    } else {
      apply_Filter();
    }
  };

  React.useEffect(() => {
    Sort();
  }, [SortType]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 transition-all ${ShowFilter ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <FunnelIcon className="w-5 h-5 text-indigo-600" />
                  Filter Products
                </h2>
                <button
                  onClick={() => setShowFilter(false)}
                  className="lg:hidden p-1 hover:bg-gray-100 rounded-full"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase">Categories</h3>
                <div className="space-y-3">
                  {['Men', 'Women', 'Kids'].map((category) => (
                    <label
                      key={category}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={category}
                        onChange={CategoryCheck}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase">Subcategories</h3>
                <div className="space-y-3">
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((subcategory) => (
                    <label
                      key={subcategory}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={subcategory}
                        onChange={subCategoryCheck}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="text-gray-600">{subcategory}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilter(!ShowFilter)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FunnelIcon className="w-5 h-5" />
                  <span className="font-medium">Filters</span>
                </button>
                <Title text1={'Our '} text2={'Collections'} />
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative w-full sm:w-48">
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>Relavent</option>
                  <option>Sort By : Low to High</option>
                  <option>Sort By : High to Low</option>
                </select>
                <ChevronDownIcon className="h-5 w-5 absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {FilterProduct.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>

            {/* Empty State */}
            {FilterProduct.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;





