const express = require("express");
const app = express();
const port = process.env.PORT || 3040;

// Addition function
const add= (n1,n2) => {
    return n1+n2;
}

// Addition endpoint
app.get("/add", (req,res)=>{
    try{
    const n1= parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { 
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    const result = add(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

// Subtraction function
const subtract = (n1, n2) => {
    return n1 - n2;
}

// Subtraction endpoint
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1); // parse string queries into floating point numbers
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) { // Checks if n1 is a valid number
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) { // Checks if n2 is a valid number
            throw new Error("n2 incorrectly defined"); 
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statuscode: 200, data: result }); // Returns success response w/ result
    } catch (error) {
        console.error(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() }); // Returns error code w/ message
    }
});

// Multiplication function
const multiply = (n1, n2) => {
    return n1 * n2;
}

// Multiplication endpoint
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

// Division function
const divide = (n1, n2) => {
    return n1 / n2;
}

// Division endpoint
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        if (n2 === 0) // Error if n2 is zero to prevent division by zero
        {
            throw new Error("n2 cannot be divided by zero")
        }
        const result = divide(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

// Starts server and listens on port 3040
app.listen(port,()=> {
    console.log("hello i'm listening to port " + port);
})