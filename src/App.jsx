import React from 'react';

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white/80 backdrop-blur-lg border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  const features = [
    {
      title: 'Massive Plantation',
      description: 'Join the movement to plant millions of trees across Rajasthan, restoring green cover and combating desertification.',
      icon: '🌳',
    },
    {
      title: 'Digital Tracking',
      description: 'Track the growth and health of planted trees in real-time using advanced GIS mapping technology.',
      icon: '📍',
    },
    {
      title: 'Green Certificates',
      description: 'Earn digital certificates for your contribution to the environment and be recognized as a climate champion.',
      icon: '📜',
    },
    {
      title: 'Community Action',
      description: 'Empowering local communities and volunteers to take charge of environmental conservation.',
      icon: '🤝',
    },
    {
      title: 'Biodiversity Revival',
      description: 'Reviving local flora and fauna to build a sustainable and balanced ecosystem for future generations.',
      icon: '🦋',
    },
    {
      title: 'Carbon Reduction',
      description: 'Taking active steps to reduce carbon footprint and fight climate change at the grassroots level.',
      icon: '🌍',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-900 text-white pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2813&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-700/50 border border-emerald-500/30 text-emerald-100 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
            TOWARDS A GREENER FUTURE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hariyalo <span className="text-emerald-300"></span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto mb-10 leading-relaxed">
            A state-wide initiative to transform Rajasthan through sustainable afforestation, ecological restoration, and community-driven climate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Join the Movement
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-100/50 blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Core Features</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how Haryalo Rajasthan is making a tangible impact on the environment through innovative approaches and community participation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center border-t border-gray-800">
        <p className="text-gray-400">© 2026 Haryalo Rajasthan Initiative. For a sustainable tommorow.</p>
      </footer>
    </div>
  );
}

export default App;
