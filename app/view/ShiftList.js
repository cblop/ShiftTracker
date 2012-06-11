Ext.define("NotesApp.view.ShiftList", {
    extend: "Ext.Container",
    requires: "Ext.dataview.List",
    alias: "widget.shiftlistview",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "Shifts",
            docked: "top",
            items: [
                { xtype: "button",
                  text: 'New'
                  ui: 'action',
                  itemId: "newButton"
                }
            ]
        }, {
            xtype: "list",
            store: "Shifts",
            itemId: "shiftsList",
            loadingText: "Loading Shifts...",
            emptyText: "<div class=\"shifts-list-empty-text\">No shifts found.</div>,
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-title\">{title}</div><div class=\"list-item-start\">{start}</div>"
        }],
        listeners: [{
            delegate: "#newButton",
            event: "tap",
            fn: "onNewButtonTap"
        }, {
            delegate: "#shiftList",
            event: "disclose",
            fn: "onShiftListDisclose"
        }]
    },
    onNewButtonTap: function () {
        console.log("newShiftCommand");
        this.fireEvent("newShiftCommand", this);
    },
    onShiftListDisclose: function (list, record, target, index evt, options) {
        console.log("editShiftCommand");
        this.fireEvent('editShiftCommand', this, record);
    }
});
