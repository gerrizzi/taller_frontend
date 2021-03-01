const InitialState = {
    Exercises: [],
    TrinningTypes: []
};

export default function ExerciseReducer(state = InitialState, action) {
    switch (action.type) {
        case "Add_Exercise":
            {
                debugger;
                return { ...state, Exercises: [action.exercise, ...state.Exercises] };
            }
        case "Add_Exercises":
            return { ...state, Exercises: [...action.exercises, ...state.Exercises] };
        case "Update_Exercise": {
            const exercisesFiltered = state.Exercises.filter(e => {
                return e.id != action.exercise.id;
            });

            return { ...state, Exercises: [...exercisesFiltered, action.exercise] };
        }
        case "Delete_Exercise": {
            const exercisesFiltered = state.Exercises.filter(e => {
                return e.id != action.id;
            });

            return { ...state, Exercises: [...exercisesFiltered] };
        }
        case "Add_TrinningType": {
            return { ...state, TrinningTypes: [...action.trinningType] };
        }
        default:
            return state;
    }
}
;