const http = require("http");
const PORT = process.env.PORT || 3500;
const fs =require("fs");
const { error } = require("console");

const server =http.createServer((req,res)=>{
  
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile("index.html",(err,data)=>{
        if(err)
        {
            res.writeHead(404)
            res.write("page not found")
        }
        else
        {
            res.write(data)
        }
        res.end()
    })

})


server.listen(PORT,(error)=>{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(`server is running on ${PORT}`)
    }
})