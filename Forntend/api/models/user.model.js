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
        default:"https://www.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_36332651.htm#query=&position=2&from_view=keyword&track=sph&uuid=079469ce-edf3-4060-88e4-427d7dc258e6",
    }
});

const User = mongoose.model('User', userSchema);

export default User;
