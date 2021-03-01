const AddExercise = (exercise) => ({ type: "Add_Exercise", exercise });
const AddExercises = (exercises) => ({type: "Add_Exercises", exercises});
const UpdateExercise = (exercise) => ({ type: "Update_Exercise", exercise });
const DeleteExercise = (id) => ({ type: "Delete_Exercise", id });
const AddTrinningType = (trinningType) => ({ type: "Add_TrinningType", trinningType });

export { AddExercise, AddExercises, UpdateExercise, DeleteExercise, AddTrinningType };