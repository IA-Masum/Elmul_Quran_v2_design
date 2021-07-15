$(document).ready(function () {

  let classInfos = [
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    },
    {
      course: "Web Development",
      teacher: "Sobuj Ahmed",
      student: "IA Masum",
      time: "8:00 - 9:00"
    }

  ];

  let bgs = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']


  $('.load-class-btn').click(function () {
    let mainParent = $(this).parent().parent().children().first();
    let myParent = $(this).parent();

    myParent.html(`<i class="fas fa-spinner fa-spin"></i>`)

    setTimeout(function(){

      classInfos.forEach(function (info) {
        mainParent.append(getClassInfo(info))
      })
      
      myParent.remove()
    }, 500)
  });



  let getClassInfo = (classInfo) => {

    return `
                  <div class="m-1">
                    <div type="button" data-toggle="modal" data-target="#class-details"
                      class="bg-${bgs[getRandom(0, bgs.length - 1)]} elm-round py-4 px-3">
                      <strong><i class="fas fa-book"></i> &MediumSpace; ${classInfo.course}</strong>
                      <br>
                      <sapn><i class="fas fa-chalkboard-teacher"></i> &MediumSpace; ${classInfo.teacher}</sapn>
                      <br>
                      <sapn><i class="fas fa-user-graduate"></i> &MediumSpace; ${classInfo.student}</sapn>
                      <br>
                      <sapn><i class="fas fa-clock"></i> &MediumSpace; ${classInfo.time}</sapn>
                    </div>
                  </div>
    
    `
  }

  let getRandom = (from, to) => {
    return from + (Math.round(Math.random() * (to - from)));
  }


  $('.tab-btn').click(function () {


    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    
    
    $('.tab-pane').removeClass('active');
    $('.tab-pane').removeClass('show');

    let target = $(this).data().target

    setTimeout(function(){
      $(target).addClass('show');
      $(target).addClass('active');
    }, 10);
  });

})


function copyNumber(elm){
  let number = elm.previousElementSibling.innerText;

  let input = document.createElement('input');
  input.type = 'text';
  elm.appendChild(input);
  input.setAttribute('value', number);
  input.select();
  document.execCommand("copy");
  input.remove();
  toastr.success("Copied...")
  toastr

}

