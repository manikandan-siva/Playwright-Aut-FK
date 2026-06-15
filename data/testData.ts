export const Users={
    valid:{
        uid: process.env.USER!,
        pwd:process.env.PWD!
    },
     invalid:{
        uid:'fakeuser',
        pwd:'wrongpwd'
     },
     empty:{
        uid:'',
        pwd:''
     }
}

export const Urls={
    login:'/V1/index.php',
    dashboard:'/V1/html/Managerhomepage.php',
    newCustomer:'/V1/html/addcustomerpage.php'
}