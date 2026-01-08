import express from 'express'
import Data from '../backend/Data.js'

const app = express()

app.get('/', (req, res) =>{

    // console.log('Server is started.')    // ouput on terminal not console

    // res.send('server is started.')

    setTimeout(() =>{
        res.send('server is starting.')
    },1000)
})


app.get('/api/data', (req, res) =>{

    // console.log('Server is started.')
    // res.send('server is started.')

    // setTimeout(() =>{
    //     res.send('server is starting.')
    // },3000)

    // res.send(Data)

    if(req.query.search){
        const filterdData = Data.filter((data) =>{
            data.title.includes(req.query.search)
            res.send(filterdData)
            return
        })
    }
})


const port = process.env.PORT || 3000;

// const port = 3000;

app.listen(port, () =>{

    console.log(`Serve at http://localhost:${port}`);
})