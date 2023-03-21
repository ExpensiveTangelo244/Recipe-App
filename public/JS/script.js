$(".recipeBtn").on("click", function () {
  $(this).siblings(".recipeModal").css("display", "block");
});

$(".close, .closeBtn").on("click", function () {
  $(this).closest(".recipeModal").css("display", "none");
});

