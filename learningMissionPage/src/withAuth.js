

export default function withAuth(ComponentInside, login) {
    // debugger;
    if(localStorage.getItem("token")){
     return ComponentInside ;
    }
    else{
       return login;
    }
}  
     