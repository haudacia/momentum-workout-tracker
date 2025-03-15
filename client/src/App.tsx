import { useEffect, useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';
const server_url = 'http://localhost:3000'
import Sessions from './components/Sessions';

function App() {
  const [session, setSession] = useState({})
  const [allSessions, setAllSessions] = useState([])
  const { register, handleSubmit } = useForm();
  const [isExercise, setIsExercise] = useState(false);

  const onSubmitExercise = async (formData) => {
    const updatedExercises = [
      ...(session?.exercises || []), // Mantém os exercícios já existentes
      {
        exerciseName: formData.exerciseName,
        sets: Number(formData.sets),
        reps: Number(formData.reps),
        weight: Number(formData.weight)
      }];

    const response = await fetch(`${server_url}/training-plan/${session?._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: session?.name,
        exercises: updatedExercises
      })
    });
    const data = await response.json();
    setSession(data)
    console.log(data);
  };

  const onSubmit = async (formData) => {
    const response = await fetch(`${server_url}/training-plan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        exercises: []
      })
    });
    const data = await response.json();
    setSession(data)
    console.log(session);
  };

  useEffect(() => {
    const getExercise = async () => {
      const response = await fetch(`${server_url}/exercise`);
      const data = await response.json();
      setExercise(data)
      console.log(data);
    };
    getExercise()
  }
    , []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Training Plan Name:</label>
        <input
          type='text'
          name='name'
          {...register('name')}
          placeholder='Enter training plan name'
        />
        <button type='submit'>submit</button>
      </form>
      <button onClick={() => setIsExercise(true)}>Add Exercise</button>
      {
        isExercise && (
          <form onSubmit={handleSubmit(onSubmitExercise)}>
            <label htmlFor='exerciseName'>Exercise Name:</label>
            <input
              type='text'
              name='exerciseName'
              {...register('exerciseName')}
              placeholder='Enter exercise name' />
            <label htmlFor='sets'>Sets:</label>
            <input
              type='number'
              name='sets'
              {...register('sets')}
              placeholder='Enter number of sets'
            />
            <label htmlFor='reps'>Reps:</label>
            <input
              type='number'
              name='reps'
              {...register('reps')}
              placeholder='Enter number of reps'
            />
            <label htmlFor='weight'>Weight:</label>
            <input
              type='number'
              name='weight'
              {...register('weight')}
              placeholder='Enter weight'
            />
            <button type='submit'>submit</button>
          </form>
        )
      }
      <Sessions />
    </div >
  )
}

export default App
