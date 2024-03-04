const mongoose = require("mongoose")

const connect = async () => {
    try {
             mongoose.set("strictQuery", false)
                const conn = await mongoose.connect(process.env.DATABASE)
                     console.log(`connected to mongoDB database: ${conn.connection.host}`)
         }     catch(error) {
                     console.log(`Error in mongoDB: ${error}`)
    }
}

module.exports = connect;