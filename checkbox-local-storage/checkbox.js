function collectCheckboxes() {
	var selected = [];
	$('#checkboxes input:checked').each(function() {
    	selected.push($(this).attr('name'));
	});
	localStorage.setItem("selected", selected);	
}

$("#submit").click(function(e) {
	collectCheckboxes();
});