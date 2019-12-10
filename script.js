
    document.getElementById("hart").addEventListener("mouseover", hartTurn);

    function hartTurn() {
        gsap.to('#hart', {duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});

    }

    document.getElementById("blackBox").addEventListener("click", boxMove);
    document.getElementById("_x3C_m").addEventListener("click", boxMove);


    let moved = false;
    function boxMove() {


            gsap.to('#blackBox', {duration: 1,  x: -800});
            gsap.to('#blackBox', {delay:1 ,duration: 1,  y: -1070});
            gsap.to('#blackBox', {delay:2 ,duration: 1,  x: 310});
            gsap.to('#blackBox', {delay:3 ,duration: 1,  y: 0});
            gsap.to('#blackBox', {delay:4 ,duration: 1,  x: 0});

            gsap.to('#_x3C_m', {duration: 1,  x: -800});
            gsap.to('#_x3C_m', {delay:1 ,duration: 1,  y: -1070});
            gsap.to('#_x3C_m', {delay:2 ,duration: 1,  x: 310});
            gsap.to('#_x3C_m', {delay:3 ,duration: 1,  y: 0});
            gsap.to('#_x3C_m', {delay:4 ,duration: 1,  x: 0});

            gsap.to('#_x3C_g_x3E_', {delay:3 ,duration: 1,  y: 120});
            gsap.to('#_x3C_g_x3E_', {delay:5 ,duration: 1,  y: 0});

            anders();

    }


_x3C_aAnders_x3E_


function anders() {
  gsap.to('#_x3C_aAnders_x3E_', {delay:0 ,duration: 1,  y: -70});
  gsap.to('#_x3C_aAnders_x3E_', {duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});
  gsap.to('#_x3C_aAnders_x3E_', {delay:.8 ,duration: 1,  y: 0});

  gsap.to('#_x3C_n_x3E_', {delay:1 ,duration: 1,  y: -70});
  gsap.to('#_x3C_n_x3E_', {delay:1 ,duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});
  gsap.to('#_x3C_n_x3E_', {delay:1.8 ,duration: 1,  y: 0});

  gsap.to('#_x3C_d_x3E_', {delay:2 ,duration: 1,  y: -70});
  gsap.to('#_x3C_d_x3E_', {delay:2 ,duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});
  gsap.to('#_x3C_d_x3E_', {delay:2.8 ,duration: 1,  y: 0});

  gsap.to('#_x3C_e_x3E_', {delay:3 ,duration: 1,  y: -70});
  gsap.to('#_x3C_e_x3E_', {delay:3 ,duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});
  gsap.to('#_x3C_e_x3E_', {delay:3.8 ,duration: 1,  y: 0});

  gsap.to('#_x3C_r_x3E_', {delay:4 ,duration: 1,  y: -70});
  gsap.to('#_x3C_r_x3E_', {delay:4 ,duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});
  gsap.to('#_x3C_r_x3E_', {delay:4.8 ,duration: 1,  y: 0});

  gsap.to('#_x3C_s_x3E_', {delay:5 ,duration: 1,  y: -70});
  gsap.to('#_x3C_s_x3E_', {delay:5 ,duration: 2, rotation: "+=360", transformOrigin: "50% 50%"});
  gsap.to('#_x3C_s_x3E_', {delay:5.8 ,duration: 1,  y: 0});


}
