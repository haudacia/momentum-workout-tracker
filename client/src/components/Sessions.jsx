import { useEffect, useState } from 'react'

function Sessions() {
    const [allSessions, setAllSessions] = useState(null)

    useEffect(() => {
        fetch('/training-plan')
            .then(res => res.json())
            .then(data => {
                setAllSessions(data)
            })
    }, [])

    return (
        <div>
            {allSessions && (
                <div>
                    <h2>All Training </h2>
                    <ul>
                        {allSessions.map((plan) => (
                            <li key={plan._id}>
                                <h3>{plan.name}</h3>
                                <ul>
                                    {plan.exercises.map((exercise) => (
                                        <li key={exercise.exerciseName}>
                                            <h4>{exercise.exerciseName}</h4>
                                            <p>{exercise.sets} sets of {exercise.reps} reps at {exercise.weight} kg</p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

            )}
        </div>
    )
}

export default Sessions
