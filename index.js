const express=require('express');
const {Server}=require('socket.io')
const http=require('http')

const {db_connection}=require('./config/db')
const {UserRouter}=require('./router/user.router')

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    // res.send("Hello")
    res.sendFile(__dirname+'/index.html')
})

app.post('/post',UserRouter)
app.get('/get',UserRouter)

const httpServer=http.createServer(app)

httpServer.listen(8080, async()=>{
    console.log("connected")
    await db_connection
})

    const io= new Server(httpServer);

io.on('connection',(socket)=>{
    console.log("Client connected")

    socket.on('msg',(msg)=>{
        console.log(msg)
    })
   
let interval;
    socket.on('interval',(msg)=>{
        interval=msg
    })
   
    //A_curr
    setInterval(()=>{
    const A_price=Math.floor(Math.random()*10)+50
        io.emit('A_price',`${A_price}`)
    },500)
    //B_curr
    setInterval(()=>{
        const B_price=Math.floor(Math.random()*10)+50
        io.emit('B_price',`${B_price}`)
    },500)
    
    //C_curr
    setInterval(()=>{
        const C_price=Math.floor(Math.random()*10)+50
        io.emit('C_price',`${C_price}`)
    },500)
   
    socket.on('jay',(hi)=>{
        console.log(hi)
    })
})



