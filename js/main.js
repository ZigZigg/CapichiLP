$(document).ready(function() {
  /*==================================================================
  [ Focus Contact2 ]*/
  $(".input2").each(function() {
    $(this).on("blur", function() {
      if (
        $(this)
          .val()
          .trim() != ""
      ) {
        $(this).addClass("has-val");
      } else {
        $(this).removeClass("has-val");
      }
    });
  });

  /*==================================================================
  [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var message = $('.validate-input textarea[name="message"]');

  $(".contact2-form-btn").on("click", function() {
    var check = true;

    if (
      $(name)
        .val()
        .trim() == ""
    ) {
      showValidate(name);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if (
      $(message)
        .val()
        .trim() == ""
    ) {
      showValidate(message);
      check = false;
    }

    if (check) {
      $(".send-button").hide();
      $(".ajax-loader").show();
      var form_name = $("#form_name").val();
      var form_email = $("#form_email").val();
      var form_content = $("#form_detail").val();
      $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: {
          form_name: form_name,
          form_email: form_email,
          form_content: form_content
        },
        success: function(rs) {
          $(".ajax-loader").hide();
          $(".send-button").show();
          $("#form_name").val("");
          $("#form_email").val("");
          $("#form_detail").val("");
          $(".alert-success").show("slow");
          $(".alert-success")
            .delay(10000)
            .hide(0);
        }
      });
    }
    // return check;
  });
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });
  $(".validate-form .input2").each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }

  var scrollAnimationElm = document.querySelectorAll(".sa");
  var scrollAnimationFunc = function() {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 300;
      if (
        window.innerHeight >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add("show");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});

var scrollAnimationElm = document.querySelectorAll(".sa");
var scrollAnimationFunc = function() {
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    if (
      window.innerHeight >
      scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
    ) {
      scrollAnimationElm[i].classList.add("show");
    }
  }
};
window.addEventListener("load", scrollAnimationFunc);
window.addEventListener("scroll", scrollAnimationFunc);

// humberger
jQuery(".icon-hamburger").on("click", function() {
  if (jQuery(".menu-container .menu").css("display") === "block") {
    jQuery(".menu-container .menu").slideUp("1500");
  } else {
    jQuery(".menu-container .menu").slideDown("1500");
  }
});
