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

        $themeChoiceShow = $this->createCheckboxField(
            'offthemeChoice',
            'show choice of the theme',
            true
        );

        // Adding the fields to the fieldset of the header
        $fieldsetTheme->addElement($themeChoiceShow);

        $tabThemeCommon = $this->createTab(
            'theme_settings_common',
            'Common'
        );

        $tabThemeCommon->addElement($fieldsetTheme);

        $container->addTab($tabThemeCommon);
    }
}