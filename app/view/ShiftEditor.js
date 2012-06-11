Ext.define("ShiftTracker.view.ShiftEditor", {
    extend: "Ext.form.Panel,
    requires: [
        "Ext.form.FieldSet",
        "Ext.field.DatePicker",
        "Ext.field.Toggle
    ],
    alias: "widget.shifteditorview",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Edit Shift",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Home",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Save",
                        itemId: "saveButton"
                    }
                ]
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "deleteButton"
                    }
                ]
            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "deleteButton"
                    }
                ]
            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'datepickerfield',
                        destroyPickerOnHide: true,
                        name: 'start',
                        label: 'Start',
                        value: new Date(),
                        picker: {
                            yearFrom: 1990
                        },
                        required: true
                    },
                    {
                        xtype: 'datepickerfield',
                        destroyPickerOnHide: true,
                        name: 'end',
                        label: 'End'
                        value: new Date(),
                        picker: {
                            yearFrom: 1990
                        },
                        required: true
                    },
                    {
                        xtype: 'togglefield',
                        name: 'overtime',
                        label: 'Overtime'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#saveButton",
                event: "tap",
                fn: "onSaveButtonTap"
            },
            {
                delegate: "#deleteButton",
                event: "tap",
                fn: "onDeleteButtonTap"
            }
        ]
    },
    onSaveButtonTap: function () {
        console.log("saveShiftCommand");
        this.fireEvent("saveShiftCommand", this);
    },
    onDeleteButtonTap: function () {
        console.log("deleteShiftCommand", this);
        this.fireEvent("deleteNoteCommand", this);
    },
    onBackButtonTap: function () {
        console.log("backToHomeCommand", this);
        this.fireEvent("backToHomeCommand", this);
    }

});

