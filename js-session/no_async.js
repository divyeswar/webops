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
    setTimeout(()=>{
        posts.push(post);
    },2000)
}
getposts();
createpost({title:"third",body:"this is third post"})
getposts();