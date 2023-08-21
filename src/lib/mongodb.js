const { default: mongoose } = require("mongoose")

const connectToMongodb = async ()=> {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("database connected");
    } catch (error) {
        console.log("error connecting to database: ", error)
    }
}

export default connectToMongodb;