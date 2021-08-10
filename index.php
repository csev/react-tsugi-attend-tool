<?php

use \Tsugi\Util\U;

require_once "../config.php";

$data = file_get_contents("dist/index.html");

// If we are running the dist version and have a refresh, the _TSUGI value should be
// in sessionStorage - so we fall back to the normal code in index.html
if ( $_SERVER['REQUEST_METHOD'] === 'GET' && ! U::get($_GET, session_name(), false) ) {
    echo($data);
    return;
}

// Remove the index.html version of _TSUGI setup
$data = preg_replace("/<script>var starttsugi = true.*?<.script>/s", "", $data);
$pos = strpos($data,"</head>");

use \Tsugi\Core\LTIX;
use \Tsugi\Core\Settings;
$old_code = Settings::linkGet('code', '');
//var_dump($old_code);
// No parameter means we require CONTEXT, USER, and LINK
$LAUNCH = LTIX::requireData();

echo(substr($data,0,$pos));
echo($OUTPUT->headerData());
?>
<script>
window.sessionStorage.setItem('_TSUGI',  JSON.stringify(_TSUGI));
console.log("Stored _TSUGI in sessionStorage");
</script>
<?php
echo(substr($data,$pos));


