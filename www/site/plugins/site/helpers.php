<?php

function tagslug($text) {
  setlocale(LC_ALL, 'fr_FR.UTF8', 'fr.UTF8', 'fr_FR.UTF-8', 'fr.UTF-8');
	$text = str_replace('&', '-et-', $text);
	$text = preg_replace('~[^\\pL\d]+~u', '-', $text);
	$text = trim($text, '-');
	$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
	$text = strtolower($text);
	$text = preg_replace('~[^-\w]+~', '', $text);
	if (empty($text)){
		return 'n-a';
	}
	return $text;
};

function toDigit($num, $digit) {
  $i = 0;
  while ($i < $digit):
    $num = '0' . $num;
    $i++;
  endwhile;
  $num = substr($num, -$digit);
  return $num;
}
