<!-- HTML top code goes here -->

<?

// From processing takes place here. message displayed here too
require('form/form.class.php');
$form = new Form();
$form->processForm(

	'melissachristiana.com' // Put you mail domain here
	,
	'3 Daughters Brewing' // Put your site name / form name here
	,
	'machristiana1310@gmail.com' // Where will the form notification be sent?
	,
	'noreply@melissachristiana.com' // This what the form FROM: address wil be, if the form submissions doesn't contain an email field

);


?>

<!-- HTML bottom code goes here -->
