let finalData=[]

var firstInput = [
  {
    node: {
      name: "Elliot Alderson",
      age: "26",
      qualification: "Btech",
      jobTitle: "UI Developer",
      collegeEducation: {
        edges: [
          {
            node: {
              course: "Btech",
              collegeName: "MITS",
              year: "2017"
            }
          }
        ]
      },
      schoolEducation: {
        edges: [
          {
            node: {
              course: "High School",
              schoolName: "STPS",
              year: "2013"
            }
          }
        ]
      }
    }
  },
  {
    node: {
      name: "Darlene Alderson",
      age: "32",
      qualification: "MBA",
      jobTitle: "HR Manager",
      collegeEducation: {
        edges: [
          {
            node: {
              course: "MBA",
              collegeName: "IIM",
              year: "2018"
            }
          }
        ]
      },
      schoolEducation: {
        edges: [
          {
            node: {
              course: "High School",
              schoolName: "Nirmala High School",
              year: "2010"
            }
          }
        ]
      }
    }
  }
];

let secondInput = [
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Qualification",
    key: "qualification"
  },
  {
    title: "Job Title",
    key: "jobTitle"
  },
  {
    title: "College Education",
    key: "collegeEducation",
    children: [
      {
        title: "College",
        key: "education",
        children: [
          {
            title: "Course",
            key: "collegeEducation",
            dataKey: "course"
          },
          {
            title: "College Name",
            key: "collegeEducation",
            dataKey: "collegeName"
          },
          {
            title: " Year",
            key: "collegeEducation",
            dataKey: "year"
          }
        ]
      }
    ]
  },
  {
    title: "School Education",
    key: "schoolEducation",
    children: [
      {
        title: "College",
        key: "education",
        children: [
          {
            title: "Course",
            key: "schoolEducation",
            dataKey: "course"
          },
          {
            title: "School Name",
            key: "schoolEducation",
            dataKey: "schoolName"
          },
          {
            title: "Year",
            key: "schoolEducation",
            dataKey: "year"
          }
        ]
      }
    ]
  }
];


let i;
for (i = 0; i < secondInput.length; i++) {
   if(secondInput[i].key == 'name'){
     let data={
       title:'name'
      }
    let i;
    for (i = 0; i < firstInput.length; i++) {
       data[`person${i+1}`]= firstInput[i].node.name
    }
    finalData.push(data)
   }else if(secondInput[i].key == 'age'){
    let data={
      title:'age'
     }
   let i;
   for (i = 0; i < firstInput.length; i++) {
      data[`person${i+1}`]= firstInput[i].node.age
   }
   finalData.push(data)
   }else if(secondInput[i].key == 'qualification'){
    let data={
      title:'qualification '
     }
   let i;
   for (i = 0; i < firstInput.length; i++) {
      data[`person${i+1}`]= firstInput[i].node.qualification 
   }
   finalData.push(data)
  }else if(secondInput[i].key == 'jobTitle'){
    let data={
      title:'jobTitle'
     }
   let i;
   for (i = 0; i < firstInput.length; i++) {
      data[`person${i+1}`]= firstInput[i].node.jobTitle
   }
   finalData.push(data)
  }else if(secondInput[i].key == 'collegeEducation'){
    let data={
      title:'collegeEducation'
     }
     data.children=[]
     let course ={
       title:'course'
     }
     let collegeName ={
      title:'collegeName'
    }
    let year ={
      title:'year'
    }
   let i;
   for (i = 0; i < firstInput.length; i++) {
      firstInput[i].node.collegeEducation.edges.forEach((res,index)=>{
        course[`person${index+i+1}`]=res.node.course
        collegeName [`person${index+i+1}`]=res.node.collegeName
        year[`person${index+i+1}`]=res.node.year
      })
   }
   data.children.push(course)
    data.children.push(collegeName)
      data.children.push(year)
   finalData.push(data)
  }else if(secondInput[i].key == 'schoolEducation'){
    let data={
      title:'schoolEducation'
     }
     data.children=[]
     let course ={
       title:'course'
     }
     let collegeName ={
      title:'schoolName'
    }
    let year ={
      title:'year'
    }
   let i;
   for (i = 0; i < firstInput.length; i++) {
      firstInput[i].node.schoolEducation.edges.forEach((res,index)=>{
        course[`person${index+i+1}`]=res.node.course
        collegeName [`person${index+i+1}`]=res.node.schoolName
        year[`person${index+i+1}`]=res.node.year
      })
   }
   data.children.push(course)
    data.children.push(collegeName)
      data.children.push(year)
   finalData.push(data)
  }
}
console.log(finalData,"-finalData")
