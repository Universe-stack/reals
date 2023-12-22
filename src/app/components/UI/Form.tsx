import React, { useState, ChangeEvent, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface HabitFormData {
  date: string;
  habitName: string;
  description: string;
  completed: boolean;
  rewardPoints: number;
  rewardType: string;
  mood: string;
  consistencyStreak: boolean;
  nextSteps: string;
  feedback: string;
  status: string;
  assignedTo: string;
  time: Date | null
}

const HabitForm: React.FC = () => {
  const [habitData, setHabitData] = useState<HabitFormData>({
    date: '',
    habitName: '',
    description: '',
    completed: false,
    rewardPoints: 0,
    rewardType: 'Points',
    mood: 'Neutral',
    consistencyStreak: false,
    nextSteps: '',
    feedback: '',
    status: 'Not Started',
    assignedTo: '',
    time: null,
  });

  const [errors, setErrors] = useState<{ [key in keyof HabitFormData]?: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
    const { name, value, type, checked } = e.target;
    setHabitData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleChangeDate = (name: keyof HabitFormData, value: any) => {
    setHabitData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors: { [key in keyof HabitFormData]?: string } = {};

        if (!habitData.habitName.trim()) {
            validationErrors.habitName = 'Habit name is required';
          }
    
          if (!habitData.date) {
            validationErrors.date = 'Date is required';
          }
      
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
          setErrors({});

    console.log('Form data submitted:', habitData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto mt-8 px-8 ">
      {/* ... (other fields from the previous example) */}

      {/* New Fields */}
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="habitName">
        Name:
      </label>
      <input
        type="text"
        id="habitName"
        name="habitName"
        value={habitData.habitName}
        onChange={handleChange}
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date:
        <input
          type="date"
          id="date"
          name="date"
          value={habitData.date}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
          Status:
        </label>
        <input
          type="text"
          id="status"
          name="status"
          value={habitData.status}
          onChange={handleChange}
          placeholder='started | completed | pending'
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assignedTo">
          Assigned To:
        </label>
        <input
          type="text"
          id="assignedTo"
          name="assignedTo"
          value={habitData.assignedTo}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
        Time:
      </label>
      <DatePicker
        selected={habitData.time}
        onChange={(date: Date | null) => handleChangeDate('time', date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default HabitForm;
