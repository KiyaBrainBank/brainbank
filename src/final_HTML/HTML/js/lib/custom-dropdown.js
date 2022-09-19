 
function myfunction3 () {
    $('body').on( 'click', function ( e ) {
    //   e.stopPropagation();
        $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
        $( this ).siblings( 'div.language-list' ).fadeOut(500);
    } );
  
  
  
  // language selection :: open list 
  // language selection :: open list 
  
  $('body').on( 'click', 'div.language-bar div.lang-dropdown a.btn-selectlang', function ( e ) {
    e.stopPropagation();
    // if ( !$( this ).hasClass( 'selectlang-selected' ) ) {
    if ( !$( this ).closest( 'div.lang-dropdown' ).hasClass( 'langlist-showing' ) ) {
    // $( this ).addClass( 'selectlang-selected' );
    // $( this ).
    $( this ).closest( 'div.lang-dropdown' ).addClass( 'langlist-showing' );
    $( this ).siblings( 'div.language-list' ).fadeIn();
    } else {
    // $( this ).removeClass( 'selectlang-selected' );
    // $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
    $( this ).siblings( 'div.language-list' ).fadeOut(500);
  }
  } );
  
  //-- language selection :: select language
  
  $('body').on( 'click', 'div.language-bar div.language-list ul.lst-languages>li>a', function ( e ) {
  e.stopPropagation();
  // var currentLanguage = $( this ).closest( 'ul.lst-languages' ).find( 'a.language-selected' ).text();
  if ( !$( this ).hasClass( 'language-selected' ) ) {
    $( this ).closest( 'ul.lst-languages' ).find( 'a' ).removeClass( 'language-selected' );
    $( this ).addClass( 'language-selected' );
    var currentLanguage = $( this ).text();
    $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
    $( this ).closest( 'div.lang-dropdown' ).find( 'a.btn-selectlang em' ).html( currentLanguage );
    //$( this ).closest( 'div.lang-dropdown' ).find( 'div.language-list' ).fadeOut(500);
  } else {
    $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
    // $( this ).closest( 'div.lang-dropdown' ).find( 'div.language-list' ).fadeOut(500);
  }
  });
  
  $('body').on( 'click', 'div.language-bar div.language-list ul.lst-languages>li.list-nh a ', function ( e ) {
  e.stopPropagation();
  
  function myfunction2 (e) {
    // e.stopPropagation();
    $( this ).closest( 'div.lang-dropdown' ).find('div.language-list').show();
  }
  // var currentLanguage = $( this ).closest( 'ul.lst-languages' ).find( 'a.language-selected' ).text();
   console.log("activate");
  //  $('ul.dropdown-sub').show();
  if ($(this).hasClass('language-selected')){
    $(this).siblings('ul.dropdown-sub').addClass('active-dp');
    $(this).parents().eq(2).find('a').not('.language-selected').siblings().removeClass('active-dp');
  }
   myfunction2 (); 
  });
  
  $('body').on( 'click', 'ul.dropdown-sub li a', function (e) {
  // e.stopPropagation();
  console.log('works');
  // var currentLanguage = $( this ).closest( 'ul.lst-languages' ).find( 'a.language-selected' ).text();
   $('ul.dropdown-sub').removeClass('active-dp'); 
  //  var currentLanguage2 = $( this ).text(); 
   $( this ).parents('.language-bar').find( 'div.language-list' ).fadeOut(500);
   $( this ).closest( 'div.lang-dropdown' ).removeClass( 'langlist-showing' );
  //  $( this ).closest( 'div.lang-dropdown' ).find( 'a.btn-selectlang em' ).html( currentLanguage2 );
  
  });
  
  
  };
  
  myfunction3();
  
  
  // $('body').on( 'click', '.main', function () {
  //   // e.stopPropagation();
  //     console.log('works');
  //     $('ul.dropdown-sub').removeClass('active-dp'); 
  //     //  var currentLanguage2 = $( this ).text(); 
  //      $('div.language-list' ).fadeOut(500);
  //      $('div.lang-dropdown' ).removeClass( 'langlist-showing' );
      
  // });