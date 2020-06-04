$("form#born").submit(function(event) {
  const someInput = $("input#born").val();
  event.preventDefault();
  const dob = $("#born").val();
});
