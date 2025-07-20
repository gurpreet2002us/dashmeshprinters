import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Printer, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import flexPrinting from '@/assets/flex-printing.jpg';

const FlexPrinting = () => {
  const features = [
    'Weather Resistant Materials',
    'Vibrant Color Printing',
    'Large Format Capability',
    'Quick Installation Service',
    'Custom Size Options',
    'UV Resistant Inks',
    'Indoor & Outdoor Use',
    'Professional Mounting'
  ];

  const packages = [
    {
      name: 'Standard Flex',
      price: '₹35 per sq ft',
      features: ['440 GSM Flex', 'Eco Solvent Print', 'Weather Resistant', 'Basic Finishing']
    },
    {
      name: 'Premium Flex',
      price: '₹55 per sq ft',
      features: ['510 GSM Flex', 'UV Print', 'Long Lasting', 'Professional Finishing', 'Mounting Service']
    },
    {
      name: 'Vinyl Printing',
      price: '₹85 per sq ft',
      features: ['High-Grade Vinyl', 'UV Resistant', 'Premium Quality', 'Professional Installation', '5 Year Warranty']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Flex Printing</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                High-quality large format printing for banners, hoardings, and outdoor advertising materials that make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent-light px-8 py-4 rounded-xl font-semibold text-lg">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={flexPrinting}
                alt="Flex Printing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-gradient">Flex Printing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get maximum visibility for your business with our high-quality flex printing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="card-elegant text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Printer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="text-gradient">Material</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect material and finish for your flex printing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`card-elegant text-center ${index === 1 ? 'ring-2 ring-primary scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/quote">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-light text-primary-foreground hover:shadow-lg">
                    Select Package
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get high-impact flex printing that captures attention and delivers your message effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlexPrinting;