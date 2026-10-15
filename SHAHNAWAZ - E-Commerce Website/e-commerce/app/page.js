"use client"

import Link from "next/link";

export default function Home() {

  const categories = [

    // =====================================================
    // EXISTING CATEGORIES — पहले से थीं
    // =====================================================

    {
      name: "Mobile",
      slug: "mobile",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXICaj1G-if16lhgJPMXIG5A&s",
      discount: "80% OFF"
    },

    {
      name: "Men's Footwear",
      slug: "mens-footwear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2ShIQ8yeWk7BfcEOZYGU0YMvywt_VHv7CA&s",
      discount: "50% OFF"
    },

    {
      name: "Women's Footwear",
      slug: "womens-footwear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Men's Shirt",
      slug: "mens-shirt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiqBsHOyy2g42TpLQkpi_lqiAxzp4wH4oPQ&s",
      discount: "80% OFF"
    },

    {
      name: "Ethnic Wear",
      slug: "ethnic-wear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "80% OFF"
    },

    {
      name: "Beauty & Makeup",
      slug: "beauty",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "80% OFF"
    },

    {
      name: "Laptop",
      slug: "laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi07tf9g3tgpg7a0YYY-I7TSldETBIiqTezQ&s",
      discount: "50-80% OFF"
    },

    {
      name: "Kids Wear",
      slug: "kids-wear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdqqD4EbQIQ6NnXGUYPnUiGT27KewY-J-vg&s",
      discount: "50-80% OFF"
    },

    {
      name: "Watches",
      slug: "watch",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Bags & Backpacks",
      slug: "bags",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Earbuds",
      slug: "earbuds",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Speakers",
      slug: "speakers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Eyewear",
      slug: "eyewear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Belts & Wallets",
      slug: "wallets",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Home Decor",
      slug: "home-decor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },


    // =====================================================
    // 🆕 NEW CATEGORIES — अभी add की गई हैं
    // इन 5 categories के products final database में भी होंगे.
    // =====================================================

    {
      name: "Women's Clothing",
      slug: "womens-clothing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "50-80% OFF"
    },

    {
      name: "Smart TV",
      slug: "smart-tv",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi07tf9g3tgpg7a0YYY-I7TSldETBIiqTezQ&s",
      discount: "30-60% OFF"
    },

    {
      name: "Kitchen Appliances",
      slug: "kitchen-appliances",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "30-60% OFF"
    },

    {
      name: "Home Appliances",
      slug: "home-appliances",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "30-60% OFF"
    },

    {
      name: "Sports & Fitness",
      slug: "sports-fitness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI7htgw684CXaj1G-if16lhgJPMXIG5A&s",
      discount: "30-60% OFF"
    }

  ];


  return (

    <div className="min-h-[574px] pt-24 pb-16 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50">


      {/* =================================================
          HERO SECTION
          Existing code — no major change
      ================================================= */}

      <div className="heroSlider w-[90%] mx-auto rounded-xl overflow-hidden shadow-md">

        <img
          className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
          src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/ac8f799c07a336ce.png?q=60"
          alt="Zenvyra Shopping"
        />

      </div>


      {/* =================================================
          CATEGORY TITLE
      ================================================= */}

      <h1 className="title text-4xl font-bold text-center mt-10 mb-8 text-gray-800">
        Shop By Category
      </h1>


      {/* =================================================
          CATEGORY GRID

          🆕 New categories automatically yahan bhi show hongi
          kyunki categories array mein add ki gayi hain.
      ================================================= */}

      <div className="categoryBox w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {categories.map((category) => (

          <Link
            href={`/category/${category.slug}`}
            key={category.slug}
            className="group z-0 backdrop-blur-lg bg-white/60 border border-white/30 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-3"
          >

            <div className="w-full h-32 flex items-center justify-center overflow-hidden">

              <img
                src={category.image}
                alt={category.name}
                className="h-full object-contain group-hover:scale-110 transition duration-300"
              />

            </div>


            <div className="mt-3 text-center">

              <p className="font-semibold text-gray-800 text-sm">
                {category.name}
              </p>

              <p className="text-green-600 font-bold text-sm mt-1">
                {category.discount}
              </p>

              <p className="text-blue-500 text-xs mt-1 opacity-0 group-hover:opacity-100 transition">
                Shop Now →
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );

}