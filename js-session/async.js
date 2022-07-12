var posts=[
    {title:"first",body:"this is first post"},
    {title:"second",body:"this is second post"}
]
function getposts(){
    setTimeout(
        ()=>{
            let output="";
            posts.forEach((post,index)=>{
                output+=post.title;
                output+=" "
            })
            console.log(output)
        },1000
    )
}
function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            var error = false;
            if(!error){resolve();}
            else{reject("Error:something went wrong");}
        },2000)
    });
}
async function init(){
    await createpost({title:"third",body:"This is third post"});
    getposts();
}
init()
// getposts();
// createpost({title:"third",body:"this is third post"})
// getposts();
