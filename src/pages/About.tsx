import React from 'react';
import { Award, Users, Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '5000+', label: 'Projects Completed' },
    { number: '24/7', label: 'Customer Support' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every print job undergoes rigorous quality checks.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Your satisfaction is our priority. We work closely with you to exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Passion for Printing',
      description: 'We love what we do and it shows in every project we undertake.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Dependable service delivery with on-time completion and consistent quality.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Dashmesh Printers and Card Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your trusted partner in premium printing solutions since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
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

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Founded in 2008, Dashmesh Printers and Card Gallery began as a small family business with a simple mission: 
                  to provide high-quality printing services that bring people's creative visions to life.
                </p>
                <p className="text-lg">
                  What started as a modest printing shop has grown into one of the region's most trusted 
                  printing companies, serving thousands of satisfied customers across various industries 
                  and personal needs.
                </p>
                <p className="text-lg">
                  Our commitment to quality, innovation, and customer satisfaction has been the driving 
                  force behind our growth. We've invested in state-of-the-art equipment and continuously 
                  trained our team to stay ahead of industry trends.
                </p>
                <p className="text-lg">
                  Today, we're proud to be the preferred choice for wedding cards, business materials, 
                  and custom printing solutions, maintaining the same personal touch that defined us 
                  from the beginning.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-4xl font-bold text-white">DP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">15+ Years</h3>
                  <p className="text-muted-foreground">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card-elegant">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To provide exceptional printing services that exceed customer expectations through 
                innovative technology, superior quality, and personalized service. We strive to be 
                the preferred printing partner for individuals and businesses by delivering creative 
                solutions that bring their visions to life.
              </p>
            </div>

            {/* Vision */}
            <div className="card-elegant">
              <Eye className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be the leading printing company in the region, recognized for our commitment to 
                quality, innovation, and customer satisfaction. We envision a future where every 
                print project we undertake becomes a testament to our craftsmanship and dedication 
                to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our skilled professionals are passionate about delivering exceptional printing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Balvinder Singh', role: 'Founder and MD', experience: '15+ years', phone: '9917387299' },
              { name: 'Pritam Singh', role: 'Office Manager', experience: '10+ years', phone: '9389757033' },
              { name: 'Jatindar Kaur', role: 'Design Manager', experience: '12+ years' },
            ].map((member, index) => (
              <div
                key={member.name}
                className="card-elegant text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground mb-1">{member.experience} in printing industry</p>
                {member.phone && (
                  <p className="text-accent font-medium">📞 {member.phone}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;