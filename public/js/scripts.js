/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 캐릭터 변수 받기
    const audioContainer = document.querySelector('#audioContainer');
    const playBtn = document.querySelector('.js-playBtn');


    const tempBtn01 = document.querySelector('.tempBtn01');
    const tempBtn02 = document.querySelector('.tempBtn02');
    const tempBtn03 = document.querySelector('.tempBtn03');
    const tempBtn04 = document.querySelector('.tempBtn04');
    const tempBtn05 = document.querySelector('.tempBtn05');
    const tempBtn06 = document.querySelector('.tempBtn06');
    const tempBtn07 = document.querySelector('.tempBtn07');
    const tempBtn08 = document.querySelector('.tempBtn08');
    const tempBtn09 = document.querySelector('.tempBtn09');
    const tempBtn10 = document.querySelector('.tempBtn10');
    const tempBtn11 = document.querySelector('.tempBtn11');
    const tempBtn12 = document.querySelector('.tempBtn12');
    const tempBtn13 = document.querySelector('.tempBtn13');
    const tempBtn14 = document.querySelector('.tempBtn14');
    const tempBtn15 = document.querySelector('.tempBtn15');
    const tempBtn16 = document.querySelector('.tempBtn16');
    const tempBtn17 = document.querySelector('.tempBtn17');
    const tempBtn18 = document.querySelector('.tempBtn18');
    const tempBtn19 = document.querySelector('.tempBtn19');
    const tempBtn20 = document.querySelector('.tempBtn20');
    const tempBtn21 = document.querySelector('.tempBtn21');
    const tempBtn22 = document.querySelector('.tempBtn22');
    const tempBtn23 = document.querySelector('.tempBtn23');
    const tempBtn24 = document.querySelector('.tempBtn24');
    const tempBtn25 = document.querySelector('.tempBtn25');
    const tempBtn26 = document.querySelector('.tempBtn26');
    const tempBtn27 = document.querySelector('.tempBtn27');


    const done = document.querySelector('.js-check');
    const reload = document.querySelector('.js-rerun');
    const gamestart = document.querySelector('.js-start');

    const start = document.querySelector('.start');

    values=[];
    charlist=[];

    function addRecord01(){
        var inp = document.getElementsByClassName('tempBtn01')[0].id;
        values.push(inp);
        charlist.push("경비병");
        document.getElementById("01").style.border ="3px solid red "
        alert("경비병 선택 완료");
        }

    function addRecord02(){
        var inp = document.getElementsByClassName('tempBtn02')[0].id;
        values.push(inp);
        charlist.push("도플갱어");
        document.getElementById("02").style.border ="3px solid red "
        alert("도플갱어 선택 완료");
        }

      function addRecord03(){
          var inp = document.getElementsByClassName('tempBtn03')[0].id;
          values.push(inp);
          charlist.push("늑대인간1");
          document.getElementById("03").style.border ="3px solid red "
          alert("늑대인간1 선택 완료");
          }

      function addRecord04(){
            var inp = document.getElementsByClassName('tempBtn04')[0].id;
            values.push(inp);
            charlist.push("늑대인간2");
            document.getElementById("04").style.border ="3px solid red "
            alert("늑대인간2 선택 완료");
            }

      function addRecord05(){
            var inp = document.getElementsByClassName('tempBtn05')[0].id;
            values.push(inp);
            charlist.push("태초의 늑대인간");
            document.getElementById("05").style.border ="3px solid red "
            alert("태초의 늑대인간 선택 완료");
            }

      function addRecord06(){
            var inp = document.getElementsByClassName('tempBtn06')[0].id;
            values.push(inp);
            charlist.push("신비한 늑대인간");
            document.getElementById("06").style.border ="3px solid red "
            alert("신비한 늑대인간 선택 완료");
            }
      function addRecord07(){
              var inp = document.getElementsByClassName('tempBtn07')[0].id;
              values.push(inp);
              charlist.push("하수인");
              document.getElementById("07").style.border ="3px solid red "
              alert("하수인 선택 완료");
            }
      function addRecord08(){
            var inp = document.getElementsByClassName('tempBtn08')[0].id;
            values.push(inp);
            charlist.push("프리메이슨");
            document.getElementById("08").style.border ="3px solid red "
            alert("프리메이슨 선택 완료");
            }
      function addRecord09(){
              var inp = document.getElementsByClassName('tempBtn09')[0].id;
              values.push(inp);
              charlist.push("예언자");
              document.getElementById("09").style.border ="3px solid red "
              alert("예언자 선택 완료");
            }
      function addRecord10(){
            var inp = document.getElementsByClassName('tempBtn10')[0].id;
            values.push(inp);
            charlist.push("견습 예언자");
            document.getElementById("10").style.border ="3px solid red "
            alert("견습 예언자 선택 완료");
            }
      function addRecord11(){
            var inp = document.getElementsByClassName('tempBtn11')[0].id;
            values.push(inp);
            charlist.push("심령 수사관");
            document.getElementById("11").style.border ="3px solid red "
            alert("심령 수사관 선택 완료");
            }
      function addRecord12(){
            var inp = document.getElementsByClassName('tempBtn12')[0].id;
            values.push(inp);
            charlist.push("강도");
            document.getElementById("12").style.border ="3px solid red "
            alert("강도 선택 완료");
            }
      function addRecord13(){
          var inp = document.getElementsByClassName('tempBtn13')[0].id;
          values.push(inp);
          charlist.push("마녀");
          document.getElementById("13").style.border ="3px solid red "
          alert("마녀 선택 완료");
          }


      function addRecord14(){
          var inp = document.getElementsByClassName('tempBtn14')[0].id;
          values.push(inp);
          charlist.push("말썽쟁이");
          document.getElementById("14").style.border ="3px solid red "
          alert("말썽쟁이 선택 완료");
      }


      function addRecord15(){
          var inp = document.getElementsByClassName('tempBtn15')[0].id;
          values.push(inp);
          charlist.push("동네 얼간이");
          document.getElementById("15").style.border ="3px solid red "
          alert("동네 얼간이 강민지 선택 완료");
      }


      function addRecord16(){
          var inp = document.getElementsByClassName('tempBtn16')[0].id;
          values.push(inp);
          charlist.push("주정뱅이");
          document.getElementById("16").style.border ="3px solid red "
          alert("주정뱅이 선택 완료");
      }


      function addRecord17(){
          var inp = document.getElementsByClassName('tempBtn17')[0].id;
          values.push(inp);
          charlist.push("불면증 환자");
          document.getElementById("17").style.border ="3px solid red "
          alert("불면증 환자 선택 완료");
      }


      function addRecord18(){
          var inp = document.getElementsByClassName('tempBtn18')[0].id;
          values.push(inp);
          charlist.push("불면증 환자 도플갱어");
          document.getElementById("18").style.border ="3px solid red "
          alert("불면증 환자 도플갱어 선택 완료");
      }


      function addRecord19(){
          var inp = document.getElementsByClassName('tempBtn19')[0].id;
          values.push(inp);
          charlist.push("계시자");
          document.getElementById("19").style.border ="3px solid red "
          alert("계시자 선택 완료");
      }


      function addRecord20(){
          var inp = document.getElementsByClassName('tempBtn20')[0].id;
          values.push(inp);
          charlist.push("계시자 도플갱어");
          document.getElementById("20").style.border ="3px solid red "
          alert("계시자 도플갱어 선택 완료");
      }


      function addRecord21(){
          var inp = document.getElementsByClassName('tempBtn21')[0].id;
          values.push(inp);
          charlist.push("유물 관리자");
          document.getElementById("21").style.border ="3px solid red "
          alert("유물 관리자 선택 완료");
      }


      function addRecord22(){
          var inp = document.getElementsByClassName('tempBtn22')[0].id;
          values.push(inp);
          charlist.push("유물 관지자 도플갱어");
          document.getElementById("22").style.border ="3px solid red "
          alert("유물 관지자 도플갱어 선택 완료");
      }


      function addRecord23(){
          var inp = document.getElementsByClassName('tempBtn23')[0].id;
          values.push(inp);
          charlist.push("사냥꾼");
          document.getElementById("23").style.border ="3px solid red "
          alert("사냥꾼 선택 완료");
      }


      function addRecord24(){
          var inp = document.getElementsByClassName('tempBtn24')[0].id;
          values.push(inp);
          charlist.push("무두장이");
          document.getElementById("24").style.border ="3px solid red "
          alert("무두장이 선택 완료");
      }



      function addRecord25(){
          var inp = document.getElementsByClassName('tempBtn25')[0].id;
          values.push(inp);
          charlist.push("잠자는 늑대인간");
          document.getElementById("25").style.border ="3px solid red "
          alert("잠자는 늑대인간 선택 완료");
      }


      function addRecord26(){
          var inp = document.getElementsByClassName('tempBtn26')[0].id;
          values.push(inp);
          charlist.push("호위병");
          document.getElementById("26").style.border ="3px solid red "
          alert("호위병 선택 완료");
      }

      function addRecord27(){
          var inp = document.getElementsByClassName('tempBtn01')[0].id;
          values.push(inp);
          charlist.push("시민");
          document.getElementById("27").style.border ="3px solid red "
          alert("시민 강민지 선택 완료");
          }


      function check(){
          if (charlist.length <1){
              alert("선택된 캐릭터가 없습니다.");
          }else {
            //localStorage.setItem("key", JSON.stringify(values));

            alert("선택된 캐릭터 :"+charlist);

          }
      }

      function funcstart(){


        localStorage.setItem("key", JSON.stringify(values));

        alert("선택된 캐릭터 :"+charlist);
      }



      function rerun(){
        values=[]
        charlist=[]
        alert("캐릭터를 처음부터 다시 선택합니다.")
      }






    tempBtn01.addEventListener('click', addRecord01);
    tempBtn02.addEventListener('click', addRecord02);
    tempBtn03.addEventListener('click', addRecord03);
    tempBtn04.addEventListener('click', addRecord04);
    tempBtn05.addEventListener('click', addRecord05);
    tempBtn06.addEventListener('click', addRecord06);
    tempBtn07.addEventListener('click', addRecord07);
    tempBtn08.addEventListener('click', addRecord08);
    tempBtn09.addEventListener('click', addRecord09);
    tempBtn10.addEventListener('click', addRecord10);
    tempBtn11.addEventListener('click', addRecord11);
    tempBtn12.addEventListener('click', addRecord12);
    tempBtn13.addEventListener('click', addRecord13);
    tempBtn14.addEventListener('click', addRecord14);
    tempBtn15.addEventListener('click', addRecord15);
    tempBtn16.addEventListener('click', addRecord16);
    tempBtn17.addEventListener('click', addRecord17);
    tempBtn18.addEventListener('click', addRecord18);
    tempBtn19.addEventListener('click', addRecord19);
    tempBtn20.addEventListener('click', addRecord20);
    tempBtn21.addEventListener('click', addRecord21);
    tempBtn22.addEventListener('click', addRecord22);
    tempBtn23.addEventListener('click', addRecord23);
    tempBtn24.addEventListener('click', addRecord24);
    tempBtn25.addEventListener('click', addRecord25);
    tempBtn26.addEventListener('click', addRecord26);
    tempBtn27.addEventListener('click', addRecord27);


    done.addEventListener('click', check);
    reload.addEventListener('click', rerun);


    gamestart.addEventListener('click',funcstart)
});
