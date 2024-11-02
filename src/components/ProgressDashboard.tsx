import React from 'react';
import { LineChart, Activity, Target, Trophy } from 'lucide-react';

const ProgressDashboard = () => {
  const stats = [
    { label: 'Courses Completed', value: '12', icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { label: 'Current Streak', value: '28 days', icon: <Activity className="w-5 h-5 text-green-500" /> },
    { label: 'Goals Achieved', value: '8/10', icon: <Target className="w-5 h-5 text-blue-500" /> },
    { label: 'Hours Learned', value: '156', icon: <LineChart className="w-5 h-5 text-purple-500" /> }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">{stat.label}</span>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDashboard;