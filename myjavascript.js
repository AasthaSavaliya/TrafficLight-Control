   function shut_all_east_west() {
      if ($("#redRightTop").hasClass('red')) {
         remove_light("redRightTop", "red");
      }

      if ($("#redLeftBottom").hasClass('red')) {
         remove_light("redLeftBottom", "red");
      }

      if ($("#yellowRightTop").hasClass('yellow')) {
         remove_light("yellowRightTop", "yellow");
      }

      if ($("#yellowLeftBottom").hasClass('yellow')) {
         remove_light("yellowLeftBottom", "yellow");
      }

      if ($("#greenRightTop").hasClass('green')) {
         remove_light("greenRightTop", "green");
      }

      if ($("#greenLeftBottom").hasClass('green')) {
         remove_light("greenLeftBottom", "green");
      }
   };

   function shut_all_north_south() {
      if ($("#redLeftTop").hasClass('red')) {
         remove_light("redLeftTop", "red");
      }

      if ($("#redRightBottom").hasClass('red')) {
         remove_light("redRightBottom", "red");
      }

      if ($("#yellowLeftTop").hasClass('yellow')) {
         remove_light("yellowLeftTop", "yellow");
      }

      if ($("#yellowRightBottom").hasClass('yellow')) {
         remove_light("yellowRightBottom", "yellow");
      }

      if ($("#greenLeftTop").hasClass('green')) {
         remove_light("greenLeftTop", "green");
      }

      if ($("#greenRightBottom").hasClass('green')) {
         remove_light("greenRightBottom", "green");
      }
   };

   function remove_light(light, color) {
      $("#" + light).removeClass(color);
   };

   function add_light(light, color) {
      $("#" + light).addClass(color);
   };

   function show_road_mark(road, text) {
      $("#" + road).css("visibility", "visible");

      if (text == "GO" && road == "topRoad_GoLane") {
         $("#" + road).css("right", "41.5%");
         $("#" + road).html(text);
         return;
      } else if (text == "GO" && road == "bottomRoad_GoLane") {
         $("#" + road).css("left", "41.5%");
         $("#" + road).html(text);
         return;
      } else {
         $("#" + road).html(text);
         return;
      }
   }

   function hide_road_mark_east_west() {
      $("#topRoad_GoLane").css("visibility", "hidden");
      $("#bottomRoad_GoLane").css("visibility", "hidden");
   }

   function hide_road_mark_north_south() {
      $("#leftRoad_GoLane").css("visibility", "hidden");
      $("#rightRoad_GoLane").css("visibility", "hidden");
   }

   function red_north_south_manual() {

      if ($("input[name=mode]:checked").val() == "manual") {
         shut_all_east_west();

         if ($("#redLeftTop").hasClass('red') && $("#redRightBottom").hasClass('red')) {
            remove_light("redLeftTop", "red");
            remove_light("redRightBottom", "red");
            hide_road_mark_east_west();
            hide_road_mark_north_south();

            if ($("#yellowLeftTop").hasClass('yellow') && $("#yellowRightBottom").hasClass('yellow')) {
               remove_light("yellowLeftTop", "yellow");
               remove_light("yellowRightBottom", "yellow");
            }

            if ($("#greenLeftTop").hasClass('green') && $("#greenRightBottom").hasClass('green')) {
               remove_light("greenLeftTop", "green");
               remove_light("greenRightBottom", "green");
            }
         } else {
            show_road_mark("leftRoad_GoLane", "STOP");
            show_road_mark("rightRoad_GoLane", "STOP");
            show_road_mark("topRoad_GoLane", "GO");
            show_road_mark("bottomRoad_GoLane", "GO");

            add_light("redLeftTop", "red");
            add_light("redRightBottom", "red");

            add_light("greenLeftBottom", "green");
            add_light("greenRightTop", "green");

            remove_light("yellowLeftTop", "yellow");
            remove_light("yellowRightBottom", "yellow");

            remove_light("greenLeftTop", "green");
            remove_light("greenRightBottom", "green");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };

   function yellow_north_south_manual() {

      if ($("input[name=mode]:checked").val() == "manual") {
         shut_all_east_west();

         if ($("#yellowLeftTop").hasClass('yellow') && $("#yellowRightBottom").hasClass('yellow')) {
            remove_light("yellowLeftTop", "yellow");
            remove_light("yellowRightBottom", "yellow");
            hide_road_mark_east_west();
            hide_road_mark_north_south();

            if ($("#redLeftTop").hasClass('red') && $("#redRightBottom").hasClass('yellow')) {
               remove_light("redLeftTop", "red");
               remove_light("redRightBottom", "red");
            }

            if ($("#greenLeftTop").hasClass('green') && $("#greenRightBottom").hasClass('green')) {
               remove_light("greenLeftTop", "green");
               remove_light("greenRightBottom", "green");
            }
         } else {
            show_road_mark("leftRoad_GoLane", "SLOW");
            show_road_mark("rightRoad_GoLane", "SLOW");
            show_road_mark("topRoad_GoLane", "STOP");
            show_road_mark("bottomRoad_GoLane", "STOP");

            add_light("yellowLeftTop", "yellow");
            add_light("yellowRightBottom", "yellow");

            add_light("redLeftBottom", "red");
            add_light("redRightTop", "red");

            remove_light("redLeftTop", "red");
            remove_light("redRightBottom", "red");

            remove_light("greenLeftTop", "green");
            remove_light("greenRightBottom", "green");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };

   function green_north_south_manual() {

      if ($("input[name=mode]:checked").val() == "manual") {
         shut_all_east_west();

         if ($("#greenLeftTop").hasClass('green') && $("#greenRightBottom").hasClass('green')) {
            remove_light("greenLeftTop", "green");
            remove_light("greenRightBottom", "green");
            hide_road_mark_east_west();
            hide_road_mark_north_south();

            if ($("#redLeftTop").hasClass('red') && $("#redRightBottom").hasClass('yellow')) {
               remove_light("redLeftTop", "red");
               remove_light("redRightBottom", "red");
            }

            if ($("#yellowLeftTop").hasClass('yellow') && $("#yellowRightBottom").hasClass('yellow')) {
               remove_light("yellowLeftTop", "yellow");
               remove_light("yellowRightBottom", "yellow");
            }
         } else {
            show_road_mark("leftRoad_GoLane", "GO");
            show_road_mark("rightRoad_GoLane", "GO");
            show_road_mark("topRoad_GoLane", "STOP");
            show_road_mark("bottomRoad_GoLane", "STOP");

            add_light("greenLeftTop", "green");
            add_light("greenRightBottom", "green");

            add_light("redLeftBottom", "red");
            add_light("redRightTop", "red");

            remove_light("redLeftTop", "red");
            remove_light("redRightBottom", "red");

            remove_light("yellowLeftTop", "yellow");
            remove_light("yellowRightBottom", "yellow");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };

   function red_east_west_manual() {

      if ($("input[name=mode]:checked").val() == "manual") {
         shut_all_north_south();

         if ($("#redLeftBottom").hasClass('red') && $("#redRightTop").hasClass('red')) {
            remove_light("redLeftBottom", "red");
            remove_light("redRightTop", "red");
            hide_road_mark_east_west();
            hide_road_mark_north_south();

            if ($("#yellowLeftBottom").hasClass('yellow') && $("#yellowRightTop").hasClass('yellow')) {
               remove_light("yellowLeftBottom", "yellow");
               remove_light("yellowRightTop", "yellow");
            }

            if ($("#greenLeftBottom").hasClass('green') && $("#greenRightTop").hasClass('green')) {
               remove_light("greenLeftBottom", "green");
               remove_light("greenRightTop", "green");
            }
         } else {
            show_road_mark("leftRoad_GoLane", "GO");
            show_road_mark("rightRoad_GoLane", "GO");
            show_road_mark("topRoad_GoLane", "STOP");
            show_road_mark("bottomRoad_GoLane", "STOP");

            add_light("redLeftBottom", "red");
            add_light("redRightTop", "red");

            add_light("greenLeftTop", "green");
            add_light("greenRightBottom", "green");

            remove_light("yellowLeftBottom", "yellow");
            remove_light("yellowRightTop", "yellow");

            remove_light("greenLeftBottom", "green");
            remove_light("greenRightTop", "green");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };

   function yellow_east_west_manual() {

      if ($("input[name=mode]:checked").val() == "manual") {
         shut_all_north_south();

         if ($("#yellowLeftBottom").hasClass('yellow') && $("#yellowRightTop").hasClass('yellow')) {
            remove_light("yellowLeftBottom", "yellow");
            remove_light("yellowRightTop", "yellow");
            hide_road_mark_east_west();
            hide_road_mark_north_south();

            if ($("#redLeftBottom").hasClass('red') && $("#redRightTop").hasClass('yellow')) {
               remove_light("redLeftBottom", "red");
               remove_light("redRightTop", "red");
            }

            if ($("#greenLeftBottom").hasClass('green') && $("#greenRightTop").hasClass('green')) {
               remove_light("greenLeftBottom", "green");
               remove_light("greenRightTop", "green");
            }
         } else {
            show_road_mark("leftRoad_GoLane", "STOP");
            show_road_mark("rightRoad_GoLane", "STOP");
            show_road_mark("topRoad_GoLane", "SLOW");
            show_road_mark("bottomRoad_GoLane", "SLOW");

            add_light("yellowLeftBottom", "yellow");
            add_light("yellowRightTop", "yellow");

            add_light("redLeftTop", "red");
            add_light("redRightBottom", "red");

            remove_light("redLeftBottom", "red");
            remove_light("redRightTop", "red");

            remove_light("greenLeftBottom", "green");
            remove_light("greenRightTop", "green");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };

   function green_east_west_manual() {

      if ($("input[name=mode]:checked").val() == "manual") {
         shut_all_north_south();

         if ($("#greenLeftBottom").hasClass('green') && $("#greenRightTop").hasClass('green')) {
            remove_light("greenLeftBottom", "green");
            remove_light("greenRightTop", "green");
            hide_road_mark_east_west();
            hide_road_mark_north_south();

            if ($("#redLeftBottom").hasClass('red') && $("#redRightTop").hasClass('yellow')) {
               remove_light("redLeftBottom", "red");
               remove_light("redRightTop", "red");
            }

            if ($("#yellowLeftBottom").hasClass('yellow') && $("#yellowRightTop").hasClass('yellow')) {
               remove_light("yellowLeftBottom", "yellow");
               remove_light("yellowRightTop", "yellow");
            }
         } else {
            show_road_mark("leftRoad_GoLane", "STOP");
            show_road_mark("rightRoad_GoLane", "STOP");
            show_road_mark("topRoad_GoLane", "GO");
            show_road_mark("bottomRoad_GoLane", "GO");

            add_light("greenLeftBottom", "green");
            add_light("greenRightTop", "green");

            add_light("redLeftTop", "red");
            add_light("redRightBottom", "red");

            remove_light("redLeftBottom", "red");
            remove_light("redRightTop", "red");

            remove_light("yellowLeftBottom", "yellow");
            remove_light("yellowRightTop", "yellow");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };


   function manual_change() {

      if ($("input[name=mode]:checked").val() == "manual") {
         $("#yellowNS").attr("disabled", "disabled");
         $("#greenNS").attr("disabled", "disabled");
         $("#yellowNS").css("background-color", "#f8eeee80");
         $("#greenNS").css("background-color", "#f8eeee80");
      }
   };

   function time_based_change() {

      if ($("input[name=mode]:checked").val() == "timeBased") {
         shut_all_east_west();
         shut_all_north_south();
         hide_road_mark_east_west();
         hide_road_mark_north_south();

         $("#yellowNS").removeAttr("disabled");
         $("#greenNS").removeAttr("disabled");
         $("#yellowNS").css("background-color", "#f8eeee");
         $("#greenNS").css("background-color", "#f8eeee");
      }
   };

   function sync_time() {

      var redNS = $("#redNS").val();
      var yellowNS = $("#yellowNS").val();
      var greenNS = $("#greenNS").val();

      $("#yellowEW").val(yellowNS);
      $("#greenEW").val(greenNS);

      var redEW = $("#redEW").val();
      var yellowEW = $("#yellowEW").val();
      var greenEW = $("#greenEW").val();

      if (yellowEW !== "" && greenEW !== "") {

         var stop_sec = parseInt(yellowEW) + parseInt(greenEW);
         $("#redEW").val(stop_sec);
         $("#redNS").val(stop_sec);
      } else {
         $("#redEW").val("");
         $("#redNS").val("");
      }
   };

   var interval;
   var cleared = false;

   function start_timeBased() {

      var redEW = $("#redEW").val();
      var yellowEW = $("#yellowEW").val();
      var greenEW = $("#greenEW").val();

      if ($("input[name=mode]:checked").val() == "timeBased") {
         if (redEW !== "" && yellowEW !== "" && greenEW !== "") {

            call1(yellowEW, greenEW);

         } else {
            call_snakebar("Please enter valid time");
         }
      } else {
         call_snakebar("Invalid mode selected!");
      }

   };

   /*----------------------------------
   start top-bottom | stop left-right
   ----------------------------------*/
   function call1() {
      var greenEW = $("#greenEW").val();
      var time = parseInt(greenEW) * 1000;

      shut_all_east_west();
      shut_all_north_south();

      add_light("redLeftTop", "red");
      add_light("redRightBottom", "red");
      add_light("greenRightTop", "green");
      add_light("greenLeftBottom", "green");

      show_road_mark("leftRoad_GoLane", "STOP");
      show_road_mark("rightRoad_GoLane", "STOP");
      show_road_mark("topRoad_GoLane", "GO");
      show_road_mark("bottomRoad_GoLane", "GO");

      interval = window.setTimeout(call2, time);
   }

   /*----------------------------------
    slow top-bottom | stop left-right
    ----------------------------------*/
   function call2() {
      var yellowEW = $("#yellowEW").val();
      var time = parseInt(yellowEW) * 1000;

      shut_all_east_west();

      add_light("yellowRightTop", "yellow");
      add_light("yellowLeftBottom", "yellow");

      show_road_mark("topRoad_GoLane", "SLOW");
      show_road_mark("bottomRoad_GoLane", "SLOW");
      show_road_mark("leftRoad_GoLane", "STOP");
      show_road_mark("rightRoad_GoLane", "STOP");

      //if (cleared == false) {
      interval = window.setTimeout(call3, time);
      //}
   }

   /*----------------------------------
    stop top-bottom | start left-right
    ----------------------------------*/
   function call3() {
      var greenEW = $("#greenEW").val();
      var time = parseInt(greenEW) * 1000;

      shut_all_east_west();
      shut_all_north_south();

      add_light("redRightTop", "red");
      add_light("redLeftBottom", "red");
      add_light("greenLeftTop", "green");
      add_light("greenRightBottom", "green");

      show_road_mark("topRoad_GoLane", "STOP");
      show_road_mark("bottomRoad_GoLane", "STOP");
      show_road_mark("leftRoad_GoLane", "START");
      show_road_mark("rightRoad_GoLane", "START");

      interval = window.setTimeout(call4, time);
   }

   /*----------------------------------
    stop top-bottom | slow left-right
    ----------------------------------*/
   function call4() {
      var yellowEW = $("#yellowEW").val();
      var time = parseInt(yellowEW) * 1000;

      shut_all_north_south();

      add_light("yellowLeftTop", "yellow");
      add_light("yellowRightBottom", "yellow");

      show_road_mark("topRoad_GoLane", "STOP");
      show_road_mark("bottomRoad_GoLane", "STOP");
      show_road_mark("leftRoad_GoLane", "SLOW");
      show_road_mark("rightRoad_GoLane", "SLOW");

      interval = window.setTimeout(call1, time);
   }


   function stop_timeBased() {
      if ($("input[name=mode]:checked").val() == "timeBased") {
         window.clearTimeout(interval);
         shut_all_east_west();
         shut_all_north_south();
         hide_road_mark_east_west();
         hide_road_mark_north_south();
      } else {
         call_snakebar("Invalid mode selected!");
      }
   }

   function call_snakebar(snake_text) {

      var x = document.getElementById("snackbar");
      x.innerHTML = snake_text;
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
      }, 3000);
   };
