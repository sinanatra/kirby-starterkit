<!-- Doctype HTML5 -->
<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="fr"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="fr"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="fr"> <![endif]-->
<!--[if IE 9 ]><html class="ie9 no-js"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="no-js" lang="fr" dir="ltr">
<!--<![endif]-->

<head>
  <meta charset="utf-8">
  <title><?= $page->createTitle() ?></title>

  <meta name="author" content="">
  <meta name="description" content="<?= $page->createDescription() ?>">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="57x57" href="<?php snippet('modules/favicon', ['size' => 57]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="114x114" href="<?php snippet('modules/favicon', ['size' => 114]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="72x72" href="<?php snippet('modules/favicon', ['size' => 72]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="144x144" href="<?php snippet('modules/favicon', ['size' => 144]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="60x60" href="<?php snippet('modules/favicon', ['size' => 60]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="120x120" href="<?php snippet('modules/favicon', ['size' => 120]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="76x76" href="<?php snippet('modules/favicon', ['size' => 76]); ?>" />
  <link rel="apple-touch-icon-precomposed" rel="apple-touch-icon" sizes="152x152" href="<?php snippet('modules/favicon', ['size' => 152]); ?>" />
  <link rel="icon" type="image/png" href="<?php snippet('modules/favicon', ['size' => 196]); ?>" sizes="196x196" />
  <link rel="icon" type="image/png" href="<?php snippet('modules/favicon', ['size' => 96]); ?>" sizes="96x96" />
  <link rel="icon" type="image/png" href="<?php snippet('modules/favicon', ['size' => 32]); ?>" sizes="32x32" />
  <link rel="icon" type="image/png" href="<?php snippet('modules/favicon', ['size' => 16]); ?>" sizes="16x16" />
  <link rel="icon" type="image/png" href="<?php snippet('modules/favicon', ['size' => 128]); ?>" sizes="128x128" />
  <meta name="application-name" content="&nbsp;" />
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="msapplication-TileImage" content="<?php snippet('modules/favicon', ['size' => 144]); ?>" />
  <meta name="msapplication-square70x70logo" content="<?php snippet('modules/favicon', ['size' => 70]); ?>" />
  <meta name="msapplication-square150x150logo" content="<?php snippet('modules/favicon', ['size' => 150]); ?>" />
  <meta name="msapplication-wide310x150logo" content="<?php snippet('modules/favicon', ['size' => 310]); ?>" />
  <meta name="msapplication-square310x310logo" content="<?php snippet('modules/favicon', ['size' => 310]); ?>" />

  <meta property="og:url" content="<?= $page->url() ?>">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?= $page->createTitle() ?>">
  <meta property="og:description" content="<?= $page->createDescription() ?>">
  <meta property="og:image" content="<?= $page->createImage() ?>">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="" />
  <meta name="twitter:text:title" content="<?= $page->createTitle() ?>">
  <meta name="twitter:title" content="<?= $page->createTitle() ?>">
  <meta name="twitter:description" content="<?= $page->createDescription() ?>">
  <meta name="twitter:image" content="<?= $page->createImage() ?>">

  <?= css('assets/css/bundle.css') ?>

</head>

<body>

<main class="main">
  <div class="content">
    <?php snippet('modules/header') ?>
