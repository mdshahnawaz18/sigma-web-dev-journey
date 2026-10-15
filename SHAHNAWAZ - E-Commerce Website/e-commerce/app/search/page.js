"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchPage() {

    const searchParams = useSearchParams();

    // =====================================================
    // SEARCH QUERY
    // Example: /search?q=Samsung
    // =====================================================

    const query = searchParams.get("q") || "";

    const [products, setProducts] = useState([]);

    // =====================================================
    // FILTER STATES
    // =====================================================

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");

    // =====================================================
    // SORT STATE
    // =====================================================

    const [sort, setSort] = useState("");

    // =====================================================
    // FETCH PRODUCTS
    // =====================================================

    useEffect(() => {

        const fetchProducts = async () => {

            const res = await fetch("/api/products");

            const data = await res.json();

            setProducts(data);

        };

        fetchProducts();

    }, []);

    // =====================================================
    // UNIQUE BRANDS
    // =====================================================

    const brands = [
        ...new Set(
            products
                .map(product => product.brand)
                .filter(Boolean)
        )
    ];

    // =====================================================
    // UNIQUE CATEGORIES
    // =====================================================

    const categories = [
        ...new Set(
            products
                .map(product => product.category)
                .filter(Boolean)
        )
    ];

    // =====================================================
    // SEARCH + FILTER
    // =====================================================

    const filteredProducts = products

        // PRODUCT NAME SEARCH
        .filter(product =>
            (product.name || "")
                .toLowerCase()
                .includes(query.toLowerCase())
        )

        // MIN PRICE
        .filter(product =>
            minPrice === ""
                ? true
                : Number(product.price) >= Number(minPrice)
        )

        // MAX PRICE
        .filter(product =>
            maxPrice === ""
                ? true
                : Number(product.price) <= Number(maxPrice)
        )

        // BRAND
        .filter(product =>
            brand === ""
                ? true
                : product.brand === brand
        )

        // CATEGORY
        .filter(product =>
            category === ""
                ? true
                : product.category === category
        )

        // RATING
        .filter(product =>
            rating === ""
                ? true
                : Number(product.rating || 0) >= Number(rating)
        );

    // =====================================================
    // SORTING
    // =====================================================

    if (sort === "low") {

        filteredProducts.sort(
            (a, b) => Number(a.price) - Number(b.price)
        );

    }

    if (sort === "high") {

        filteredProducts.sort(
            (a, b) => Number(b.price) - Number(a.price)
        );

    }

    if (sort === "rating") {

        filteredProducts.sort(
            (a, b) =>
                Number(b.rating || 0) -
                Number(a.rating || 0)
        );

    }

    return (

        <main className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 pt-24 pb-16">

            <div className="w-[92%] max-w-7xl mx-auto">


                {/* =================================================
                    SEARCH HEADER
                ================================================= */}

                <div className="mb-8">

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

                        <div>

                            <p className="text-sm font-medium text-blue-600 mb-1">
                                Zenvyra Search
                            </p>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">

                                Search Results

                            </h1>

                            <p className="text-gray-500 mt-2">

                                {query
                                    ? `Showing results for "${query}"`
                                    : "Explore our products"
                                }

                            </p>

                        </div>


                        {/* RESULT COUNT */}

                        <div className="bg-white/70 backdrop-blur-md border border-white rounded-full px-4 py-2 shadow-sm">

                            <span className="text-sm text-gray-500">
                                Products:
                            </span>

                            <span className="font-bold text-blue-600 ml-1">
                                {filteredProducts.length}
                            </span>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    FILTER PANEL
                ================================================= */}

                <div className="bg-white/70 backdrop-blur-xl border border-white/70 rounded-2xl shadow-md p-5 mb-8">

                    <div className="flex items-center justify-between mb-4">

                        <div>

                            <h2 className="font-bold text-lg text-gray-800">
                                Filters
                            </h2>

                            <p className="text-xs text-gray-500">
                                Refine your search
                            </p>

                        </div>

                        <span className="text-xl">
                            🎛️
                        </span>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">


                        {/* MIN PRICE */}

                        <div>

                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Minimum Price
                            </label>

                            <input
                                type="number"
                                placeholder="₹ Min"
                                value={minPrice}
                                onChange={(e) =>
                                    setMinPrice(e.target.value)
                                }
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            />

                        </div>


                        {/* MAX PRICE */}

                        <div>

                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Maximum Price
                            </label>

                            <input
                                type="number"
                                placeholder="₹ Max"
                                value={maxPrice}
                                onChange={(e) =>
                                    setMaxPrice(e.target.value)
                                }
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            />

                        </div>


                        {/* BRAND */}

                        <div>

                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Brand
                            </label>

                            <select
                                value={brand}
                                onChange={(e) =>
                                    setBrand(e.target.value)
                                }
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            >

                                <option value="">
                                    All Brands
                                </option>

                                {brands.map(item => (

                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* CATEGORY */}

                        <div>

                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Category
                            </label>

                            <select
                                value={category}
                                onChange={(e) =>
                                    setCategory(e.target.value)
                                }
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            >

                                <option value="">
                                    All Categories
                                </option>

                                {categories.map(item => (

                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* RATING */}

                        <div>

                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Rating
                            </label>

                            <select
                                value={rating}
                                onChange={(e) =>
                                    setRating(e.target.value)
                                }
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            >

                                <option value="">
                                    All Ratings
                                </option>

                                <option value="4">
                                    ⭐ 4 & Above
                                </option>

                                <option value="3">
                                    ⭐ 3 & Above
                                </option>

                                <option value="2">
                                    ⭐ 2 & Above
                                </option>

                            </select>

                        </div>


                        {/* SORT */}

                        <div>

                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Sort By
                            </label>

                            <select
                                value={sort}
                                onChange={(e) =>
                                    setSort(e.target.value)
                                }
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                            >

                                <option value="">
                                    Default
                                </option>

                                <option value="low">
                                    Price: Low → High
                                </option>

                                <option value="high">
                                    Price: High → Low
                                </option>

                                <option value="rating">
                                    Rating: High → Low
                                </option>

                            </select>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    PRODUCT RESULTS
                ================================================= */}

                {filteredProducts.length === 0 ? (

                    <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl shadow-md py-20 text-center">

                        <div className="text-5xl mb-4">
                            🔍
                        </div>

                        <h2 className="text-xl font-bold text-gray-800">
                            No products found
                        </h2>

                        <p className="text-gray-500 text-sm mt-2">
                            Try another search or change your filters.
                        </p>

                    </div>

                ) : (

                    <div>

                        {/* RESULT BAR */}

                        <div className="flex items-center justify-between mb-4">

                            <h2 className="text-xl font-bold text-gray-800">
                                Products
                            </h2>

                            <p className="text-sm text-gray-500">
                                {filteredProducts.length} items found
                            </p>

                        </div>


                        {/* PRODUCT GRID */}

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">


                            {filteredProducts.map(product => (

                                <Link
                                    key={product._id}
                                    href={`/product/${product._id}`}
                                    className="group bg-white/80 backdrop-blur-md border border-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >


                                    {/* PRODUCT IMAGE */}

                                    <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-5 group-hover:scale-110 transition duration-500"
                                        />


                                        {/* DISCOUNT BADGE */}

                                        {product.discount && (

                                            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">

                                                {product.discount}

                                            </span>

                                        )}

                                    </div>


                                    {/* PRODUCT DETAILS */}

                                    <div className="p-4">


                                        {/* BRAND */}

                                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">

                                            {product.brand}

                                        </p>


                                        {/* NAME */}

                                        <h2 className="font-semibold text-gray-800 mt-1 line-clamp-2 min-h-[40px] group-hover:text-blue-600 transition">

                                            {product.name}

                                        </h2>


                                        {/* RATING */}

                                        <div className="flex items-center gap-2 mt-2">

                                            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md">

                                                ⭐ {product.rating || 0}

                                            </span>

                                            {product.reviews && (

                                                <span className="text-xs text-gray-500">

                                                    {product.reviews} reviews

                                                </span>

                                            )}

                                        </div>


                                        {/* PRICE */}

                                        <div className="flex items-center gap-2 mt-3">

                                            <span className="text-xl font-bold text-gray-900">

                                                ₹{product.price}

                                            </span>

                                            {product.originalPrice && (

                                                <span className="text-sm text-gray-400 line-through">

                                                    ₹{product.originalPrice}

                                                </span>

                                            )}

                                        </div>


                                        {/* DELIVERY */}

                                        {product.delivery && (

                                            <p className="text-xs text-green-600 font-medium mt-2">

                                                ✓ {product.delivery}

                                            </p>

                                        )}

                                    </div>

                                </Link>

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </main>

    );
}