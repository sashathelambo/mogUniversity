import React, { useState } from 'react';
import { Plus, Minus, Save, Trash2, BarChart3, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface Set {
  reps: number;
  weight: number;
  completed: boolean;
}

interface Exercise {
  id: number;
  name: string;
  sets: Set[];
  targetRPE: number;
  restTime: number;
  notes: string;
  isExpanded: boolean;
}

interface WorkoutTemplate {
  name: string;
  focus: string;
  weekInMesocycle: number;
}

const WorkoutTracker = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Push Day');
  const [weekInMesocycle, setWeekInMesocycle] = useState(1);
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: 1,
      name: 'Bench Press',
      sets: [
        { reps: 8, weight: 135, completed: false },
        { reps: 8, weight: 135, completed: false },
        { reps: 8, weight: 135, completed: false },
      ],
      targetRPE: 8,
      restTime: 180,
      notes: 'Focus on controlled eccentric',
      isExpanded: true
    },
    {
      id: 2,
      name: 'Incline DB Press',
      sets: [
        { reps: 10, weight: 50, completed: false },
        { reps: 10, weight: 50, completed: false },
        { reps: 10, weight: 50, completed: false },
      ],
      targetRPE: 7,
      restTime: 120,
      notes: '',
      isExpanded: false
    }
  ]);

  const templates: WorkoutTemplate[] = [
    { name: 'Push Day', focus: 'Chest, Shoulders, Triceps', weekInMesocycle: 1 },
    { name: 'Pull Day', focus: 'Back, Biceps', weekInMesocycle: 1 },
    { name: 'Leg Day', focus: 'Quads, Hamstrings, Calves', weekInMesocycle: 1 },
  ];

  const toggleSetCompletion = (exerciseId: number, setIndex: number) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === exerciseId) {
        const newSets = [...exercise.sets];
        newSets[setIndex] = { ...newSets[setIndex], completed: !newSets[setIndex].completed };
        return { ...exercise, sets: newSets };
      }
      return exercise;
    }));
  };

  const updateSet = (exerciseId: number, setIndex: number, field: keyof Set, value: number) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === exerciseId) {
        const newSets = [...exercise.sets];
        newSets[setIndex] = { ...newSets[setIndex], [field]: value };
        return { ...exercise, sets: newSets };
      }
      return exercise;
    }));
  };

  const toggleExerciseExpansion = (id: number) => {
    setExercises(exercises.map(exercise =>
      exercise.id === id ? { ...exercise, isExpanded: !exercise.isExpanded } : exercise
    ));
  };

  const addSet = (exerciseId: number) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === exerciseId) {
        const lastSet = exercise.sets[exercise.sets.length - 1];
        return {
          ...exercise,
          sets: [...exercise.sets, { ...lastSet, completed: false }]
        };
      }
      return exercise;
    }));
  };

  const removeSet = (exerciseId: number) => {
    setExercises(exercises.map(exercise => {
      if (exercise.id === exerciseId && exercise.sets.length > 1) {
        return {
          ...exercise,
          sets: exercise.sets.slice(0, -1)
        };
      }
      return exercise;
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Workout Tracker</h2>
          <div className="text-sm text-gray-600 mt-1">
            Week {weekInMesocycle} of 6 in current mesocycle
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {templates.map((template) => (
              <option key={template.name} value={template.name}>{template.name}</option>
            ))}
          </select>
          <button className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200">
            <BarChart3 className="w-4 h-4" />
            <span>Progress</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleExerciseExpansion(exercise.id)}
            >
              <div className="flex items-center space-x-3">
                <h3 className="font-semibold text-gray-900">{exercise.name}</h3>
                <span className="text-sm text-gray-500">
                  {exercise.sets.length} × {exercise.sets[0].reps} @ RPE {exercise.targetRPE}
                </span>
              </div>
              {exercise.isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>

            {exercise.isExpanded && (
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">Target RPE: {exercise.targetRPE}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      Rest: {exercise.restTime}s
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Add notes..."
                    value={exercise.notes}
                    onChange={(e) => setExercises(exercises.map(ex =>
                      ex.id === exercise.id ? { ...ex, notes: e.target.value } : ex
                    ))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm"
                  />
                </div>

                <div className="space-y-2">
                  {exercise.sets.map((set, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 text-center text-sm text-gray-500">#{index + 1}</div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Weight (lbs)</label>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateSet(exercise.id, index, 'weight', Math.max(0, set.weight - 5))}
                              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-16 text-center">{set.weight}</span>
                            <button
                              onClick={() => updateSet(exercise.id, index, 'weight', set.weight + 5)}
                              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Reps</label>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateSet(exercise.id, index, 'reps', Math.max(1, set.reps - 1))}
                              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center">{set.reps}</span>
                            <button
                              onClick={() => updateSet(exercise.id, index, 'reps', set.reps + 1)}
                              className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSetCompletion(exercise.id, index)}
                        className={`w-20 py-2 text-sm font-medium rounded-md ${
                          set.completed
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {set.completed ? 'Done' : 'Do Set'}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => removeSet(exercise.id)}
                    className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md"
                  >
                    Remove Set
                  </button>
                  <button
                    onClick={() => addSet(exercise.id)}
                    className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md"
                  >
                    Add Set
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="flex-1 flex items-center justify-center py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Save className="w-4 h-4 mr-2" />
          Save Workout
        </button>
        <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          <Plus className="w-4 h-4 mr-2" />
          Add Exercise
        </button>
      </div>
    </div>
  );
};

export default WorkoutTracker;