// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');



var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];
students;





function studentAge(arr) {
  arr.forEach(function(student) {

           console.log(student.name);


  });
}
studentAge(students);





function nameCity(arr) {
  arr.forEach(function(student) {

           console.log(student.name + " , " + student.city);


  });
}
nameCity(students);

function boulder(arr) {
  arr.forEach(function(student) {
      if(student.city === "Boulder"){
           console.log(student.name  + student.city);
      }

  });
}
boulder(students);


function older(arr) {
  arr.forEach(function(student) {
      if(student.age > 25){
           console.log(student.name + " is older than " + 25);
      }

  });
}

older(students);






});
