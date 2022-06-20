var siva={
    basicInfotmation:{
        name:"siva",
        emailId:"siva29061997@gmail.com",
        contacnumber:"8072153544",
        address:"2/45,perumalpuram,keelavadagarai,periyakum,theni",
        pincode:"625201",        
    },


    workAndExperience:"i am a fresher,willing to work in full stack developer role",
    educationAndQualification:[
        {
            sranderd:"10th",
            nameofTheSchool:"rtu theni",
            yearOfPassing:"2013",
            percentage:"86",
        },
        {
            sranderd:"12th",
            nameofTheSchool:"nsvv dindigul",
            yearOfPassing:"2015",
            percentage:"67",
        },
        {
            college:"iti",
            nameofTheSinstitute:"govtItiTheni",
            yearOfPassing:"2015",
            percentage:"83",
        },
        ],
    strength:[
        "*excellet interpersonal",
        "*willingness to learning new things",
        "*quick learner",
    ],
    exrtaCurrcularActivites:[
        "*district level footBall player",
        "*reading books",
    ],
    languagesKnown:[
        "*tamil",
        "*english",
    ]
}
    
let  sivajson=JSON.stringify(siva);
console.log(sivajson);
let sivaobj=JSON.parse(sivajson);
console.log(sivajson);

