const {Router} = require('express')
// const {ObjectId} = require('mongodb')
const userApp = Router()

userApp.use((req,res,next)=>{
    // blogs=req.app.get('blogs')
    next();
});

userApp.post('/createblog', async (req, res) => {
    // console.log(req.body)
    const newBlog = req.body;
    const result = await blogs.insertOne(newBlog);
    res.send(result);
});

// userApp.delete('/deleteblog/:id', async (req, res) => {
//     const blogId = req.params.id;
//     try {
//         const result = await blogs.deleteOne({ _id: new ObjectId(blogId) });
//         if (result.deletedCount === 1) {
//             res.status(200).send({ message: 'Blog post deleted successfully' });
//         } else {
//             res.status(404).send({ message: 'Blog post not found' });
//         }
//     } catch (error) {
//         console.error('Error deleting blog post:', error);
//         res.status(500).send({ message: 'Error deleting blog post', error });
//     }
// });

// userApp.get('/userblogs',async (req,res)=>{
    
// })


module.exports = userApp