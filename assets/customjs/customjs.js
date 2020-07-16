//Left Sidebar Active and Deactive Side Menu Show and hide


$(".home").click(function () {
    $('.home').addClass('.active');
    $('.hr-man').removeClass('.active');
    $('.anthil-man').removeClass('.active');
    $('.project-man').removeClass('.active');
    $('.finance-man').removeClass('.active');
    $('.lead-gen').removeClass('.active');
    $('.content-man').removeClass('.active');
    $('.client-man').removeClass('.active');
    $('.presentation').removeClass('.active');
});


$(".hr-man").click(function () {
    console.log("clicked HR Man");
    $('.hr-man').addClass('.active');
    $('.home').removeClass('.active');
    $('.anthil-man').removeClass('.active');
    $('.project-man').removeClass('.active');
    $('.finance-man').removeClass('.active');
    $('.lead-gen').removeClass('.active');
    $('.content-man').removeClass('.active');
    $('.client-man').removeClass('.active');
    $('.presentation').removeClass('.active');
});