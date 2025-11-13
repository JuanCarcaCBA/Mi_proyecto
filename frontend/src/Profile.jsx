// import axios from "axios";
// import { useEffect, useState } from "react";
// import jwt_decode from "jwr-decode";


// const Profile =({serIsAuthenticated}) => {
//     const [profile, setProfile] = useState(null);

//     useEffect(() => {
//         const fechtProfile = async () => {
//             const token = localStorage.getItem("toke");
//             if (!token){
//                 console.log("Token no encontrado")
//                 serIsAuthenticated(False);
//                 return;
//             }

//             try{
//                 const decodeToken = jwt_decode(token)
//                 const userId = decodeToken.userId
//                 const response = await axios.get(
//                     `http://loalhost:3000/api/user/${userId}`
//                     {

//                         headers:{Authorization:`Bearer ${token}`},
//                     }
//                 );
//                 setProfile(response.data.user)
//             }
//         }
//     }
// }