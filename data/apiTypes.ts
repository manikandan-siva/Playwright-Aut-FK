//single user
export interface User{
    id:number
    email:string
    first_name:string
    last_name:string
    avatar:string
}

//support
export interface Support{
    url:string
    text:string
}

//response
export interface UserListResponse{
    page:number
    per_page:number
    total:number
    total_pages:number
    data:User[]
    support:Support
}

//singe user
export interface SingleUser{
    data:User
    support:Support
}

//post new user
export interface CreateNewUser{
    name:string
    job:string
    id:string
    createdAt:DOMHighResTimeStamp
}

export interface TokenGen{
    token:string
}

export interface ErrorRes{
    error:string
}