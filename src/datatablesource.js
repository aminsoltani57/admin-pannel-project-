export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'user', width: 230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
           
        )
    }, },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Status', width: 160, renderCell:(params)=>{
        return(
            <div className={`cellwithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    } },
]
export const userRows=[
{
    id:1,
    username:"snow",
    img:"https://m.media-amazon.com/images/I/61Jc1XG4gKL._AC_UL480_FMwebp_QL65_.jpg",
    email:"isnow@gmail.com",
    age:18,
    status:"passive",
},
{
    id:2,
    username:"dog",
    img:"https://m.media-amazon.com/images/I/61e4aTK3Z0L._AC_UL480_FMwebp_QL65_.jpg",
    email:"isnow@gmail.com",
    age:40,
    status:"active",
},

{
    id:3,
    username:"parents",
    img:"https://m.media-amazon.com/images/I/61lWT7lrBML._AC_UL480_FMwebp_QL65_.jpg",
    email:"isnow@gmail.com",
    age:25,
    status:"pending",

},
{
    id:4,
    username:"parents",
    img:"https://m.media-amazon.com/images/I/61lWT7lrBML._AC_UL480_FMwebp_QL65_.jpg",
    email:"isnow@gmail.com",
    age:35,
    status:"active",

},
{
    id:5,
    username:"bags",
    img:"https://m.media-amazon.com/images/I/31yeAS3NakS.jpg",
    email:"isnow@gmail.com",
    age:30,
    status:"pending",

},
{
    id:6,
    username:"glasses",
    img:"https://m.media-amazon.com/images/I/518rrnjQqFL.jpg",
    email:"isnow@gmail.com",
    age:15,
    status:"passive",

},

]