{extends file="parent:frontend/index/topbar-navigation.tpl"}

{* Top bar main *}
{block name="frontend_index_top_bar_nav"}

    <nav class="top-bar--navigation block" id="one" role="menubar">
        {if $theme.offthemeChoice}
            <div class="main-theme">
                <input id="change-theme" class="l" type="checkbox">
            </div>
        {/if}
        {$smarty.block.parent}
    </nav>
{/block}
