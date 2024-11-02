import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  enrolled: number;
  rating: number;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  duration,
  enrolled,
  rating,
  image,
  level
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(level)}`}>
            {level}
          </span>
        </div>
        <p className="text-gray-600 mb-4">By {instructor}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {enrolled.toLocaleString()}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
            {rating.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;