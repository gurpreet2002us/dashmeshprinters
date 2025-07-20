import React, { useState } from 'react';
import { Calculator, Send, CheckCircle, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    quantity: '',
    timeline: '',
    budget: '',
    description: '',
    urgency: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: 'Quote Request Submitted!',
      description: 'We\'ll review your requirements and get back to you within 24 hours.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      quantity: '',
      timeline: '',
      budget: '',
      description: '',
      urgency: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const services = [
    'Wedding Cards',
    'Birthday Cards',
    'Business Cards',
    'Visiting Cards',
    'ID Cards',
    'Flex Printing',
    'Screen Printing',
    'Offset Printing',
    'Digital Printing',
    'Dry Fruit Boxes',
    'Fancy Envelopes',
    'Pamphlets',
    'Posters',
    'Calendars',
    'School Diaries',
    'Bill Books',
    'Other (Please specify in description)',
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free Consultation',
      description: 'Expert advice on materials, design, and printing options',
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Detailed quote within 24 hours of submission',
    },
    {
      icon: Award,
      title: 'Competitive Pricing',
      description: 'Best rates for premium quality printing services',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Dedicated project manager for your printing needs',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Your <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Free Quote</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Tell us about your printing needs and we'll provide you with a detailed, competitive quote.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Request a <span className="text-gradient">Quote from Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant">
              <div className="text-center mb-8">
                <Calculator className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-2xl p-4 text-white mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Project <span className="text-gradient">Details</span>
                </h2>
                <p className="text-muted-foreground">
                  Please provide as much detail as possible to help us give you an accurate quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name (Optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-2">
                      Estimated Quantity *
                    </label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 100 pieces, 500 cards"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Required Timeline
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (1-3 days)</SelectItem>
                        <SelectItem value="week">Within a week</SelectItem>
                        <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="month">Within a month</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget Range (Optional)
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                        <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                        <SelectItem value="15k-30k">₹15,000 - ₹30,000</SelectItem>
                        <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                        <SelectItem value="above-50k">Above ₹50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe your printing requirements in detail. Include information about size, colors, paper type, finishing, special requirements, etc."
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    💡 Tips for a Better Quote:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Specify exact dimensions and quantities</li>
                    <li>• Mention preferred paper type or material</li>
                    <li>• Include any special finishing requirements</li>
                    <li>• Attach reference images if you have any</li>
                  </ul>
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Request Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How quickly will I receive my quote?',
                answer: 'We typically provide detailed quotes within 24 hours of receiving your request. For urgent projects, we can provide estimates within a few hours.',
              },
              {
                question: 'Is the quote binding?',
                answer: 'Our quotes are valid for 30 days from the date of issue. Final pricing may vary if project specifications change after quote approval.',
              },
              {
                question: 'Do you provide design services?',
                answer: 'Yes! We offer complete design services. Our team of experienced designers can help create custom designs based on your requirements.',
              },
              {
                question: 'What information do you need for an accurate quote?',
                answer: 'We need details about the product type, quantity, size, materials, colors, finishing requirements, and timeline to provide an accurate quote.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="card-elegant"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;