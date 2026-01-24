const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testDataBase')
.then(()=>{"Mongo Connected Successfully"})
.catch(err=>{"Mongo Connecteion Failed"+err});

const courseSchema=mongoose.Schema({
        name:{type:String,primary:true,unique:true},
        hours: Number,
        isAvailable:Boolean,
        registeredOn:{type:Date, default:Date.now}

})

const courses=mongoose.model('Course',courseSchema);

async function createCourse(){

    const courseitem=new courses({
        name:"RubyAndRails",
        hours:18,
        isAvailable:true,
    })
    const result=await courseitem.save();
    console.log(result);
}
async function deleteCourse() {
    const courseitem=await courses.delete({name})
}
async function showCourse(){
    // const courseitem=await courses.find({name:"JavaScript"}).select({name:1,registeredOn:1});
    const courseitems=await courses.find();
    console.log(courseitems);
}
async function EligibleCoursesCount(){
    const courseitem=await courses.find({
        isAvailable: true,
        hours: { $gte: 8, $lte: 19 }
    });
    const courseitem2=await courses.find({
        $and: [
            { name: "JavaScript" },
            { hours: { $lte: 15 } }
        ]
    });
    const count = await courses.countDocuments({
        isAvailable: true,
        hours: { $gte: 8, $lte: 19 }
    });
    console.log("Ans:"+courseitem+" \nCount "+count);

}
EligibleCoursesCount();


