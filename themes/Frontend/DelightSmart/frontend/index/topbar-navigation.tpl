{extends file="parent:frontend/index/topbar-navigation.tpl"}

{* Top bar main *}
{block name="frontend_index_top_bar_nav"}

    <nav class="top-bar--navigation block" id="one" role="menubar">
        {if $theme.offthemeChoice}
            <div class="main-theme">
                <input id="change-theme" class="l" type="checkbox">
            </div>
        {/if}

        {if $theme.show_configuration}
            <div class="switch-toggle switch-3 switch-candy">

                <input id="on" name="state-d" type="radio" checked="" />
                <label for="on" onclick="">ON</label>

                <input id="na" name="state-d" type="radio" checked="checked" />
                <label for="na" class="disabled" onclick="">N/A</label>

                <input id="off" name="state-d" type="radio" />
                <label for="off" onclick="">OFF</label>

            </div>
        {/if}
        {$smarty.block.parent}
    </nav>
{/block}
