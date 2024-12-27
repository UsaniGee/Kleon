import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: "Software Development",
      description: "We build custom software solutions tailored to your specific business needs, from web and mobile applications to enterprise-level systems.",
      image: "assets/KleonHero.jpg"
    },
    {
      title: "Data Analysis",
      description: "Our data analysis services help you unlock valuable insights from your data, enabling data-driven decision-making and improved business outcomes.",
      image: "assets/KleonHero.jpg"
    },
    {
      title: "Cyber Security",
      description: "We protect your valuable data and systems from cyber threats with our comprehensive cybersecurity solutions, including risk assessments, vulnerability management, and incident response.",
     image: "assets/KleonHero.jpg"
    },
    {
      title: "AI/ML",
      description: "We leverage the power of artificial intelligence and machine learning to develop intelligent solutions that automate processes, improve efficiency, and drive innovation.",
      image: "assets/KleonHero.jpg"
    },
    {
      title: "Blockchain Development",
      description: "We build secure and transparent blockchain solutions for various industries, including supply chain management, finance, and healthcare.",
      image: "assets/KleonHero.jpg"
    },
  ];

  return (
    <div className='md:pt-[110px] pt-[120px]'>
      <div className='bg-black relative'>
        <img className='h-[400px] md:h-[350px] opacity-65 w-full object-cover' src="assets/AboutUss.jpg" alt="Services Background" />
        <div className='grid gap-10 lg:mr-10 place-items-center absolute top-2 p-10'>
          <h1 className='text-3xl lg:text-5xl font-bold text-[#D39D55] dark:text-inherit'>Our Services</h1>
          <h3 className='text-xl lg:text-2xl text-white font-bold text-center'>
            <span className='dark:font-bold dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text dark:text-transparent leading-normal'>Kleon</span> provides software development, data analytics, cybersecurity, AI/ML, and blockchain solutions to drive growth and transformation across Africa and Asia.
          </h3>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto py-12 px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden grid lg:grid-cols-2">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" /> {/* Added image */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;