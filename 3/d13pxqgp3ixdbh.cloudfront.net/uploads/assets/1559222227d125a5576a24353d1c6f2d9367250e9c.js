var usersOnline  = 500;       
var platformSelected = 0;

$( document ).ready( function( ) {

  $.fn.extend({

    animateCss: function( animationName, callback ) {

      var animationEnd = ( function( el ) {

        var animations = {

          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',

        };

        for( var t in animations ) {

          if ( el.style[ t ] !== undefined ) {

            return animations[ t ];

          }

        }

      } )( document.createElement( 'div' ) );

      this.addClass( 'animated ' + animationName ).one( animationEnd, function() {

        $( this ).removeClass( 'animated ' + animationName );

        if ( typeof callback === 'function' ) callback();

      });

      return this;

    },

  });

  //---------------------------[ Date Function ]--------------------------------

  function getDate() {

    var d = new Date();

  Date.prototype.monthNames = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
  ];

  Date.prototype.getMonthName = function() {

      return this.monthNames[ this.getMonth() ];

  };

  Date.prototype.getYear = function() {

    return this.getFullYear();

  };

  Date.prototype.getDay = function() {

    return this.getDate();

  };

  Date.prototype.getShortMonthName = function () {

      return this.getMonthName().substr( 0, 3 );

  };

  var finalDate = d.getDate() + " " + d.getShortMonthName() + " " + d.getYear();

    return finalDate; 

  }

  //--------------------------[ Online Users Function ]-----------------------------

  function getOnlineUsers() {

    var randCalc = Math.floor( Math.random() * 10 + 1 );

    if ( randCalc <= 5 ) {

      usersOnline = usersOnline + Math.floor( Math.random() * 10 + 1 );

    } else {

      usersOnline = usersOnline - Math.floor( Math.random() * 10 + 1 );

    }

    $( '.server-users' ).html( usersOnline );


  }

  setInterval( function() { getOnlineUsers() }, 1000 );

  //-------------------------[ Server Configuration ]-------------------------------  

  $( '.server-date' ).html( getDate() );
  
  //---------------------------[ Recent Activity ]-------------------------------

//  function newActivity() {
//
//      var users    = [ '441Binder','Johnny', 'Attacklord', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
//                       'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
//                       'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoo' ];
//          
//        var points   = [ '1000', '2500', '6000', '10000' ];           
//
//        var point    = points[ Math.floor( Math.random() * points.length ) ];  
//        var user     = users[ Math.floor( Math.random() * users.length ) ]; 
//
//        $( '.recent-activity-column row' ).remove();
//
//        $( '.recent-activity-column' ).hide().html('<div class="row">' +
//          '<div class="recent-activity-title"><b class="ra-username"><img class="user-icon" src="https://bucket.cpabuild.com/uploads/153077953674a1c91b5b744af2b0f379413ba2bc70.png">' +" " + user + '</b> <span>Recent Activity</span></div>' +
//            '<div class="col-12">' +
//              '<div class="text-center bounceIn activity-column">' +
//                '<img class="img-fluid points-img" src="https://bucket.cpabuild.com/uploads/1559154955b44831021c7da4a984c76d2ebd942353.png" /><br />' +
//                '<b class="js-points-activity"><i class="fas fa-spinner fa-spin"></i></b><br />' +
//                '<span>V-Bucks</span>' +
//              '</div>' +
//            '</div>' +
//            '<div class="recent-activity-footer">' +
//              '<div class="wizard-steps-container">' +
//                '<div class="progress-bar-container">' +
//                  '<div class="progress-bar"></div>' +
//                '</div>' +
//                '<div class="steps">' +
//                  '<div class="step active"><span class="label">Generation</span></div>' +
//                  '<div class="step active"><span class="label jsVerifyActivity">Verification</span></div>' +
//                  '<div class="step last-step"><span class="label"></span></div>' +
//                '</div>' +
//              '</div>' +
//            '</div>' +
//        '</div>').show();       
//
//           $( '.js-points-activity' ).countTo({
//
//                from: 10,
//                to: point,
//                speed: 300,
//                refreshInterval: 1,       
//                onComplete: function ( value ) {  
//
//                  $( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'width', '80%' );
//                  $( '.jsVerifyActivity' ).html( 'Verifying <i class="fas fa-spinner fa-spin"></i>' );
//
//                  setTimeout( function() {
//
//                    $( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'width', '100%' );
//                    $( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'background', '#00922d' );                  
//                    $( '.step' ).css( 'background', '#00922d' );                  
//                    $( '.jsVerifyActivity' ).html( 'Verified <i class="fas fa-check"></i>' );
//                    $( '.jsVerifyActivity' ).css( 'color', '#00a735' );
//                    $( '.last-step' ).addClass( 'active' );
//
//                    setTimeout( function() {
//
//                      setTimeout( newActivity, 2000 );
//
//                    }, 2000 );
//
//                  }, 4000 );
//                  
//                }
//
//            });
//
//    }
//
//  newActivity();

  //----------------------------[ Platform Select ]-------------------------------- 

  $( '.packetlist ul li' ).click( function() {

    $( '.packetlist ul li' ).removeClass( 'package-active' );
    $( this ).addClass( 'package-active' );

    $( '#packModal' ).modal( 'hide' ); 
    $( '#loadingModal' ).modal({ backdrop: 'static', keyboard: false }); 


    setTimeout( function() {

      $( '.loading-text' ).html( 'Scraping data<span class="blink">...</span>' );

      setTimeout( function() {

          $( '.loading-text' ).html( 'Saving data<span class="blink">...</span>' );

          setTimeout( function() {

              $( '.loading-text' ).html( 'Hacking database<span class="blink">...</span>' );

              setTimeout( function() {

                  $( '.loading-text' ).html( 'Hacked!' );

                  setTimeout( function() {

                      $( '.loading-text' ).html( '<span class="blink" style="color: red;">Anti-Bot verification failed!</span>' );

                      setTimeout( function() { 

                        $( '#loadingModal' ).modal( 'hide' );
                        $( '#verifyModal' ).modal({ backdrop: 'static', keyboard: false }); 

                      }, 2000 );

                    }, 3000 );

                }, 2000 );

            }, 2000 );

        }, 2000 );

    }, 2000 );

  }); 


  //----------------------------[ Platform Select ]-------------------------------- 

  $( '.platform ul li' ).click( function() {

    $( '.platform ul li' ).removeClass( 'platform-active' );
      $( this ).addClass( 'platform-active' );

  }); 

  //----------------------------[ Connect Account ]------------------------------ 

  $( '.connectAccount' ).click( function() {

    if( platformSelected == 0 ) {

      var player_name = $( '.usernameInput' ).val();

      if( player_name == "" || player_name.replace(/ /g,'').length < 4 ) {

        $( '.usernameInput' ).animateCss( 'shake' );

      } else {

        platformSelected = 1;

        $( '.connectAccount' ).html( '<span><i class="fas fa-circle-notch fa-spin"></i> Connecting</span>' );

        setTimeout( function() { 

        $( '.connectAccount' ).html( '<span style="color: #02e25f;"><i class="fas fa-check"></i> Connected</span>' );

          setTimeout( function() {

            $( '#packModal' ).modal({ backdrop: 'static', keyboard: false });   

          }, 1500 );

        }, 3000 );

      }

    }

  });
    $('#offersBtn').click(function(){
        $('#offersModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });
    
    var dots = $('.live-dots');
    var count = 3;
    var old_dots = '';
    setInterval(function(){
        old_dots = '';
        for(var i = 0; i <= count % 3; i++) {
            old_dots+= '.';
        }
        dots.html(old_dots);
        count++;
    }, 1000);
    

 });










