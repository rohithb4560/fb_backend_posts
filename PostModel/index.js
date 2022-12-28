const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userImage: {
        type: String,
        trim: true,
        required: true
      
    },
    userNamePost:{
        type: String,
        required: true
    },
    time:{
        type:Date,
        default:new Date()

    },
    caption:{
        type:String
    },
    postImage:{
        type:String
    },
    like:{
        type: String
    },
    comment:{
        type:String
    },
    share:{
        type:String
    }
},{
   
    timeStamps:true
})
module.exports.post = new mongoose.model("post",postSchema)

// {
//     userImage:
//       "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     userNamePost: "Ashutosh",
//       time: new Date().toDateString(),
//     caption: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     postImage: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     like: 17,
//     comment: 487,
//     share: "",
//   },