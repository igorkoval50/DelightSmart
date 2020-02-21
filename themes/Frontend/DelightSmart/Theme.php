<?php

namespace Shopware\Themes\DelightSmart;

use Shopware\Components\Form as Form;

class Theme extends \Shopware\Components\Theme
{
    protected $inheritanceConfig = false;

    protected $extend = 'Responsive';

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
            'Settings for Dark Theme'
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