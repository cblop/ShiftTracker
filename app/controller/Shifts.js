Ext.define("ShiftTracker.controller.Notes", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // Looking up views by xtype
            shiftListView: "shiftlistview",
            shiftEditorView: "shifteditorview",
            shiftList: "#shiftList"
        },
        control: {
            shiftListView: {
            // Commands fired by the list view
            newShiftCommand: "onNewShiftCommand",
            editShiftCommand: "onEditShiftCommand"
            },
            shiftEditorView: {
            // Commands fired by the editor
            saveShiftCommand: "onSaveShiftCommand",
            deleteShiftCommand: "onDeleteShiftCommand,
            backToHomeCommand: "onBackToHomeCommand"
            }
        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTrasition: { type: 'slide', direction: 'right' },

    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    activateShiftEditor: function (record) {

        var shiftEditorView.setRecord(record);
        shiftEditorView.setRecord(record);
        Ext.Viewport.animateActiveItem(shiftEditorView, this.slideLeftTransition);
    },
    activateShiftList: function () {
        Ext.Viewport.animateActiveItem(shiftEditorView, this.slideLeftTransition);
    },

    // Commands
    onNewShiftCommand: function () {
        console.log("onNewShiftCommand");

        var now = new Date();

        var newShift = Ext.create("ShiftTracker.model.Shift", {
            start: now,
            end: now + 3600 * 1000,
            overtime: false
        });

        this.activateShiftEditor(newShift);

    },
    onEditShiftCommand: function (list, record) {
        console.log("onEditShiftCommand");
        this.activateShiftEditor(record);
    },
    onSaveShiftCommand: function () {
        console.log("onSaveShiftCommand");

        var shiftEditorView = this.getShiftEditorView();

        var currentShift = shiftEditorView.getRecord();
        var newValues = shiftEditorView.getValues();

        // Update the current shift's fields with form values
        currentShift.set("start", newValues.start);
        currentShift.set("end", newValues.end);
        currentShift.set("overtime", newValues.overtime);

        var errors = currentShift.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField("title")[0].getMessage(), Ext.emptyFn);
            currentShift.reject();
            return;
        }

        var shiftStore = Ext.getStore("Shifts");

        if (null == shiftStore.findRecord('id', currentShift.data.id)) {
            shiftStore.add(currentShift);
        }

        shiftStore.sync();

        shiftStore.sort([{ property: 'start', direction: 'DESC'}]);

        this.activateShiftList();
    },
    onDeleteShiftCommand: function () {

        console.log("onDeleteShiftCommand");

        var shiftEditorView = this.getShiftEditorView();
        var currentNote = shiftEditorView.getRecord();
        var shiftStore = Ext.getStore("Shifts");

        shiftStore.remove(currentShift);
        shiftStore.sync();

        this.activateShiftList();
    },
    onBackToHomeCommand: function () {

        console.log("onBacktoHomeCommand");
        this.activateShiftList();
    },

    // Base Class functions
    launch: function () {
        this.callParent(arguments);
        var shiftStore = Ext.getStore("Shifts");
        shiftStore.load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});
