window.onload = function(){
    var team1 = document.getElementById("TeamMemberId1");

    team1.addEventListener('mouseover',function(){
        document.getElementById('TeamMemberIcon1').className= "TeamMemberSocial animated slideInLeft";
    });

    team1.addEventListener('mouseleave',function(){
        document.getElementById('TeamMemberIcon1').className= "TeamMemberSocial animated fadeOut";
    });
    var team2 = document.getElementById("TeamMemberId2");

    team2.addEventListener('mouseover',function(){
        document.getElementById('TeamMemberIcon2').className= "TeamMemberSocial animated slideInLeft";
    });

    team2.addEventListener('mouseleave',function(){
        document.getElementById('TeamMemberIcon2').className= "TeamMemberSocial animated fadeOut";
    });
    var team3 = document.getElementById("TeamMemberId3");

    team3.addEventListener('mouseover',function(){
        document.getElementById('TeamMemberIcon3').className= "TeamMemberSocial animated slideInLeft";
    });

    team3.addEventListener('mouseleave',function(){
        document.getElementById('TeamMemberIcon3').className= "TeamMemberSocial animated fadeOut";
    });
}