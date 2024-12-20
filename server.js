const math =require("./math")

console.log(math.add(3,3));
console.log(math.mul(3,5))

const fs = require("fs")
const path =require("path")

fs.readFile(path.join(__dirname,'files','start.txt'),"utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data)
})

fs.writeFile(path.join(__dirname,"files","end.txt"),"hi iam siva",(err)=>{
    if(err)throw err
    console.log("writing completed")
})
 
fs.appendFile(path.join(__dirname,"files","siva.txt"),"\nnext express js",(err)=>{
    if(err)throw err
    console.log("append completed")
})


fs.writeFile(path.join(__dirname,"files","rk.txt"),"Road to MERN Stack",(err)=>{
    if(err)throw err
    console.log("writing completed");

    fs.appendFile(path.join(__dirname,"files","rk.txt"),"\n currently learning mongoose",(err)=>{
        if(err)throw err
        console.log("append completed")
    })
})

fs.writeFile(path.join(__dirname,"files","siva.txt"),"hi hello",(err)=>{
    if(err)throw err
    console.log("writing completed")

    fs.rename(path.join(__dirname,"files","siva.txt"),
        path.join(__dirname,"files","jeeva.txt"),(err)=>{
            if(err)throw err
            console.log("rename completed")
        }
    )
})

// above inside file handling opertion lead to aysnchronous problem ,so we are move to promises method

const fsPromises = require("fs").promises

const fileop = async ()=>{
    const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),"utf-8",(err,data)=>{
            if(err) throw err;
            console.log(data)
         })
    await fsPromises.writeFile(path.join(__dirname,"files","siva.txt"),"hi hello",(err)=>{
            if(err)throw err
            console.log("writing completed")
         })

    await fsPromises.appendFile(path.join(__dirname,"files","siva.txt"),"hi siva",(err)=>{
            if(err)throw err
            console.log("writing completed")
         })

    await fsPromises.rename(path.join(__dirname,"files","siva.txt"),
                 path.join(__dirname,"files","jeeva.txt"),(err)=>{
                     if(err)throw err
                     console.log("rename completed")
                 }
             )

    await fsPromises.unlink(path.join(__dirname,"files","jeeva.txt"))
}

fileop()

// bigfiles manging
const rs = fs.createReadStream(path.join(__dirname,"files","bigfile.txt"),'utf-8')
const ws = fs.createWriteStream(path.join(__dirname,"files","new_bigfile.txt"),"utf-8")
rs.pipe(ws)


// create directory (folder)
fs.mkdir("./new",(err)=>{
    if(err)throw err
    console.log("folder created")
})

// remove directory
fs.rmdir("./new",(err)=>{
    if(err)throw err
    console.log("folder removed")
})

// existsSync method
if(!fs.existsSync("./new")){
    fs.mkdir("./new",(err)=>{
        if(err)throw err
        console.log("folder created")
    })
}

if(fs.existsSync("./new")){
    fs.rmdir("./new",(err)=>{
        if(err)throw err
        console.log("folder removed")
    })
}




