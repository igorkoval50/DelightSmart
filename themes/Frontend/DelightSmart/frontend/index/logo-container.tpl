{extends file="parent:frontend/index/logo-container.tpl"}

{* Main shop logo *}

{block name='frontend_index_logo'}
    {if $theme.offthemeChoice}
        <div class="logo--shop logo-light block">
            {s name="IndexLinkDefault" namespace="frontend/index/index" assign="snippetIndexLinkDefault"}{/s}
            <a class="logo--link" href="{url controller='index'}" title="{"{config name=shopName}"|escapeHtml} - {$snippetIndexLinkDefault|escape}">
                <picture>
                    <source srcset="{link file=$theme.light_logo}" media="(min-width: 78.75em)">
                    <source srcset="{link file=$theme.light_logo}" media="(min-width: 64em)">
                    <source srcset="{link file=$theme.light_logo}" media="(min-width: 48em)">
                    <img srcset="{link file=$theme.light_logo}" alt="{"{config name=shopName}"|escapeHtml} - {$snippetIndexLinkDefault|escape}" />
                </picture>
            </a>
        </div>

        <div class="logo--shop logo-dark block">
            {s name="IndexLinkDefault" namespace="frontend/index/index" assign="snippetIndexLinkDefault"}{/s}
            <a class="logo--link" href="{url controller='index'}" title="{"{config name=shopName}"|escapeHtml} - {$snippetIndexLinkDefault|escape}">
                <picture>
                    <source srcset="{link file=$theme.Img_Logo}" media="(min-width: 78.75em)">
                    <source srcset="{link file=$theme.Img_Logo}" media="(min-width: 64em)">
                    <source srcset="{link file=$theme.Img_Logo}" media="(min-width: 48em)">
                    <img srcset="{link file=$theme.Img_Logo}" alt="{"{config name=shopName}"|escapeHtml} - {$snippetIndexLinkDefault|escape}" />
                </picture>
            </a>
        </div>
    {else}
        {$smarty.block.parent}
    {/if}


{/block}


