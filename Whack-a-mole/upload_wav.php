<?php
//$target = "audio/";
//$filetag = $_POST["filename"];

//$target = $target_dir.$filetag;
//$myfile = fopen($target, "wb") or die ("Unable to open file for writing");
//$blobtowrite = $_POST["audiochunk"];
//fwrite($myfile, $blobtowrite);
//fclose($myfile);

//$data = substr($_POST['audiochunk'], strpos($_POST['audiochunk'], ",") + 1);
// decode it
//$decodedData = base64_decode($data);
// print out the raw data, 
//$audio = str_replace('data:audio/wav;base64,', '', $audio);
//$decoded = base64_decode($audio);

//var_dump($_POST);
//$fp = fopen($target.$filetag, 'w') or die ("Unable to open file for writing");
//fwrite($fp, $_POST["audiochunk"]);
//fclose($fp);

//$filename = "audio/".$_POST["filename"];
//$data = $_POST["audiochunk"];
// write the file to disk
//file_put_contents($filename, $data);
//chmod($target_file,0755);

print_r($_FILES); //this will print out the received name, temp name, type, size, etc.
 
$input = $_FILES['audio_data']['tmp_name']; //get the temporary name that PHP gave to the uploaded file
$output = "audio/".$_FILES['audio_data']['name'].".wav"; //letting the client control the filename is a rather bad idea
 
//move the file from temp name to local folder using $output name
move_uploaded_file($input, $output)
?>
