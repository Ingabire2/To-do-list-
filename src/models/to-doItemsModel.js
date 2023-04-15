import mongoose from "mongoose";

const toDoItemsSchema = new mongoose.Schema({
 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },

    title:{
        type:String,
    },
    description:{
        type:String
    },
    dueDate:{
        type:String
    },
    
  
}, {
    timestamps:true,
});

toDoItemsSchema.pre(/^find/, function(next){
    this.populate({
        path:"User",
    });
    
  next();
});

export default mongoose.model('toDoItems',toDoItemsSchema);