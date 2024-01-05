import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw2U9LxfLSrvnQR__aEDl0SU&ust=1704565916245000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCJD_toPxxoMDFQAAAAAdAAAAABAJ",
    }
});

const User = mongoose.model('User', userSchema);

export default User;
