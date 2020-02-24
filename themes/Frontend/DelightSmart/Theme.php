<?php

namespace Shopware\Themes\DelightSmart;

use Shopware\Components\Form as Form;

class Theme extends \Shopware\Components\Theme
{
    protected $extend = 'Responsive';

    protected $inheritanceConfig = false;

    protected $javascript = array(
        'src/js/custom.js'
    );

    protected $name = <<<'SHOPWARE_EOD'
Delight Smart 
SHOPWARE_EOD;

    protected $description = <<<'SHOPWARE_EOD'
Delight smart 
SHOPWARE_EOD;

    protected $author = <<<'SHOPWARE_EOD'
It-delight
SHOPWARE_EOD;

    protected $license = <<<'SHOPWARE_EOD'

SHOPWARE_EOD;

    public function createConfig(Form\Container\TabContainer $container)
    {
        $googleUrl = "https://fonts.googleapis.com/css?family=Roboto&display=swap";
        $one = parse_url($googleUrl);
        error_log(print_r($one, 1));

        // style for column of the theme
        $styleColomon = [
            'layout' => 'column',
            'flex' => 0,
            'defaults' => [
                'columnWidth' => 0.5,
                'labelWidth' => 180,
                'margin' => '2 15 2 0'
            ]
        ];

        //Change the color themes
        $fieldsetTheme = $this->createFieldSet(
            'theme_show',
            'Common Settings',
            [
                'attributes' => $styleColomon,
            ]
        );

        $fieldsetThemeLight = $this->createFieldSet(
            'theme_light',
            'Theme Light Settings',
            [
                'attributes' => $styleColomon,
            ]
        );

        $themeChoiceShow = $this->createCheckboxField(
            'offthemeChoice',
            'show choice of the theme',
            true
        );

        $themeLightLogo = $this->createMediaField(
            'light_logo',
            'the logo of the theme',
            'virtualPath'
        );


//        $themeLightFontFamily = $this->createTextField(
//            'light_font_family',
//            'add goggle font url',
//            '',
//            ['attributes' =>
//                [
//                    'xtype' => 'tinymce',
//                ],
//            ]
//
//        );

        $themeLightFont = $this->createTextField(
            'light_font',
            'add goggle font family',
            "Roboto, sans-serif"
        );

        $themeLightFontSizeLink = $this->createPixelField(
            'light_font_size_link',
            'font-size for links',
            "16"
        );

        $themeLightFontSizeTxt = $this->createPixelField(
            'light_font_size_txt',
            'font-size for links',
            "16"
        );
        $themeLightFontSizeHeadline = $this->createPixelField(
            'light_font_size_headline',
            'font-size for headline',
            "24"
        );
        $themeLightBackground =  $this->createColorPickerField(
            'light_background',
            'body background',
            '#fff'
        );

        // Adding the fields to the fieldset of the header
        $fieldsetTheme->addElement($themeChoiceShow);
        $fieldsetThemeLight->addElement($themeLightLogo);
//        $fieldsetThemeLight->addElement($themeLightFontFamily);
        $fieldsetThemeLight->addElement($themeLightFont);
        $fieldsetThemeLight->addElement($themeLightFontSizeLink);
        $fieldsetThemeLight->addElement($themeLightFontSizeTxt);
        $fieldsetThemeLight->addElement($themeLightFontSizeHeadline);
        $fieldsetThemeLight->addElement($themeLightBackground);

        $tabThemeCommon = $this->createTab(
            'theme_settings_common',
            'Common'
        );

        $tabThemeLight = $this->createTab(
            'theme_settings_light',
            'Theme light'
        );

        $tabThemeCommon->addElement($fieldsetTheme);
        $tabThemeLight->addElement($fieldsetThemeLight);

        $container->addTab($tabThemeCommon);
        $container->addTab($tabThemeLight);


        //dark theme ///////////////////
        $BodyBackground = $this->createColorPickerField(
            'Body_Background',
            'Body background',
            '#000'
        );
        $LogoIco = $this->createMediaField(
            'Img_Logo',
            'Image Logo',
            ''
        );
        $BodySize = $this->createPixelField(
            'Body_Font_Size',
            'Body Font Size',
            '10px'
        );
        $fieldset = $this->createFieldSet(
            'Settings_For_Dark_Theme',
            'Settings for Dark Theme',
            [
                'attributes' => $styleColomon,
            ]
        );

        $fieldset->addElement($BodyBackground);
        $fieldset->addElement($LogoIco);
        $fieldset->addElement($BodySize);


        $tab = $this->createTab(
            'Body_Dark_Theme',
            'Dark Theme'

        );

        $tab->addElement($fieldset);

        $container->addTab($tab);
    }
}