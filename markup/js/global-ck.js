$(document).ready(function(){function e(){if($(".save-toolbar").length>0){$("select").change(function(){$(this).closest("section.property-parameters, .modal-body form").find(".save-toolbar").fadeIn("fast")});$("input, textarea").keypress(function(){$(this).closest("section.property-parameters, .modal-body form").find(".save-toolbar").fadeIn("fast")});$(":radio, :checkbox").click(function(){$(this).closest("section.property-parameters, .modal-body form").find(".save-toolbar").fadeIn("fast")});$(".save-toolbar .cancel a").live("click",function(e){$(this).closest(".save-toolbar").fadeOut("fast");e.preventDefault()})}}function t(){$(".popover-window").bind("clickoutside",function(e){$(this).fadeOut("fast").unbind()})}function n(){$("#zoom-container div.modal-window").bind("clickoutside",function(e){$(this).parent().fadeOut("fast").removeClass("visible");$("body").removeClass("noscroll zoomed");$(this).unbind()})}function r(){$("a.checkbox input:checkbox:checked").addClass("checked")}$("#content.drops").length>0&&$.getScript("/markup/js/jquery.masonry.js");$("#page-views ul").children().length>2&&$.getScript("/markup/js/jquery.touch.min.js");e();window.innerWidth>800&&$("article.drop, .drop-full").hover(function(){$(this).find(".remove").fadeIn("fast")},function(){$(this).find(".remove").fadeOut("fast")});$("article.drop ul.score-drop li.star").toggle(function(){$(this).addClass("selected").children("a").append('<span class="star-total">23</span>')},function(){$(this).removeClass("selected");$(this).find(".star-total").remove()});$("a.popover-trigger").live("click",function(e){$(this).closest(".popover").toggleClass("active");$(this).closest(".popover").find(".popover-window").fadeToggle("fast");t();return!1});$("a.modal-trigger").live("click",function(t){var n=$(this).attr("href");$("#modal-container div.modal-window").load(n+" .modal",function(){e()});$("#modal-container").fadeIn("fast").addClass("visible");$("body").addClass("noscroll");$("body").hasClass("zoomed")&&$("div.modal-window").unbind();t.preventDefault()});$("a.remove-large").live("click",function(e){$("div.modal-window").unbind()});$("article.modal .close a").live("click",function(e){$("#modal-container").fadeOut("fast").removeClass("visible");if(!$("body").hasClass("zoomed")){$("body").removeClass("noscroll");$("div.modal-window").unbind()}e.preventDefault()});$("a.zoom-trigger").live("click",function(e){var t=$(this).attr("href");$("#zoom-container div.modal-window").load(t+" .modal");$("#zoom-container").fadeIn("fast").addClass("visible");$("body").addClass("noscroll zoomed");n();e.preventDefault()});$("#zoom-container .close a").live("click",function(e){$("#zoom-container").fadeOut("fast").removeClass("visible");$("body").removeClass("noscroll zoomed");$("div.modal-window").unbind();e.preventDefault()});$(".follow a").live("click",function(e){var t=$(this).attr("title"),n=$(this).closest("div.parameter").find("h2").html();$("#confirmation-container div.modal-window").replaceWith("<div class='modal-window'><article class='modal base'><p>You are "+t+" "+n+".</p></article></div>");$("#confirmation-container").fadeIn("fast").addClass("visible");$("#confirmation-container").delay(1e3).fadeOut("fast").removeClass("visible");e.preventDefault()});$(".remove a").live("click",function(e){var t=$(this).attr("href");$(t).fadeOut("fast").remove();$(this).parent().fadeOut("fast").remove();e.preventDefault()});$("a.parameters-edit").live("click",function(e){$(this).closest("article.container").toggleClass("active");$(this).closest(".settings").toggleClass("active");e.preventDefault()});$("section.meta-data h3").live("click",function(e){$(this).toggleClass("open").siblings("div.meta-data-content").slideToggle("fast")});$("a.checkbox").live("click",function(e){r();$(this).toggleClass("checked");e.preventDefault()});r();if($("#buoy").length>0){$.getScript("/markup/js/jquery.scrollto.js");$("#buoy").prepend("<div class='buoy-message base'><p>Here's where you left off.</p></div>");$("#buoy .buoy-message").delay(1e3).fadeIn("fast");$("#buoy .buoy-message").delay(2e3).fadeOut("slow")}$("form input[type=checkbox]").live("click",function(){$(this).is(":checked")?$(this).parents("label").addClass("selected"):$(this).parents("label").removeClass("selected")})});