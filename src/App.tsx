import React from 'react';
import { Brain, Dumbbell, Heart, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import PricingCard from './components/PricingCard';
import Footer from './components/Footer';
import ProgressDashboard from './components/ProgressDashboard';
import CourseCard from './components/CourseCard';
import WorkoutTracker from './components/WorkoutTracker';

function App() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: "Mental Mastery",
      description: "Expert-led courses on psychology, mindfulness, and cognitive enhancement"
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-indigo-600" />,
      title: "Physical Excellence",
      description: "Customized workout plans and nutrition guidance for optimal results"
    },
    {
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
      title: "Holistic Health",
      description: "Comprehensive approach to wellness combining mind, body, and spirit"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: "Aesthetic Optimization",
      description: "Advanced techniques for maximizing your aesthetic potential"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "10",
      features: [
        "Basic course library access",
        "Community forum access",
        "Weekly workout plans",
        "Progress tracking tools"
      ]
    },
    {
      name: "Pro",
      price: "18",
      features: [
        "Full course library access",
        "Priority community support",
        "Custom workout plans",
        "Nutrition guidance",
        "Monthly group coaching"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "25",
      features: [
        "Everything in Pro plan",
        "1-on-1 coaching sessions",
        "Personalized meal plans",
        "VIP community access",
        "Weekly progress review"
      ]
    }
  ];

  const featuredCourses = [
    {
      title: "Advanced Face Optimization",
      instructor: "Dr. Sarah Chen",
      duration: "6 weeks",
      enrolled: 1250,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1621904878334-76c2f8aaf036?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Advanced"
    },
    {
      title: "Mind-Body Transformation",
      instructor: "Michael Brooks",
      duration: "8 weeks",
      enrolled: 2100,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Intermediate"
    },
    {
      title: "Fundamentals of Wellness",
      instructor: "Lisa Thompson",
      duration: "4 weeks",
      enrolled: 3500,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      
      {/* Progress Dashboard */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <ProgressDashboard />
      </section>

      {/* Featured Courses */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      {/* Workout Tracker */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <WorkoutTracker />
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Life</h2>
          <p className="text-xl text-gray-600">Comprehensive self-improvement through proven methodologies</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Invest in your transformation with our flexible plans</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;