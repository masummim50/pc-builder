const { default: mongoose } = require("mongoose")

const connectToMongodb = async ()=> {
    try {
        // await mongoose.connect(process.env.DATABASE_URI)
        await mongoose.connect("mongodb://127.0.0.1:27017/pcbuilder")
        console.log("database connected");
    } catch (error) {
        console.log("error connecting to database: ", error)
    }
}

export default connectToMongodb;