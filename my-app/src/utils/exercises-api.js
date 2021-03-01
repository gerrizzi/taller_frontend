import Functions from "./functions";

//Basic url API
const API_URL = "https://trainning-rest-api.herokuapp.com/v1";

export default {
    Login(user, pass, callback) {
        const params = {
            username: user,
            password: pass
        };

        Functions.FetchPost(API_URL + "/users/login", params, callback);
    },

    AddExercise(userId, trainninType, weight, minutes, token, callback) {
        const params = {
            user_id: userId,
            trainning_type: parseInt(trainninType),
            weight: parseFloat(weight),
            minutes: parseFloat(minutes)
        };

        Functions.FetchPost(API_URL + "/trainings", params, callback, null, { "Authorization": token });
    },

    MyExercises(userId, token, callback) {
        Functions.FetchGet(API_URL + `/users/${userId}/trainings`, callback, null, { "Authorization": token });
    },

    GetTrainingTypes(token, callback) {
        Functions.FetchGet(API_URL + "/training-types", callback, null, { "Authorization": token });
    },

    DeleteExercise(userId, exerciseId, token, callback){
        Functions.FetchDelete(API_URL + `/users/${userId}/trainings/${exerciseId}`, callback, null, { "Authorization": token });
    }
}