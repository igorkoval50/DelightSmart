{extends file="parent:frontend/index/index.tpl"}

{block name="frontend_index_body_classes"}{strip}
    is--ctl-{controllerName|lower} is--act-{controllerAction|lower}
    {if $sUserLoggedIn} is--user{/if}
    {if $sOneTimeAccount} is--one-time-account{/if}
    {if $sTarget} is--target-{$sTarget|escapeHtml}{/if}
    {if $theme.checkoutHeader && (({controllerName|lower} == "checkout" && {controllerAction|lower} != "cart") || ({controllerName|lower} == "register" && ($sTarget != "account" && $sTarget != "address")))} is--minimal-header{/if}
    {if !$theme.displaySidebar} is--no-sidebar{/if}
    {if $theme.offthemeChoice} dark-them {/if}
{/strip}{/block}