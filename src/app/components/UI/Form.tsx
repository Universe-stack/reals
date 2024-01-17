'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db } from "@/firebase/initFirebase"
import {collection, addDoc,getDocs, query,where} from 'firebase/firestore'

interface HabitFormData {
  date: Date;
  habitName: string;
  description: string;
  completed: boolean;
  rewardPoints: number;
  status: string;
  assignedTo: string;
  time: Date | null;
  tasks:[];
  startLevel:number;
  currentLevel:number;
  totalLevel:number;
}

const HabitForm: React.FC = () => {
  const [habitData, setHabitData] = useState<HabitFormData>({
    date: new Date(),
    habitName: '',
    description: '',
    completed: false,
    rewardPoints: 0,
    status: 'Not Started',
    assignedTo: '',
    time: null,
    tasks:[],
    startLevel:0,
    currentLevel:0,
    totalLevel: 0,


  });

  const [storedInDb,setStoredInDb]= useState(false);
  const [errors, setErrors] = useState<{ [key in keyof HabitFormData]?: string }>({});

  const createCollectionIfNotExists = async (collectionName:any) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
  
    if (querySnapshot.empty) {
      // The collection doesn't exist, so create it
      console.log(`Creating collection: ${collectionName}`);
      await addDoc(collection(db, collectionName), { dummy: "data" });
    }
};

  async function WriteToCloudFirestore (date:Date,habitName:string,description:string,rewardPoints:number,assignedTo:string,tasks:[],startLevel:number,currentLevel:number,totalLevel:number ) {
    try {
        await createCollectionIfNotExists("goal");

        const docRef = await addDoc(collection(db, "goal"), {
            date:date,
            habitName:habitName,
            description:description,
            assignedTo:assignedTo,
            rewardPoints:rewardPoints,
            tasks:tasks,
            startLevel:startLevel,
            currentLevel:currentLevel,
            totalLevel:totalLevel
        });
        console.log("Document 'Goals' written with ID:",docRef.id )
        return true
    }catch(error){
        console.error("Error adding data", error)
        return false;
    }
}


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
      [name]: value || new Date(),
    }));
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
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

          const added = await WriteToCloudFirestore(habitData.date,habitData.habitName,habitData.description,habitData.rewardPoints,habitData.assignedTo,habitData.tasks,habitData.startLevel,habitData.currentLevel,habitData.totalLevel)
          console.log("added",added)
          if(added){
              setStoredInDb(true);
              setHabitData({
                  date: new Date(),
                  habitName: '',
                  description: '',
                  rewardPoints:0,
                  assignedTo:'',
                  tasks:[],
                  completed: false,
                  status:'',
                  time: null,
                  startLevel:0,
                  currentLevel:0,
                  totalLevel:0,
              })
              alert("Data added to firestore!")
          }
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
          value={`${habitData.date}`}
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
