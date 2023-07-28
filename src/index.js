import app from "./app.js";
import "dotenv/config.js";
    
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});















