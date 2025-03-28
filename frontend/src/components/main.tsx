import  { useEffect, useState } from 'react';
import { Github, Cloud, Database, Box, Cpu, CloudLightning as Lightning, ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Deploy at the Speed of Thought
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-medium">
              A powerful deployment platform built for modern applications. Deploy, scale, and manage your projects with ease.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-white hover:bg-gray-100 rounded-lg font-bold text-black flex items-center gap-2 shadow-lg">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/landing">
                <button className="px-6 py-3 bg-transparent hover:bg-white/10 rounded-lg font-bold text-white flex items-center gap-2 border border-white/20">
                  View Demo <Terminal className="w-4 h-4" />
                </button>
              </Link>

            </div>
          </div>

          {/* Terminal Demo */}
          <TerminalDemo />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>
            <WorkflowStep
              number="01"
              title="Connect Repository"
              description="Link your GitHub repository with a single click. We automatically detect your project type and configuration."
            />
            <WorkflowStep
              number="02"
              title="Configure & Deploy"
              description="Set your environment variables, choose your region, and deploy with zero configuration needed."
            />
            <WorkflowStep
              number="03"
              title="Scale & Monitor"
              description="Your application automatically scales based on demand. Monitor performance in real-time."
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Github className="w-8 h-8 text-white" />}
              title="GitHub Integration"
              description="Seamlessly connect your GitHub repositories for instant deployments and automatic updates."
            />
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-white" />}
              title="S3 Storage"
              description="Reliable and scalable storage solution for your static assets and deployment artifacts."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-white" />}
              title="Redis Queues"
              description="High-performance job queuing system for managing deployment tasks efficiently."
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Box className="w-8 h-8 text-white" />}
              title="Container Ready"
              description="Deploy containerized applications with support for Docker and industry standards."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-white" />}
              title="Kubernetes Powered"
              description="Scale your applications effortlessly with our managed Kubernetes infrastructure."
            />
            <FeatureCard
              icon={<Lightning className="w-8 h-8 text-white" />}
              title="Instant Deployments"
              description="Zero-downtime deployments with automatic rollbacks and health checks."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="99.9%" label="Uptime" />
            <StatCard number="150+" label="Countries" />
            <StatCard number="10ms" label="Avg. Latency" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalDemo() {
  const [step, setStep] = useState(0);
  const steps = [
    '$ git push origin main',
    '> Detecting project type...',
    '> Found Node.js application',
    '> Installing dependencies...',
    '> Building application...',
    '> Deploying to edge network...',
    '> ✨ Deployment complete! https://your-app.demo.com',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-zinc-900 rounded-lg overflow-hidden shadow-xl border border-white/10">
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-sm text-white/70 ml-2 font-medium">Terminal</span>
      </div>
      <div className="p-6 font-mono text-base">
        {steps.slice(0, step + 1).map((text, index) => (
          <div
            key={index}
            className={`mb-2 ${
              index === step ? 'text-white font-medium' : 'text-white/70'
            }`}
          >
            {text}
          </div>
        ))}
        <div className="animate-pulse text-white">_</div>
      </div>
    </div>
  );
}

function WorkflowStep({ number, title, description }) {
  return (
    <div className="relative z-10">
      <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 shadow-lg">
        <div className="text-white font-mono font-bold mb-2">{number}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors border border-white/10 shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-gray-300 font-medium">{label}</div>
    </div>
  );
}

export default Home;