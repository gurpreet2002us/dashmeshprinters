import React, { useState } from 'react';
import { Filter, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import weddingCards from '@/assets/wedding-cards.jpg';
import businessCards from '@/assets/business-cards.jpg';
import flexPrinting from '@/assets/flex-printing.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wedding', name: 'Wedding Cards' },
    { id: 'business', name: 'Business Materials' },
    { id: 'flex', name: 'Flex Printing' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'digital', name: 'Digital Printing' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding Invitation',
      category: 'wedding',
      image: '/lovable-uploads/55ec85bb-9727-457c-97b1-ed74c8f216a0.png', // Wedding Cards
      description: 'Premium wedding cards with gold foil printing and custom calligraphy.',
      client: 'Priya & Rajesh Wedding',
    },
    {
      id: 2,
      title: 'Corporate Business Cards',
      category: 'business',
      image: '/lovable-uploads/22597d3e-a89e-40d3-b573-d8ff21b2f7b9.png', // Business/Visiting Cards
      description: 'Professional business cards with embossed logo and premium finish.',
      client: 'Tech Solutions Pvt Ltd',
    },
    {
      id: 3,
      title: 'Event Banner Design',
      category: 'flex',
      image: '/lovable-uploads/bf96175b-5c3e-44f1-b4d8-2d5e082b02dd.png', // Flex Printing
      description: 'Large format flex banner for corporate event with vibrant colors.',
      client: 'Corporate Event 2024',
    },
    {
      id: 4,
      title: 'Royal Wedding Cards',
      category: 'wedding',
      image: '/lovable-uploads/royal-wedding-card-design.jpg', // Wedding Cards
      description: 'Luxury wedding invitation with intricate design and royal finishing.',
      client: 'Simran & Arjun Wedding',
    },
    {
      id: 5,
      title: 'Restaurant Menu Cards',
      category: 'business',
      image: '/lovable-uploads/restaurent brochure.jpg', // Business/Visiting Cards
      description: 'Waterproof menu cards with appetizing food photography.',
      client: 'Spice Garden Restaurant',
    },
    {
      id: 6,
      title: 'Shop Signage Banner',
      category: 'flex',
      image: '/lovable-uploads/bf96175b-5c3e-44f1-b4d8-2d5e082b02dd.png', // Flex Printing
      description: 'Outdoor signage banner with weather-resistant printing.',
      client: 'Fashion Hub Store',
    },
    {
      id: 7,
      title: 'Dry Fruit Gift Boxes',
      category: 'packaging',
      image: '/lovable-uploads/c6502e7f-7ee5-4f7d-987c-fe812961383d.png', // Dry Fruit Boxes
      description: 'Custom packaging design for premium dry fruit gift boxes.',
      client: 'Diwali Gift Collection',
    },
    {
      id: 8,
      title: 'Company Brochures',
      category: 'digital',
      image: '/lovable-uploads/company brochures.jpg', // Digital Printing
      description: 'Multi-page company brochures with professional layout.',
      client: 'Industrial Solutions Inc',
    },
    {
      id: 9,
      title: 'Birthday Invitations',
      category: 'digital',
      image: '/lovable-uploads/f306fb72-48f7-45b9-8108-3ba573c64e0a.png', // Birthday Cards (as digital)
      description: 'Colorful birthday party invitations with cartoon characters.',
      client: 'Kids Birthday Party',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover our finest printing work and creative designs across various categories
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-white text-foreground hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Filter className="h-4 w-4 mr-2 inline" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="card-elegant group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-sm font-medium text-white capitalize">
                            {item.category}
                          </span>
                        </div>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  {/* <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-accent">
                        {item.client}
                      </p>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                      <span className="mr-2 text-sm">View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="btn-accent px-8 py-4">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-dark via-primary to-accent-dark text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a printing solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;