<?php

return [
    'community.markdown-field.buttons' => ['bold', 'italic', 'pagelink', 'image', 'link', 'email'],
    'community.markdown-field.font' => [
        'family' => 'sans-serif',
        'scaling' => false,
        'size' => 'regular',
    ],

    'thumbs' => [
        'srcsets' => [
            // For mobile (420px), 1280px, 1800px, 2560px
            'slideshow' => [420, 640, 900, 1280]
        ],
        'presets' => [
            'blur' => ['width' => 150, 'height' => 150, 'quality' => 30]
        ]
    ],

    // 'panel' => array('css' => 'assets/css/panel.css'),

    'debug' => true,

    // 'cache' => [
    //   'pages' => [
    //     'active' => true
    //   ]
    // ],

    // 'bnomei.robots-txt.sitemap' => './sitemap.xml',
    // 'bnomei.robots-txt.groups' => [ 
    //     '*' => [
    //         'disallow' => [
    //             '/kirby/',
    //             '/site/',
    //         ],
    //         'allow' => [
    //             '/media/',
    //         ]
    //     ]
    // ],

    'omz13.xmlsitemap' => [
      'cacheTTL' => 0,
    ],

    'routes' => [],

    'smartypants' => true,

    'medienbaecker.autoresize.maxWidth' => 2560,

   ];
