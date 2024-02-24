// task :-1

let data ={
      sophia:{
                id:33 ,
                study: [
                                {primary:[
                                                {school_name:"ABC Primary School"},
                                               {location:'Peters burg'}
                                ]},
                                {secondary:[
                                                {school_name:"ABC Secondary School"},
                                                {location:"St Lorence"}

                                ]}
                ]
      }          
}

console.log(data.sophia.study[1].secondary[1]);

// task :-2

let students ={
                2222:{
                                name:"Jack",
                                section:"C",
                                class:"IX",
                                address:{
                                                "building no" : 12,
                                                "street":"St.Jonson",
                                                "city": "PetersBurg",
                                                "country":"UK"
                                }
                },
                3333:{
                               
                                name:"Herry",
                                section:"D",
                                class:"X",
                                address:{
                                                "building no" : 85,
                                                "street":"DC road",
                                                "city": "Kachukhet",
                                                "country":"Bangladesh"
                                } 
                }
}

console.log(students[2222].address.city)
console.log(students[3333].address.city)