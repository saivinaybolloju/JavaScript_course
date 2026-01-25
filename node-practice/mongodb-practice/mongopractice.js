const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testDataBase')
.then(()=>{console.log("Mongo Connected Successfully")})
.catch(err=>{console.log("Mongo Connecteion Failed"+err)});

const courseSchema=mongoose.Schema({
        name:{type:String,unique:true,minlength:3,maxlength:15,required:true},
        creator:{type:String,required:true},
        tags:{type:Array,validate:{
            validator:function(tags){
                return tags.length>1;
            }
        }},
        category:{
            type:String,
            required:true,
            enum:["DSA","DataScience","WebDev","FullStack"],
        },
        isAvailable:{type:Boolean,required:true},
        registeredOn:{type:Date, default:Date.now},
        rating:{type:Number,required:function(){return this.isAvailable}}
})

const Course=mongoose.model('Course',courseSchema);

async function createCourse(){

    const courseitem=new Course({
        name:"MONGODB",
        creator:"Compass",
        tags:["mongodb","javascript"],
        category:"WebDev",
        isAvailable:true,
        rating:9.5,
    })
    // console.log(result);
    try{
        await courseitem.validate();
        const result=await courseitem.save();
        console.log(result);
    }catch(err){
        console.log(err.message);
    }
}
createCourse();

async function showCourse(){
    // const courseitem=await Course.find({name:"JavaScript"}).select({name:1,registeredOn:1});
    const courseitems=await Course.find();
    console.log(courseitems);
}
//showCourse();

async function EligibleCoursesCount(){
    const courseitem=await Course.find({
        isAvailable: true,
        hours: { $gte: 8, $lte: 19 }
    });
    const courseitem2=await Course.find({
        $and: [
            { name: "JavaScript" },
            { hours: { $lte: 15 } }
        ]
    });
    const count = await Course.countDocuments({
        isAvailable: true,
        hours: { $gte: 8, $lte: 19 }
    });
    console.log("Ans:"+courseitem+" \nCount "+count);

}
// EligibleCoursesCount();

async function DeleteCourse(){
    //await Course.deleteOne({ name: "JavaScript" });
    //await Course.deleteMany({ isAvailable: false });
    //await Course.findOneAndDelete({ name: "JavaScript" });
    
    const courseItem=await Course.findByIdAndDelete('6974bb4cf332233f79bf97b1');
    console.log(courseItem);
}
// DeleteCourse();



