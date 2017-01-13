const conditional = function(expression, if_block, else_block, when) {
    return {
        name: '',
        plugin: {
            args: {
                action: if_block.plugin,
                else_action: else_block.plugin,
                expression
            },
            label: "Utility - Conditional",
            method: "conditional",
            module: "utility",
            name: "utility"
        },
        when
    }
};

export const utility = {
    conditional
};