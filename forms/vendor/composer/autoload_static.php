<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit420b21c06afad4b8e4550b9dc4bda2dd
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit420b21c06afad4b8e4550b9dc4bda2dd::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit420b21c06afad4b8e4550b9dc4bda2dd::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit420b21c06afad4b8e4550b9dc4bda2dd::$classMap;

        }, null, ClassLoader::class);
    }
}